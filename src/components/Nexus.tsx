import { debounce, sortBy } from "lodash";
import { useEffect } from "react";

import type { Point2d, Point3d } from "@/utils/math";
import { cos, dist, getMidpoint, project, sin } from "@/utils/math";
import style from "./Nexus.module.scss";

type Color = [h: number, s: number, l: number];

type Dot = {
  /** position in 3d space */
  point: Point3d;
  /** 3d position projected into 2d for canvas rendering */
  projected?: Point2d;
  /** target and actual color */
  color: Color;
  colorTarget: Color;
};

type Link = {
  /** dots to link together */
  from: Dot;
  to: Dot;
  /** target and actual color (in efficient hsl tuple format) */
  color: Color;
  colorTarget: Color;
};

/**
 * Settings shared across functions
 */

/** size of dots and links */
const size = 4;
/** distance between dots */
const gap = 50;

/** color of elements at rest */
const baseColor: Color = [185, 100, 30 + 3];
/** color of element when pulsing */
const pulseColor: Color = [185, 0, 100];

/** 3d axis rotations */
let rx = 0;
let ry = 0;
let rxTarget = 0;
let ryTarget = 0;

/** globals */
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let width = 0;
let height = 0;
let dots: Dot[] = [];
let links: Link[] = [];

/** resize canvas */
function resizeCanvas() {
  if (!canvas || !ctx) return;
  const scale = window.devicePixelRatio;
  // width = canvas.clientWidth;
  // height = canvas.clientHeight;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  canvas.width = width * scale;
  canvas.height = height * scale;
  // Set CSS size to match viewport
  ctx.scale(scale, scale);
}

/** generate field of dots and links */
const generateField = debounce(() => {
  /** generate field of dots */
  dots = [];
  /** start from grid so dots relatively uniformly distributed */
  for (let x = 0; x <= width; x += gap) {
    for (let y = 0; y <= height; y += gap) {
      if (
        /** eliminate some to make more "organic" and less "grid" */
        Math.random() > 0.4 &&
        /** avoid direct center to make visual space for logo */
        (Math.abs(x - width / 2) > gap * 2 || Math.abs(y - height / 2) > gap)
      ) {
        const angle = Math.random() * 360;
        dots.push({
          point: {
            /** nudge off grid to make more "organic" */
            x: x + sin(angle) * (gap / 4),
            y: y + cos(angle) * (gap / 4),
            /** random range to create nice thin-ish 3d layer */
            z: -gap + Math.random() * 2 * gap,
          },
          color: [...baseColor],
          colorTarget: [...baseColor],
        });
      }
    }
  }

  /** hard limit dots for performance */
  while (dots.length > 200) dots.splice(Math.floor(dots.length * Math.random()), 1);

  /** sort dots by z */
  dots = sortBy(dots, (p) => p.point.x);

  /** go through each pair of dots */
  links = [];
  for (let a = 0; a < dots.length; a++) {
    for (let b = 0; b < dots.length; b++) {
      /** upper triangular matrix to only count each pair once */
      if (a > b) {
        const from = dots[a];
        const to = dots[b];
        /** only link if dots close enough together */
        if (dist(from.point.x, from.point.y, to.point.x, to.point.y) < gap * 1.5)
          links.push({
            from,
            to,
            color: [...baseColor],
            colorTarget: [...baseColor],
          });
      }
    }
  }

  /** eliminate dots with no links */
  dots = dots.filter((dot) => links.find(({ from, to }) => dot === from || dot === to));
}, 50);

/** rotate 3d world */
function rotate(event: MouseEvent | TouchEvent) {
  /** point touched */
  const x = "clientX" in event ? event.clientX : event.touches[0].clientX;
  const y = "clientY" in event ? event.clientY : event.touches[0].clientY;
  /** set destination 3d world rotation */
  rxTarget = (0.5 - y / window.innerHeight) * 90;
  ryTarget = -(0.5 - x / window.innerWidth) * 90;
}

/** move physics simulation one step */
function move() {
  /** move 3d world rotation toward target rotation smoothly */
  rx += (rxTarget - rx) / 100;
  ry += (ryTarget - ry) / 100;

  /** for each dot */
  for (const dot of dots) {
    /** project from 3d into 2d using 3d rotation matrix */
    dot.projected = project(dot.point, rx, ry, width / 2, height / 2);
  }

  /** for each entity (dot or link) */
  for (const entity of [...dots, ...links])
    for (let c = 0; c < 3; c++)
      /** move color toward target smoothly */
      entity.color[c] += (entity.colorTarget[c] - entity.color[c]) / 15;
}

/** clear canvas for redrawing */
function clear() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, width || 0, height || 0);
}

/** draw dots and links to canvas */
function draw() {
  if (!ctx) return;

  /** draw links */
  for (const {
    from,
    to,
    color: [h, s, l],
  } of links) {
    if (!from.projected || !to.projected) continue;
    ctx.strokeStyle = `hsl(${h} ${s}% ${l}%)`;
    ctx.lineWidth = size / 3;
    ctx.beginPath();
    ctx.moveTo(from.projected.x, from.projected.y);
    ctx.lineTo(to.projected.x, to.projected.y);
    ctx.stroke();
  }

  /** draw dots */
  for (const {
    projected,
    color: [h, s, l],
  } of dots) {
    if (!projected) continue;
    ctx.fillStyle = `hsl(${h} ${s}% ${l}%)`;
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

/** pulse color of field of dots and links from inward to outward */
function pulse() {
  for (const entity of [...dots, ...links]) {
    /** get center position of entity */
    const center = "point" in entity ? entity.point : getMidpoint(entity.from.point, entity.to.point);

    /** how fast pulse propagates outward */
    const speed = 0.2;
    /** how wide pulse "band" is */
    const band = 1.5;
    /** time delays */
    const start = dist(center.x - width / 2, center.y - height / 2) / speed / band;
    const reset = start + 100 / speed;
    /** set timers */
    window.setTimeout(() => {
      entity.colorTarget = [...pulseColor];
    }, start);
    window.setTimeout(() => {
      entity.colorTarget = [...baseColor];
    }, reset);
  }
}

/** one step/tick/frame */
function step() {
  move();
  clear();
  draw();
}

export default function Nexus() {
  useEffect(() => {
    // setup canvas
    canvas = document.querySelector("#nexus");
    ctx = canvas?.getContext("2d") || null;

    // listen for resizes to canvas element
    const handleResize = () => {
      resizeCanvas();
      generateField();
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set up the canvas

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // event listeners
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => rotate(event);
    const handleTouchMove = (event: TouchEvent) => rotate(event);
    const handleMouseDown = () => pulse();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // intervals
  useEffect(() => {
    const stepInterval = setInterval(step, 1000 / 60);
    // const pulseInterval = setInterval(pulse, 10000);
    const pulseInterval = setInterval(pulse, 5000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return <canvas id="nexus" className={style.nexus} />;
}

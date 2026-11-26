import { describe, expect, it } from "vitest";
import {
  cos,
  dist,
  getMidpoint,
  type Point2d,
  type Point3d,
  project,
  rotateX,
  rotateY,
  sin,
  translate,
  wrap,
} from "@/utils/math";

const expectPointClose = (actual: Point2d | Point3d, expected: Point2d | Point3d) => {
  for (const [axis, value] of Object.entries(expected)) {
    expect(actual[axis as keyof typeof actual], axis).toBeCloseTo(value);
  }
};

describe("dist", () => {
  it("computes euclidean distance", () => {
    expect(dist(0, 0, 3, 4)).toBe(5);
    expect(dist(1, 1, 1, 1)).toBe(0);
  });

  it("defaults missing coordinates to 0", () => {
    expect(dist()).toBe(0);
    expect(dist(3, 4)).toBe(5);
  });
});

describe("sin / cos", () => {
  it("take degrees", () => {
    expect(sin(0)).toBeCloseTo(0);
    expect(sin(90)).toBeCloseTo(1);
    expect(cos(0)).toBeCloseTo(1);
    expect(cos(180)).toBeCloseTo(-1);
  });
});

describe("wrap", () => {
  it("returns values inside the range unchanged, including the bounds", () => {
    expect(wrap(5, 0, 10)).toBe(5);
    expect(wrap(0, 0, 10)).toBe(0);
    expect(wrap(10, 0, 10)).toBe(10);
  });

  it("wraps past either end to the opposite bound", () => {
    expect(wrap(11, 0, 10)).toBe(0);
    expect(wrap(-1, 0, 10)).toBe(10);
  });
});

describe("3d transforms", () => {
  it("rotateX rotates y toward z", () => {
    expectPointClose(rotateX({ x: 1, y: 1, z: 0 }, 90), { x: 1, y: 0, z: 1 });
  });

  it("rotateY rotates x toward -z", () => {
    expectPointClose(rotateY({ x: 1, y: 1, z: 0 }, 90), { x: 0, y: 1, z: -1 });
  });

  it("rotations with no angle are identity", () => {
    const point = { x: 1, y: 2, z: 3 };
    expectPointClose(rotateX(point), point);
    expectPointClose(rotateY(point), point);
  });

  it("translate adds a scaled offset", () => {
    const point = { x: 1, y: 2, z: 3 };
    const offset = { x: 10, y: 20, z: 30 };
    expect(translate(point, offset)).toEqual({ x: 11, y: 22, z: 33 });
    expect(translate(point, offset, -1)).toEqual({ x: -9, y: -18, z: -27 });
  });

  it("project with no rotation drops z", () => {
    expect(project({ x: 3, y: 2, z: 7 })).toEqual({ x: 3, y: 2 });
  });

  it("project rotates around the offset point", () => {
    // 180 degrees about y mirrors x across the offset (x = 1)
    expectPointClose(project({ x: 3, y: 2, z: 0 }, 0, 180, 1, 0), { x: -1, y: 2 });
  });

  it("getMidpoint averages each axis", () => {
    expect(getMidpoint({ x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: -6 })).toEqual({ x: 1, y: 2, z: -3 });
  });
});

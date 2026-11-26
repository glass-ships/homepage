import babel from "@rolldown/plugin-babel";
import { fileURLToPath, URL } from "node:url";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    svgr({
      include: "src/assets/icons/*.svg",
    }),
  ],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-vendor",
              test: /node_modules[\\/](react|react-dom|react-router)/,
            },
            {
              name: "ui-vendor",
              test: /node_modules[\\/]@fortawesome[\\/]react-fontawesome/,
            },
            {
              name: "icons",
              test: /node_modules[\\/]@fortawesome[\\/](free-solid-svg-icons|free-regular-svg-icons|free-brands-svg-icons)/,
            },
          ],
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});

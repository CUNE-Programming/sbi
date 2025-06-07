/**------------------------------------------------------------
 * rollup.config.mjs
 * Ian Kollipara <ian.kollipara@cune.edu>
 *
 * Rollup Configuration
 *------------------------------------------------------------**/

import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";

export default defineConfig({
  plugins: [
    commonjs(),
    nodeResolve({ browser: true }),
    postcss({ extensions: [".scss", ".sass", ".css"], extract: true }),
  ],
  input: "static/src/app.js",
  output: { dir: "static/dist" },
});

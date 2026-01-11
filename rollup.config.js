import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import bundleSize from "rollup-plugin-bundle-size";

export default {
  input: "src/index.js",
  external: [
    "@hotwired/stimulus"
  ],
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
      sourcemap: true,
    },
    {
      file: "dist/index.module.mjs",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "StimulusStaticActions",
      globals: {
        "@hotwired/stimulus": "Stimulus"
      },
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      extensions: [".js"],
      exclude: "node_modules/**",
    }),
    terser(),
    bundleSize()
  ],
};

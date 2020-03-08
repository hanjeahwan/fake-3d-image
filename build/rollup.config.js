import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import sass from "node-sass";
import { join } from "path";
import postcss from "rollup-plugin-postcss";
import glslify from "rollup-plugin-glslify";

const packageJson = require("./../package.json");

const camelize = str => {
  str = str.replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  return str.substr(0, 1).toLowerCase() + str.substr(1);
};

const processSass = context => {
  return new Promise((resolve, reject) => {
    sass.render({ file: context }, (err, result) => {
      console.log(result);
      if (!err) {
        resolve(result);
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
};

export const pkg = packageJson;

export const libraryName = camelize(pkg.name);

export const resolveFile = path => {
  return join(process.cwd(), ...path);
};

export const config = {
  input: resolveFile(["src", `${libraryName}.ts`]),
  external: [],
  watch: {
    include: "src/**"
  }
};

export const plugins = [
  json(),
  resolve({
    extensions: [".js", ".ts"]
  }),
  commonjs(),
  typescript(),
  glslify({ basedir: "./src/shaders" }),
  postcss({
    extract: "./dist/fake-3d-image.css",
    extensions: ["scss"],
    process: processSass
  })
];

import { terser } from "rollup-plugin-terser";
import { config, plugins, pkg, libraryName } from "./rollup.config";

export default {
  ...config,
  output: [
    { file: pkg.main, name: libraryName, format: "umd", sourcemap: false },
    { file: pkg.module, format: "es", sourcemap: false }
  ],
  plugins: [...plugins, terser()]
};

import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import sourceMaps from "rollup-plugin-sourcemaps";
import { config, plugins, resolveFile, libraryName } from "./rollup.config";

export default {
  ...config,
  output: [
    {
      file: "example/lib/fake3dImage.umd.js",
      name: libraryName,
      format: "umd",
      sourcemap: false
    },
    { file: "example/lib/fake3dImage.es5.js", format: "es", sourcemap: false }
  ],
  plugins: [
    ...plugins,
    sourceMaps(),
    serve({
      port: 3001,
      contentBase: [resolveFile(["example"]), resolveFile(["dist"])]
    }),
    livereload()
  ]
};

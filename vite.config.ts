import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: [
        "src/index.ts",
        "src/types.ts",
        "src/VGlass.vue",
        "src/directive.ts",
        "src/utils.ts",
        "src/directive-types.ts",
      ],
      exclude: ["src/**/*.spec.ts", "src/**/*.test.ts"],
      outDir: "dist",
      tsconfigPath: "./tsconfig.app.json",
      staticImport: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VGlass",
      fileName: (format) => `vglass.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
  },
});

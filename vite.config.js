import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [
    createVuePlugin({
      jsx: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    outDir: "test_dir",
    assetsDir: "static",
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        assetFileNames(chunkInfo) {
          const fileName = chunkInfo.name;
          let extPath = "[ext]";
          if (/\.(png|jpe?g|gif|svg)$/i.test(fileName)) {
            extPath = "img";
          } else if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(fileName)) {
            extPath = "media";
          } else if (/\.(woff2?|eot|ttf|otf)$/i.test(fileName)) {
            extPath = "fonts";
          }
          return `static/${extPath}/[name]-[hash][extname]`;
        },
      },
    },
  },
});

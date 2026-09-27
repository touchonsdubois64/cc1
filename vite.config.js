import { defineConfig } from "vite";

export default defineConfig({
    base: "/cc1/",
    build: {
        outDir: "docs",
        emptyOutDir: true
    }
});

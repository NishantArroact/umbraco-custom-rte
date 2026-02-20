import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: {
                "manifest": "src/manifests.ts",
            },
            formats: ["es"],
        },
        outDir: "../dist",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [
                /^@umbraco-cms\/backoffice/,
            ],
        },
    },
    base: "/App_Plugins/CustomRTE/dist/",
});
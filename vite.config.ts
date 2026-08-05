import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repoName = env.GITHUB_REPOSITORY?.split("/")[1] || "";
  const isGithubPages = env.GITHUB_ACTIONS === "true";
  const githubPagesBase = "/Babulu-fico/";

  return {
    plugins: [react()],
    base: isGithubPages && repoName ? `/${repoName}/` : githubPagesBase,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
  };
});

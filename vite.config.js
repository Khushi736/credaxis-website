import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Production: https://www.mycredaxis.com/  |  Admin is separate at /admin/
  const base =
    mode === "production"
      ? env.VITE_BASE_PATH || "/"
      : env.VITE_BASE_PATH || "/";

  return {
    base,
    plugins: [react()],
  };
});

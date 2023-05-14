import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
        // vite config
    root: "src",
    define: {
      __APP_ENV__: env.APP_ENV,

    },
    server: {
      port: 5800,
      open: true,
      origin: 'https://127.0.0.1:8080'
    },
    build:{
      outDir: "dist",
      assetsDir: "public"
    }
  }
})
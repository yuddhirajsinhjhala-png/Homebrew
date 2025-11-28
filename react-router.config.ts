import { defineConfig } from "react-router";
const basename = process.env.PUBLIC_URL || "/";

export default defineConfig({
  ssr: false,       // disable server-side rendering
  basename,    // required for Netlify
});

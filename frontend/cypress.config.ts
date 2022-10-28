import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:5173",
  },
  env: {
    API_URL: "http://localhost:8000",
    FRONTEND_URL: "http://localhost:5173",
    GOOD_EMAIL: "email@domain.com",
    GOOD_PASSWORD: "p@ssw0rd!",
  },
});

// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': '/src/app',  // This will map '@app' to the 'src/app' folder
    },
  },
  test: {
    environment: 'jsdom', // jsdom is needed to simulate a browser environment
    globals: true,         // Use global variables like `describe` and `it`
    setupFiles: './vitest.setup.ts',  // Optional: Set up any global configurations
    include: ['**/*.test.ts', '**/*.test.tsx'],  // Test files pattern
  },
})

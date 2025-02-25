import { defineConfig } from 'vitest/config';

// Using jsdom env (Simulate web browser)
// globals = Typescript
export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        globals: true
    }
});
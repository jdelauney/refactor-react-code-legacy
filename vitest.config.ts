import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
import type { UserConfig } from 'vitest/config';

const test = {
  globals: true,
  environment: 'jsdom',
  threads: false,
  watch: false,
  reporter: 'verbose',
  include: ['src/**/*.(test|spec).ts'],
  setupFiles: ['dotenv/config'],
} as UserConfig['test'];

export default mergeConfig(
  viteConfig,
  defineConfig({
    test,
  })
);

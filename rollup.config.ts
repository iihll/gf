import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default defineConfig({
  input: './src/index.ts',
  output: {
    file: './bin/index.js',
    format: 'cjs',
    banner: '#! /usr/bin/env node',
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    nodeResolve(),
  ],
})

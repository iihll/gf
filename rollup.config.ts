import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'

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
    uglify(),
    json(),
    copy({
      targets: [
        { src: 'src/gfConfig.json', dest: 'bin' }
      ]
    })
  ],
})

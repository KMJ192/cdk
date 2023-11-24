import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import analyze from 'rollup-plugin-analyzer';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const entry = process.env.ENTRY_POINT ?? './src/index.ts';

const plugins = [
  typescript({
    tsconfig: './tsconfig.json',
  }),
  analyze({
    summaryOnly: true,
  }),
  resolve(),
  commonjs(),
  terser({
    compress: false,
  }),
];

const rollupConfig = {
  input: entry,
  output: {
    dir: './build',
    format: 'esm',
  },
  plugins,
};

export default rollupConfig;

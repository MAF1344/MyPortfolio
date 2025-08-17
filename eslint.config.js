import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import {defineConfig, globalIgnores} from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.recommended, // aturan dasar React
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      jsxA11y.configs.recommended, // aksesibilitas JSX
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {jsx: true},
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // Mengabaikan React in scope karena JSX Transform
      'react/react-in-jsx-scope': 'off',
      // Mengabaikan prop-types karena biasanya pakai TypeScript atau manual
      'react/prop-types': 'off',
      // Error kalau variabel tidak terpakai, kecuali yang diawali _ atau huruf kapital (komponen)
      'no-unused-vars': ['error', {varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^_'}],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    ignores: [
      'vite.config.ts',
    ],
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'react-refresh/only-export-components': 'off',
      'prettier/prettier': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    }
  },
])



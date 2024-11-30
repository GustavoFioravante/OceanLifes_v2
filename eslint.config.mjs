/* eslint-disable no-undef */

import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
  {
    rules: {
      'no-console': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'warn',
    },
    env: {
      browser: true,
      node: true,
      'react-native/react-native': true,
    },

    files: ['/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        module: true,
      },
    },
    plugins: {
      react: pluginReact,
    },
    extends: ['eslint:recommended', 'plugin:react/jsx-runtime'],
    settings: {
      react: {
        version: '17.0',
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]

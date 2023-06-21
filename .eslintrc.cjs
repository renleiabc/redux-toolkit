module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        vueIndentScriptAndStyle: false,
        'jsxBracketSameLine:': true,
        htmlWhitespaceSensitivity: 'ignore',
        wrapAttributes: true,
        overrides: [
          {
            files: '*.html',
            options: {
              parser: 'html'
            }
          }
        ]
      }
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  }
};
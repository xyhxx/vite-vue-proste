module.exports = {
  extends: [
    'proste/typescript',
    'proste/vue',
    'proste/vitest',
  ],
  plugins: ['xyhxx'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'xyhxx/if-line': 1,
    'xyhxx/object-pattern-newline': 1,
  },
  overrides: [
    {
      files: ['cypress/**', 'cypress.config.ts'],
      plugins: ['cypress'],
      parserOptions: {
        project: './cypress/tsconfig.json',
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: true,
      },
      env: {
        'cypress/globals': true,
      },
    },
  ],
};

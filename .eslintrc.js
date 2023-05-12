module.exports = {
  extends: [
    'proste/typescript.js',
    'plugin:vue/vue3-recommended',
    'eslint-config-prettier',
  ],
  globals: {
    suite: true,
    test: true,
    describe: true,
    it: true,
    expect: true,
    assert: true,
    vitest: true,
    vi: true,
    beforeAll: true,
    afterAll: true,
    beforeEach: true,
    afterEach: true,
    // wait vue-eslint-parer support
    defineOptions: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
    extraFileExtensions: ['.vue'],
  },
  rules: {
    // defineOptions is not supported
    'vue/multi-word-component-names': 0,
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

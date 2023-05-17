module.exports = {
  extends: [
    'proste/typescript',
    'proste/vue',
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

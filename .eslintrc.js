module.exports = {
  extends: [
    'proste/typescript.js',
    'plugin:vue/vue3-recommended',
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
  },
  rules: {
    // wait vue eslint config
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': [
      2, {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': [1, 'never'],
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

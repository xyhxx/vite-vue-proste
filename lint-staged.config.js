module.exports = {
  '**/*/*.css': ['stylelint', 'prettier --write'],
  '**/*/*.{js,jsx,ts,tsx}': ['eslint', 'prettier --write'],
};

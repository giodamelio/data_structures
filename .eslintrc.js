module.exports = {
  extends: [
    '@scottnonnenberg/thehelp/core',
    '@scottnonnenberg/thehelp/es2015',
    '@scottnonnenberg/thehelp/test',
  ],
  rules: {
    'import/no-commonjs': 'off',
    'max-statements': 'off',
    'func-names': 'off',
    'arrow-parens': ['error', 'always'],
    'no-invalid-this': 'off',
  }
};

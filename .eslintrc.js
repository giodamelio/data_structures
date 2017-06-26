module.exports = {
  extends: [
    '@giodamelio/thehelpining/core',
    '@giodamelio/thehelpining/es2015',
    '@giodamelio/thehelpining/node',
  ],
  rules: {
    'max-statements': 'off',
    'no-invalid-this': 'off',
    'func-names': 'off',
    'valid-jsdoc': 'off',
    'filenames/match-regex': 'off',
  },
};

module.exports = {
    extends: [
      'eslint:recommended',
      'mantine',
      'plugin:@next/next/core-web-vitals',
      'plugin:@next/next/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      "eslint-config-airbnb-typescript"
    ],
    "plugins": ['react'],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  };

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  globals: {},
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-empty-object': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-anonymous-default-export': 'off',
    'jsx-a11y/alt-text': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  ignorePatterns: ['dist', 'build', 'stats.json', 'dgraph', 'data', 'temp.graphql', '*.mdx', 'storybook-static'],
  overrides: [
    {
      files: ['**/*.graphql', '**/*.gql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': [
          2,
          {
            parser: 'graphql',
          },
        ],
      },
    },
  ],
};

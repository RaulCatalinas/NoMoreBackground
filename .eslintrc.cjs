module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        sourceType: 'module'
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'astro/no-set-html-directive': 'error'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.eslint.json'
  }
}

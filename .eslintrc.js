module.exports = {
  ignorePatterns: ['vite.config.js'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.vue'],
        map: [
          ['~', './src'],
        ],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/errors',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './jsconfig.json',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-restricted-imports': ['error', {
      patterns: ['.*'],
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
  },
};

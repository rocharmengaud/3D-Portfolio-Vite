module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // IGNORING THREE JS PROPERTIES ERRORS
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          'intensity',
          'groundColor',
          'object',
          'position',
          'rotation',
          'options',
          'castShadow',
          'receiveShadow',
          'args',
          'polygonOffset',
          'polygonOffsetFactor',
          'flatShading',
        ],
      },
    ],
  },
};

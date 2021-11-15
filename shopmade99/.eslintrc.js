export default {
  'env': {
    'browser': true,
    'es2021': true,
    'react-native/react-native': true
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:react-native/all',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-native'
  ],
  'rules': {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
};

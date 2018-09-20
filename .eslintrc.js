module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0,
    "jsx-a11y/href-no-hash": "off",
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "jest": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "max-len": [
      "error",
      { "code": 5000 }
    ],
    "no-nested-ternary": "off",
    "no-confusing-arrow": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-unused-expressions": ["warn", { "allowTernary": true }],
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error",
  }
}

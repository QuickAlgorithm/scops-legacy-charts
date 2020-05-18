module.exports = {
  "ignore": [
    "coverage/",
    "node_modules/",
    "public/",
    "esm/",
    "lib/",
    "tmp/",
    "dist/",
    "*.d.ts",
    "__tests__",
    "__mocks__"
  ],
  "plugins": [
    [
      "babel-plugin-transform-dev",
      {
        "evaluate": false
      }
    ],
    "babel-plugin-typescript-to-proptypes",
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "loose": true,
        "modules": false,
        "shippedProposals": true,
        "targets": {
          "ie": 10
        },
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
};
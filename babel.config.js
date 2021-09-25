module.exports = {
  presets: [
    ["@babel/preset-env", {
      "targets": { "esmodules": true },
      "loose": true
    }]
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
  ]
};

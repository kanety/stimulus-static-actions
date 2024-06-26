module.exports = {
  presets: [
    ["@babel/preset-env", {
      "targets": { "esmodules": true },
      "loose": true
    }]
  ],
  plugins: [
    ["@babel/plugin-transform-class-properties", { "loose": true }],
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    ["@babel/plugin-transform-private-property-in-object", { "loose": true }],
  ]
};

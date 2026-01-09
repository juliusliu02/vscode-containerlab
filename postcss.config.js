module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    "postcss-prefix-selector": {
      prefix: ".topoviewer-app",
      transform(prefix, selector, prefixedSelector) {
        if (
          selector.startsWith("html") ||
          selector.startsWith("body") ||
          selector.startsWith(":root")
        ) {
          return selector;
        }
        return prefixedSelector;
      }
    }
  }
};

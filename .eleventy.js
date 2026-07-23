const { katex } = require("@mdit/plugin-katex");

module.exports = function (eleventyConfig) {
  // Register the missing 'readableDate' filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC" // Helps prevent timezone offset shifts on dates like 2026-07-21
    });
  });

  // Passthrough static assets (if you have a css folder)
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(katex));

  return {
    dir: {
      // Tell Eleventy to prefix all URLs with your repo name
      pathPrefix: "/better-brain/",
      input: "src",
      output: "_site"
    }
  };
};

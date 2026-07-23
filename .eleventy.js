const { katex } = require("@mdit/plugin-katex");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC" // Helps prevent timezone offset shifts on dates like 2026-07-21
    });
  });

  // Passthrough static assets (if you have a css folder)

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(katex));

  return {
    pathPrefix: "/better-brain/",
    dir: {
      // Tell Eleventy to prefix all URLs with your repo name
      input: "src",
      output: "_site"
    }
  };
};

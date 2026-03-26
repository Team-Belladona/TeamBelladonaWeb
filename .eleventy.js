module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
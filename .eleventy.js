const Image = require("@11ty/eleventy-img");
const cheerio = require("cheerio");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addCollection("elsewhereEnPaged", function(api) {
  const posts = api.getFilteredByTag("elsewhere-en")
    .filter(post => !post.inputPath.includes("index"))
    .sort((a, b) => a.date - b.date);
  
  for (let i = 0; i < posts.length; i++) {
    posts[i].data.previousPost = i > 0 ? posts[i - 1] : null;
    posts[i].data.nextPost = i < posts.length - 1 ? posts[i + 1] : null;
  }

  return posts;
});
  eleventyConfig.addCollection("elsewhereEn", function(api) {
    return api.getFilteredByTag("elsewhere-en")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => a.date - b.date);
});
  eleventyConfig.addCollection("elsewherePaginated", function(api) {
  return api.getFilteredByTag("elsewhere")
    .filter(post => !post.inputPath.includes("index"))
    .reverse();
});
  eleventyConfig.addCollection("elsewherePaged", function(api) {
  const posts = api.getFilteredByTag("elsewhere")
    .filter(post => !post.inputPath.includes("index"))
    .sort((a, b) => a.date - b.date);
  
  posts.forEach((post, i) => {
    post.data.previousPost = posts[i - 1] || null;
    post.data.nextPost = posts[i + 1] || null;
  });

  return posts;
});

  eleventyConfig.addCollection("elsewhere", function(api) {
    return api.getFilteredByTag("elsewhere").filter(post => !post.inputPath.includes("index"));
  });

  eleventyConfig.addFilter("limit", function(arr, n) {
    return arr.slice(0, n);
  });

  eleventyConfig.addFilter("formatDate", function(date) {
    return new Date(date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  });

  eleventyConfig.addFilter("firstImage", function(content) {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  });

  eleventyConfig.addTransform("webpImages", async function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;

    const $ = cheerio.load(content);
    const imgs = $("img").toArray();

      for (const img of imgs) {
        const src = decodeURIComponent($(img).attr("src"));
        if (!src || src.startsWith("http") || src.startsWith("/assets/img/") || src.includes(".gif")) continue;
        const localPath = "." + src;

      try {
        let metadata = await Image(localPath, {
          widths: [800],
          formats: ["webp"],
          outputDir: "./_site/assets/img/",
          urlPath: "/assets/img/"
        });

        const data = metadata.webp[0];
        $(img).attr("src", data.url);
      } catch(e) {
        // 변환 실패시 원본 유지
      }
    }

    return $.html();
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
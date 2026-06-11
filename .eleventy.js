const Image = require("@11ty/eleventy-img");
const cheerio = require("cheerio");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addCollection("elsewhereEnPaged", function(api) {
    const posts = api.getFilteredByTag("elsewhere-en")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => b.date - a.date);
    
    for (let i = 0; i < posts.length; i++) {
      posts[i].data.previousPost = i > 0 ? posts[i - 1] : null;
      posts[i].data.nextPost = i < posts.length - 1 ? posts[i + 1] : null;
    }
    return posts;
  });
  eleventyConfig.addCollection("elsewhereEn", function(api) {
    return api.getFilteredByTag("elsewhere-en")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("elsewhereEnPaginated", function(api) {
  return api.getFilteredByTag("elsewhere-en")
    .filter(post => !post.inputPath.includes("index"))
    .sort((a, b) => b.date - a.date);
});

eleventyConfig.addCollection("elsewherePaginated", function(api) {
  return api.getFilteredByTag("elsewhere")
    .filter(post => !post.inputPath.includes("index"))
    .sort((a, b) => b.date - a.date);
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

  eleventyConfig.addCollection("elsewhereJaPaged", function(api) {
    const posts = api.getFilteredByTag("elsewhere-ja")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => a.date - b.date);

    for (let i = 0; i < posts.length; i++) {
      posts[i].data.previousPost = i > 0 ? posts[i - 1] : null;
      posts[i].data.nextPost = i < posts.length - 1 ? posts[i + 1] : null;
    }
    return posts;
  });

  eleventyConfig.addCollection("elsewhereJa", function(api) {
    return api.getFilteredByTag("elsewhere-ja")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => a.date - b.date);
  });

  eleventyConfig.addCollection("elsewhereJaPaginated", function(api) {
    return api.getFilteredByTag("elsewhere-ja")
      .filter(post => !post.inputPath.includes("index"))
      .reverse();
  });

  // Combined devlog collections (elsewhere + nowhere)
  eleventyConfig.addCollection("devlogKoPaged", function(api) {
    const posts = api.getFilteredByTag("devlog-ko")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => a.date - b.date);
    posts.forEach((post, i) => {
      post.data.previousPost = posts[i - 1] || null;
      post.data.nextPost = posts[i + 1] || null;
    });
    return posts;
  });

  eleventyConfig.addCollection("devlogKoPaginated", function(api) {
    return api.getFilteredByTag("devlog-ko")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("devlogEnPaginated", function(api) {
    return api.getFilteredByTag("devlog-en")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("devlogJaPaginated", function(api) {
    return api.getFilteredByTag("devlog-ja")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => b.date - a.date);
  });

  // Nowhere collections
  eleventyConfig.addCollection("nowherePaged", function(api) {
    const posts = api.getFilteredByTag("nowhere")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => a.date - b.date);
    posts.forEach((post, i) => {
      post.data.previousPost = posts[i - 1] || null;
      post.data.nextPost = posts[i + 1] || null;
    });
    return posts;
  });

  eleventyConfig.addCollection("nowherePaginated", function(api) {
    return api.getFilteredByTag("nowhere")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("nowhereEnPaged", function(api) {
    const posts = api.getFilteredByTag("nowhere-en")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => a.date - b.date);
    posts.forEach((post, i) => {
      post.data.previousPost = posts[i - 1] || null;
      post.data.nextPost = posts[i + 1] || null;
    });
    return posts;
  });

  eleventyConfig.addCollection("nowhereEnPaginated", function(api) {
    return api.getFilteredByTag("nowhere-en")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("nowhereJaPaged", function(api) {
    const posts = api.getFilteredByTag("nowhere-ja")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => a.date - b.date);
    posts.forEach((post, i) => {
      post.data.previousPost = posts[i - 1] || null;
      post.data.nextPost = posts[i + 1] || null;
    });
    return posts;
  });

  eleventyConfig.addCollection("nowhereJaPaginated", function(api) {
    return api.getFilteredByTag("nowhere-ja")
      .filter(post => !post.inputPath.includes("index"))
      .sort((a, b) => b.date - a.date);
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
    if (!match) return null;

    const url = match[1];
    const isSafe = url.startsWith("http://") ||
                  url.startsWith("https://") ||
                  url.startsWith("/");

    return isSafe ? url : null;
  });

  eleventyConfig.addTransform("webpImages", async function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;

    const path = require("path");
    const $ = cheerio.load(content);
    const imgs = $("img").toArray();

    for (const img of imgs) {
      const src = decodeURIComponent($(img).attr("src") || "");
      if (!src || src.startsWith("http") || src.startsWith("/assets/img/") || src.includes(".gif")) continue;

      const localPath = "." + src;
      const resolved = path.resolve(localPath);
      const base = path.resolve(".");

      // 🆕 디렉토리 탈출 방지
      if (!resolved.startsWith(base)) continue;

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
const path = require("path");
const sm = require("sitemap");
const fs = require("fs");

const routes = require("./routes");

const OUTPUT_FILE = path.resolve(
  __dirname,
  "..",
  "public",
  "sitemap.xml"
);

const sitemap = sm.createSitemap({
  hostname: "https://matterbase.io",
  cacheTime: 60000, //600 sec (10 min) cache purge period
  urls: Object.values(routes.public).map(function(route) {
    return {
      url: route.path,
      changefreq: "weekly",
      priority: 1
    };
  })
});

fs.writeFileSync(OUTPUT_FILE, sitemap.toString());

console.log(`Sitemap written at ${OUTPUT_FILE}`);

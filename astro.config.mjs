import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Read blog frontmatter at config time (astro:content is not yet available
// here) so the sitemap can emit a meaningful <lastmod> per post. Non-blog
// pages fall back to the build timestamp.
function loadBlogLastmod() {
  const dir = fileURLToPath(new URL("./src/content/blog/", import.meta.url));
  const map = new Map();
  let files = [];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".md"));
  } catch {
    return map;
  }
  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = readFileSync(join(dir, file), "utf8");
    const fmMatch = raw.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];
    if (/^\s*draft\s*:\s*true/m.test(fm)) continue;
    const updated = fm.match(/^\s*updated\s*:\s*['"]?([\d-]+)/m)?.[1];
    const date = fm.match(/^\s*date\s*:\s*['"]?([\d-]+)/m)?.[1];
    const iso = updated ?? date;
    if (iso) map.set(`/blog/${slug}/`, new Date(iso).toISOString());
  }
  return map;
}

const blogLastmod = loadBlogLastmod();
const buildTime = new Date().toISOString();

export default defineConfig({
  site: "https://www.sklad-tekstu.pl",
  integrations: [
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        item.lastmod = blogLastmod.get(url.pathname) ?? buildTime;
        return item;
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});

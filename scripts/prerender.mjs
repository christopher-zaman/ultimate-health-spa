
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverEntry = path.join(
  root,
  ".ssr-temp",
  "entry-server.js"
);

const { render } = await import(
  pathToFileURL(serverEntry).href
);

const categories = [
  "facials-skincare",
  "botox-fillers",
  "advanced-skin",
  "waxing-lashes",
  "body-contouring",
  "wellness-injections",
  "mental-wellness",
  "intimate-wellness",
];

const routes = [
  "/",
  "/about",
  "/services",
  ...categories.map((slug) => `/services/${slug}`),
  "/contact",
  "/privacy",
];

const template = await fs.readFile(
  path.join(dist, "index.html"),
  "utf8"
);

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

for (const route of routes) {
  const { html, seo } = render(route);

  if (!html.trim()) {
    throw new Error(`Empty HTML generated for ${route}`);
  }

  const metadata = `
    <title>${escapeHTML(seo.title)}</title>
    <meta name="description" content="${escapeHTML(seo.description)}">
    <meta name="robots" content="${escapeHTML(seo.robots)}">
    <link rel="canonical" href="${escapeHTML(seo.canonical)}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeHTML(seo.title)}">
    <meta property="og:description" content="${escapeHTML(seo.description)}">
    <meta property="og:url" content="${escapeHTML(seo.canonical)}">
    <meta name="twitter:card" content="summary">
    <script id="spa-local-business-schema" type="application/ld+json">${JSON.stringify(seo.schema).replace(/</g, "\\u003c")}</script>
  `;

  let output = template
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[^>]*>/i, "")
    .replace(/<link\s+rel="canonical"[^>]*>/i, "")
    .replace("</head>", `${metadata}\n</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

  if (!output.includes(`<div id="root">${html}</div>`)) {
    throw new Error(`Root injection failed for ${route}`);
  }

  const relative = route === "/" ? "" : route.slice(1);
  const outputDir = path.join(dist, relative);

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(
    path.join(outputDir, "index.html"),
    output
  );

  console.log(`Prerendered: ${route}`);
}

console.log(`Successfully prerendered ${routes.length} pages.`);

import { readFile, writeFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import puppeteer from "puppeteer";

const { data, content } = matter(await readFile("cv.md", "utf-8"));
const css = await readFile("style.css", "utf-8");
const html = `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8"><style>${css}</style></head>
  <body>${marked.parse(content)}</body>
</html>`;

// Accept CSS-style shorthand ("20mm 25mm") for the margin front-matter value
const margin = data.pdf_options?.margin;
if (typeof margin === "string") {
  const [top, right = top, bottom = top, left = right] = margin.split(/\s+/);
  data.pdf_options.margin = { top, right, bottom, left };
}

const browser = await puppeteer.launch({
  args: process.env.CI ? ["--no-sandbox"] : [],
});
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");
  const pdf = await page.pdf({
    printBackground: true,
    format: "a4",
    ...data.pdf_options,
  });
  await writeFile("cv.pdf", pdf);
} finally {
  await browser.close();
}

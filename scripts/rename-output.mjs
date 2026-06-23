import { readdir, rename } from "node:fs/promises";
import { resolve } from "node:path";

const distDirectory = resolve("dist");
const outputName = "a2-english-maintenance-map.html";
const entries = await readdir(distDirectory, { withFileTypes: true });
const files = entries.filter((entry) => entry.isFile());

if (files.length !== 1) {
  throw new Error(`Expected dist to contain exactly one delivery file, found ${files.length}.`);
}

const [file] = files;
if (!file.name.endsWith(".html")) {
  throw new Error(`Expected the only delivery file to be HTML, found ${file.name}.`);
}

if (file.name !== outputName) {
  await rename(resolve(distDirectory, file.name), resolve(distDirectory, outputName));
}

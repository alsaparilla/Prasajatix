// organize-products.js
// Run this script in your project root: node organize-products.js

const fs = require("fs");
const path = require("path");

const outDir = "./out/products";

// Read all files in the products directory
fs.readdir(outDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    // Match product-X.html files
    const match = file.match(/^product-(\d+)\.html$/);
    if (match) {
      const productId = match[1];
      const oldPath = path.join(outDir, file);
      const newDir = path.join(outDir, productId);
      const newPath = path.join(newDir, "index.html");

      // Create directory if it doesn't exist
      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir, { recursive: true });
      }

      // Move and rename file
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error moving ${file}:`, err);
        } else {
          console.log(`Moved ${file} to ${productId}/index.html`);
        }
      });
    }
  });
});

console.log("Organizing product files...");

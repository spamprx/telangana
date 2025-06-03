const fs = require('fs');
const path = require('path');

function getAllImages(dir) {
    let results = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            results = results.concat(getAllImages(fullPath));
        } else if (item.toUpperCase().endsWith('.JPG')) {
            // Get relative path from public directory
            const relativePath = fullPath.split('public')[1];
            results.push(relativePath);
        }
    }

    return results;
}

const districtsPath = path.join(__dirname, '../public/districts');
const images = getAllImages(districtsPath);

// Create gallery entries
const galleryEntries = images.map((imagePath, index) => {
    const parts = imagePath.split('/');
    const district = parts[2]; // districts/[district]/...
    const filename = parts[parts.length - 1];
    
    return `  {
    id: ${index + 121},
    src: "${imagePath}",
    alt: "${district} District Image",
    title: "${filename}",
    description: "Photo from ${district} district.",
    category: "District Gallery",
    location: "${district}",
    date: "2023"
  }`;
}).join(',\n');

// Read the current gallery.ts file
const galleryPath = path.join(__dirname, '../lib/gallery.ts');
let galleryContent = fs.readFileSync(galleryPath, 'utf8');

// Find the position of the last entry
const lastEntryPos = galleryContent.lastIndexOf('  {');
const endArrayPos = galleryContent.lastIndexOf(']');

// Insert the new entries
const newContent = galleryContent.slice(0, lastEntryPos) + 
                  galleryEntries + 
                  '\n' +
                  galleryContent.slice(endArrayPos);

// Write back to gallery.ts
fs.writeFileSync(galleryPath, newContent); 
// Simple script to generate placeholder images
// Run with: node scripts/generate-placeholders.js

const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder
const createSVG = (width, height, text) => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
};

const publicDir = path.join(__dirname, '..', 'public');

// Note: This creates SVG placeholders. For production, replace with actual JPG images.
// You can use tools like ImageMagick or online services to convert SVG to JPG.

const profileSVG = createSVG(800, 800, 'Profile');
const ogSVG = createSVG(1200, 630, 'OG Image');

fs.writeFileSync(path.join(publicDir, 'profile.svg'), profileSVG);
fs.writeFileSync(path.join(publicDir, 'og.svg'), ogSVG);

console.log('Placeholder SVG images created. Replace with actual JPG images for production.');


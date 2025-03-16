// This script generates placeholder SVG images for pills
// Run with: node scripts/generate-placeholders.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the directory exists
const pillsDir = path.join(__dirname, '../public/images/pills');
if (!fs.existsSync(pillsDir)) {
  fs.mkdirSync(pillsDir, { recursive: true });
}

// Pills data from src/data/pills.json
const pills = [
  {
    id: "paracetamol-500mg",
    name: "Paracetamol 500mg",
    image: "/images/pills/paracetamol.webp",
    canCrush: true,
  },
  {
    id: "atorvastatin-10mg",
    name: "Atorvastatin 10mg",
    image: "/images/pills/atorvastatin.webp",
    canCrush: false,
  },
  {
    id: "metformin-500mg",
    name: "Metformin 500mg",
    image: "/images/pills/metformin.webp",
    canCrush: true,
  },
  {
    id: "amlodipine-5mg",
    name: "Amlodipine 5mg",
    image: "/images/pills/amlodipine.webp",
    canCrush: true,
  },
  {
    id: "pantoprazole-40mg",
    name: "Pantoprazole 40mg",
    image: "/images/pills/pantoprazole.webp",
    canCrush: false,
  }
];

// Generate a simple SVG for each pill
pills.forEach(pill => {
  const fileName = path.basename(pill.image);
  const filePath = path.join(pillsDir, fileName);
  
  // Generate a different color based on whether the pill can be crushed
  const bgColor = pill.canCrush ? '#4ade80' : '#ef4444';
  const textColor = pill.canCrush ? '#166534' : '#7f1d1d';
  
  // Create a simple SVG with the pill name
  const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${bgColor}" rx="20" ry="20" />
    <circle cx="100" cy="100" r="70" fill="white" opacity="0.8" />
    <text x="100" y="90" font-family="Arial" font-size="16" text-anchor="middle" fill="${textColor}">
      ${pill.name.split(' ')[0]}
    </text>
    <text x="100" y="110" font-family="Arial" font-size="16" text-anchor="middle" fill="${textColor}">
      ${pill.name.split(' ')[1] || ''}
    </text>
    <text x="100" y="140" font-family="Arial" font-size="14" text-anchor="middle" fill="${textColor}">
      ${pill.canCrush ? 'Safe to Crush' : 'Do Not Crush'}
    </text>
  </svg>`;
  
  // Write the SVG file
  fs.writeFileSync(filePath.replace('.webp', '.svg'), svgContent);
  console.log(`Generated ${filePath.replace('.webp', '.svg')}`);
});

console.log('Placeholder images generated successfully!'); 
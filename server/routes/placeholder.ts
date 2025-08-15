import { RequestHandler } from "express";

export const handlePlaceholder: RequestHandler = (req, res) => {
  const { width = 80, height = 80 } = req.params;
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#FCD34D"/>
      <circle cx="50%" cy="40%" r="20%" fill="#92400E"/>
      <circle cx="40%" cy="35%" r="3%" fill="white"/>
      <circle cx="60%" cy="35%" r="3%" fill="white"/>
      <path d="M 35% 55% Q 50% 65% 65% 55%" stroke="#92400E" stroke-width="2" fill="none"/>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
};

import { readdirSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  try {
    const imagesDir = join(process.cwd(), 'public', 'images');

    const galleries = {
      maternity: [],
      'maternity-outdoor': [],
      newborn: []
    };

    Object.keys(galleries).forEach(gallery => {
      const galleryPath = join(imagesDir, gallery);
      try {
        const files = readdirSync(galleryPath);
        galleries[gallery] = files
          .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
          .map(file => `/images/${gallery}/${file}`)
          .sort();
      } catch (error) {
        console.error(`Error reading ${gallery}:`, error);
      }
    });

    res.status(200).json(galleries);
  } catch (error) {
    console.error('Error loading images:', error);
    res.status(500).json({ error: 'Failed to load images' });
  }
}

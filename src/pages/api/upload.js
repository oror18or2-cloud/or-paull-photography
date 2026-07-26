import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing form' });
    }

    const gallery = fields.gallery || 'maternity';
    const file = files.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
      const uploadDir = join(process.cwd(), 'public', 'images', gallery);
      mkdirSync(uploadDir, { recursive: true });

      const filename = `${Date.now()}-${file.originalFilename}`;
      const filepath = join(uploadDir, filename);

      const data = require('fs').readFileSync(file.filepath);
      writeFileSync(filepath, data);

      require('fs').unlinkSync(file.filepath);

      return res.status(200).json({
        success: true,
        filename,
        path: `/images/${gallery}/${filename}`
      });
    } catch (error) {
      console.error('Upload error:', error);
      return res.status(500).json({ error: 'Upload failed' });
    }
  });
}

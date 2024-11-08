import express from 'express';
import multer from 'multer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Convert } from './convert.cjs';
const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory
const upload = multer({ dest: './images' });

app.get('/', (_, res) => {
  res.sendFile(join(__dirname, 'form.html'));
});
// Route to handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  console.log(req.body.title);
  Convert(req.file.filename, req.body.title);
  // res.send(`File uploaded successfully: ${req.file.filename}`);
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

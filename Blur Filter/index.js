const express = require('express');
const multer = require('multer');
const Jimp = require('jimp');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Serve static files
app.use(express.static('public'));

// Upload route
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Load the uploaded image
    const image = await Jimp.read(req.file.path);

    // Get the blur quality from the request body
    const blurQuality = parseInt(req.body.blurQuality);

    // Apply blur effect with the selected quality
    image.blur(blurQuality);

    // Save the blurred image
    const blurredImagePath = `uploads/blurred_${req.file.originalname}`;
    await image.writeAsync(blurredImagePath);

    // Send download link
    res.json({ downloadLink: `/download/${req.file.originalname}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

// Download route
app.get('/download/:filename', (req, res) => {
  const fileName = req.params.filename;
  const blurredImagePath = `uploads/blurred_${fileName}`;

  // Send the blurred image as a download response
  res.download(blurredImagePath, `blurred_${fileName}`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to download image' });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
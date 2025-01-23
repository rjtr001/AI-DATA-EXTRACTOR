const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the backend directory
app.use(express.static(path.join(__dirname)));

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Endpoint to upload PDF and process it
app.post('/upload', upload.single('pdf'), (req, res) => {
    const { exec } = require('child_process');
    const pdfPath = req.file.path;

    exec(`python pdf_parser/extract.py ${pdfPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            return res.status(500).send('Error processing PDF');
        }
        const extractedData = JSON.parse(stdout);
        res.json(extractedData);
    });
});

// Serve the upload_extract.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'upload_extract.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

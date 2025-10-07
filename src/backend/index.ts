import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __assets = path.join(__dirname, '../../assets');

const app = express();

// middleware to process post requests with json
app.use(express.json());

// API routes
app.get('/api/test', async (req, res) => {
  res.json({ 
    restResponse: { 
      someArray: [1, 2, 3],
      someNumber: 13,
      someString: 'Btw, I use arch'
    } 
  });
});

// Static files (must come before SPA routing)
app.use(express.static(path.join(__dirname, '../../build/frontend')));
app.use('/assets', express.static(__assets));

// SPA routing - catch all routes that start with /app
app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/frontend/index.html'));
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
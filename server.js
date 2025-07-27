// server.js
const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

// Serve file statis dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html kalau user buka root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});

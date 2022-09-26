const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./data/notes');

const PORT = process.env.PORT || 3005;
const app = express();


app.get('/api/notes', (req, res) => {
    res.json(notes);
  });















app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  
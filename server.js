require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const allowedOrigins = require('./config/allowedOrigins');
const PORT = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

// Middleware
// Custom Logging Middleware
app.use(logger);

// Cors Options Request Handler
app.use(cors(corsOptions));

// receive and parse json data
app.use(express.json());

// express static middleware
app.use('/', express.static(path.join(__dirname, 'public')));

// Base route
app.use('/api', require('./api'));

// Error Handler
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

// Custom Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

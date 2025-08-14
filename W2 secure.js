const express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const winston = require('winston');

const router = express.Router();

// Initialize Winston logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'security.log' })
  ]
});

// POST /api/secure/register
router.post('/register', async (req, res) => {
  logger.info('Register endpoint hit with data:', req.body);
  const { email, password } = req.body;

  // Validate email
  if (!validator.isEmail(email)) {
    logger.warn('Invalid email provided:', email);
    return res.status(400).send('Invalid email address.');
  }

  // Validate password complexity
  if (!validator.isLength(password, { min: 8 })) {
    logger.warn('Password too short:', password);
    return res.status(400).send('Password must be at least 8 characters.');
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    logger.info('Password hashed successfully:', hashedPassword);
    // Simulate saving to database
    return res.status(200).send('User registered successfully.');
  } catch (err) {
    logger.error('Error hashing password:', err);
    return res.status(500).send('Error hashing password.');
  }
});

// POST /api/secure/login
router.post('/login', async (req, res) => {
  logger.info('Login endpoint hit with data:', req.body);
  const { email, password } = req.body;

  // Validate email
  if (!validator.isEmail(email)) {
    logger.warn('Invalid email provided:', email);
    return res.status(400).send('Invalid email address.');
  }

  try {
    // Simulate credential verification
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    logger.info('Token generated:', token);
    return res.status(200).json({ token });
  } catch (err) {
    logger.error('Error generating token:', err);
    return res.status(500).send('Error generating token.');
  }
});

module.exports = router;

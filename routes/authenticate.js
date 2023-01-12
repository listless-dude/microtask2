const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = '../models/authentication.js';

const router = express.Router();
const HASH = 'hosteldevta';


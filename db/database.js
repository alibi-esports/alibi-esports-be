const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DATABASE_URI, { logging: false });

if (db) {
  console.log('Connected to Postgres');
}

module.exports = db;

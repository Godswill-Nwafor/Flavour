const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');
if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);

const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json')));

const db = {
  products,
  users: [],
  contacts: [],
  carts: [],
};

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('Initialized JSON DB at', dbPath);

require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || process.env.NODE_PORT || 4000;
const SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

const dbFile = process.env.DB_PATH || path.join(__dirname, 'db.json');

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

const dbPath = dbFile;

function readDB() {
  try { return JSON.parse(fs.readFileSync(dbPath)); } catch (e) { return { products: [], users: [], contacts: [], carts: [] }; }
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

const db = { read: readDB, write: writeDB };

app.get('/api/products', (req, res) => {
  const data = db.read();
  res.json(data.products || []);
});

app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = db.read();
  const p = (data.products || []).find((x) => x.id === id);
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
});

app.post('/api/cart', (req, res) => {
  const { sessionId, items } = req.body;
  if (!sessionId || !items) return res.status(400).json({ error: 'sessionId and items required' });
  const data = db.read();
  const now = new Date().toISOString();
  let existing = (data.carts || []).find((c) => c.sessionId === sessionId);
  if (existing) {
    existing.items = items;
    existing.updated_at = now;
  } else {
    existing = { id: Date.now(), sessionId, items, updated_at: now };
    data.carts = data.carts || [];
    data.carts.push(existing);
  }
  db.write(data);
  res.json({ id: existing.id, sessionId, items });
});

app.get('/api/cart/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const data = db.read();
  const row = (data.carts || []).find((c) => c.sessionId === sessionId);
  if (!row) return res.json({ items: [] });
  res.json({ items: row.items || [] });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  const data = db.read();
  data.contacts = data.contacts || [];
  const rec = { id: Date.now(), name, email, subject: subject || '', message, created_at: new Date().toISOString() };
  data.contacts.push(rec);
  db.write(data);
  res.json({ id: rec.id, status: 'ok' });
});

app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });
  const data = db.read();
  data.users = data.users || [];
  if ((data.users || []).some((u) => u.email === email)) return res.status(400).json({ error: 'User exists' });
  const hashed = bcrypt.hashSync(password, 8);
  const user = { id: Date.now(), email, password: hashed };
  data.users.push(user);
  db.write(data);
  const token = jwt.sign({ id: user.id, email }, SECRET, { expiresIn: '7d' });
  res.json({ token });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });
  const data = db.read();
  const user = (data.users || []).find((u) => u.email === email);
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const ok = bcrypt.compareSync(password, user.password);
  if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '7d' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});

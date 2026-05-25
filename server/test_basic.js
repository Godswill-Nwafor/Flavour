const fetch = global.fetch || require('node-fetch');
const base = process.env.API_BASE || 'http://localhost:4000';

async function run() {
  console.log('Running basic server tests against', base);
  try {
    let res = await fetch(`${base}/api/products`);
    console.log('/api/products', res.status);
    const products = await res.json();
    console.log('products count:', products.length);

    // register and login
    const email = `test+${Date.now()}@example.com`;
    res = await fetch(`${base}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: 'password123' }),
    });
    console.log('/api/auth/register', res.status);
    const reg = await res.json();
    if (!reg.token) console.warn('register did not return token');

    res = await fetch(`${base}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: 'password123' }),
    });
    console.log('/api/auth/login', res.status);
    const login = await res.json();
    if (!login.token) console.warn('login did not return token');

    console.log('Basic tests completed');
  } catch (err) {
    console.error('Test failed', err && err.message ? err.message : err);
    process.exit(2);
  }
}

run();

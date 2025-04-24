const express = require('express');
const app = express();

function fibonacci(n) {
  if (n < 0) throw new Error('n must be non-negative');
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

app.get('/fibonacci', (req, res) => {
  const n = parseInt(req.query.n, 10);

  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'Please provide a non-negative integer n.' });
  }

  try {
    const result = fibonacci(n);
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Fibonacci API listening on port ${PORT}`);
});

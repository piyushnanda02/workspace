// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store
// Each card: { id: number, suit: string, value: string }
let cards = [
  { id: 1, suit: 'Hearts', value: 'Ace' },
  { id: 2, suit: 'Spades', value: 'King' },
  { id: 3, suit: 'Diamonds', value: 'Queen' }
];

// Utility to get next id
const nextId = () => (cards.length ? Math.max(...cards.map(c => c.id)) + 1 : 1);

// Routes

// Health check
app.get('/', (_req, res) => {
  res.json({ status: 'OK', service: 'Cards API', endpoints: ['/cards'] });
});

// List all cards
app.get('/cards', (_req, res) => {
  res.status(200).json(cards);
});

// Get a single card by id
app.get('/cards/:id', (req, res) => {
  const id = Number(req.params.id);
  const card = cards.find(c => c.id === id);
  if (!card) {
    return res.status(404).json({ error: `Card with ID ${id} not found` });
  }
  res.status(200).json(card);
});

// Add a new card
app.post('/cards', (req, res) => {
  const { suit, value } = req.body || {};
  if (!suit || !value) {
    return res.status(400).json({ error: 'Both "suit" and "value" are required' });
  }

  // Optional: prevent duplicates of exact suit+value
  const exists = cards.some(
    c => c.suit.toLowerCase() === String(suit).toLowerCase() &&
         c.value.toLowerCase() === String(value).toLowerCase()
  );
  if (exists) {
    return res.status(409).json({ error: 'Card with same suit and value already exists' });
  }

  const card = { id: nextId(), suit: String(suit), value: String(value) };
  cards.push(card);
  res.status(201).json({ message: 'Card created', card });
});

// Delete a card by id
app.delete('/cards/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = cards.findIndex(c => c.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: `Card with ID ${id} not found` });
  }
  const [removed] = cards.splice(idx, 1);
  res.status(200).json({ message: `Card with ID ${id} removed`, card: removed });
});

// Start server
app.listen(PORT, () => {
  console.log(`Cards API running on http://localhost:${PORT}`);
});

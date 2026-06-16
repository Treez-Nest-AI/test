const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ status: 'ok', message: 'Reditx API running' }));
app.get('/health', (req, res) => res.json({ status: 'healthy' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
const express = require('express');
const path = require('path');
const tickersRoute = require('./routes/tickers');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', tickersRoute);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

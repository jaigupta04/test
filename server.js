const express = require('express');
const cors    = require('cors');

const app = express();

// const corsOptions = {
//   origin: 'https://vitalcare-connect.vercel.app',
// };

app.use(express.json());
app.use(cors());


// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Server is running!', 
    endpoints: {
      test: '/api/test'
    }
  });
});

// GET API

app.get('/api/test', async (req, res) => {

  res.send('Hello World!');

});

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

module.exports = app;

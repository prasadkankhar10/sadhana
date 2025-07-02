const fetch = require('node-fetch');

exports.fetchMotivationalMessage = async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();

    if (data && data[0]) {
      res.status(200).json({
        quote: data[0].q,
        author: data[0].a,
      });
    } else {
      res.status(500).json({
        error: 'Failed to fetch motivational message',
      });
    }
  } catch (error) {
    console.error('Error fetching motivational message:', error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

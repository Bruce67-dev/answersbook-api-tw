export default function handler(req, res) {
  const data = require('../../answersbook_i18n.json');

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomAnswer = data[randomIndex];

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(randomAnswer);
}

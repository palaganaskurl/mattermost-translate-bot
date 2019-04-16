const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Test!');
});

app.post('/webhook', (req, res) => {
  const { text } = req.body;

  console.log(req.body);
  console.log(text);

  res.set('Content-Type', 'application/json');
  res.status(200).send({
    text: 'Translate.'
  });
});

const listener = app.listen(port, () => console.log(`App is listening on port ${listener.address().port}`));

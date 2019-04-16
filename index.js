const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.port || 6969;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('11');
});

app.post('/webhook', (req, res) => {
  console.log(req);
});

app.listen(port, () => console.log(`App listening on port ${port}`));

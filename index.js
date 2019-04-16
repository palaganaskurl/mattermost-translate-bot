const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('11');
});

app.post('/webhook', (req, res) => {
  console.log(req);
});

const listener = app.listen(port, () => console.log(`App is listening on port ${listener.address().port}`));

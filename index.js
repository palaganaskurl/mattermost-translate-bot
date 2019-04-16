const app = require('express')();
const bodyParser = require('body-parser');
const translator = require('translate-api');

const port = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Test!');
});

app.post('/webhook', async (req, res) => {
  // Translate format - translate Hello en-tl
  const { text } = req.body;

  const WORD_TO_BE_TRANSLATED = 1;
  const LANGUAGE_FROM_TO = 2;
  const FROM_LANGUAGE = 0;
  const TO_LANGUAGE = 1;

  const args = text.split(' ');
  const wordToBeTranslated = args[WORD_TO_BE_TRANSLATED];
  const languageDirection = args[LANGUAGE_FROM_TO].split('-');
  const fromLanguage = languageDirection[FROM_LANGUAGE];
  const toLanguage = languageDirection[TO_LANGUAGE];

  console.log(req.body, text, wordToBeTranslated, fromLanguage, toLanguage);

  const translated = await translator.getText(wordToBeTranslated, { from: fromLanguage, to: toLanguage });
  console.log(translated);
  res.set('Content-Type', 'application/json');
  res.status(200).send({
    text: 'Translate.'
  });
});

const listener = app.listen(port, () => console.log(`App is listening on port ${listener.address().port}`));

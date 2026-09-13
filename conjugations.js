// Six present-tense forms: yo, tú, él/ella/usted, nosotros, vosotros, ellos/ustedes.
const conjugationVerbs = [
  { verb: 'Ser', meaning: 'to be (identity or characteristics)', forms: ['soy', 'eres', 'es', 'somos', 'sois', 'son'], object: ' de México', english: 'from Mexico', be: true },
  { verb: 'Oír', meaning: 'to hear', forms: ['oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'], object: ' música', english: 'hear music', third: 'hears music' },
  { verb: 'Estar', meaning: 'to be (state or location)', forms: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'], object: ' en casa', english: 'at home', be: true },
  { verb: 'Ir', meaning: 'to go', forms: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'], object: ' a la escuela', english: 'go to school', third: 'goes to school' },
  { verb: 'Tener', meaning: 'to have', forms: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'], object: ' un libro', english: 'have a book', third: 'has a book' },
  { verb: 'Decir', meaning: 'to say / to tell', forms: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'], object: ' la verdad', english: 'tell the truth', third: 'tells the truth' },
];
const conjugationPeople = [
  { spanish: 'Yo', form: 0, english: 'I', be: 'am' },
  { spanish: 'Tú', form: 1, english: 'You', be: 'are' },
  { spanish: 'Él', form: 2, english: 'He', be: 'is', third: true },
  { spanish: 'Ella', form: 2, english: 'She', be: 'is', third: true },
  { spanish: 'Usted', form: 2, english: 'You', be: 'are' },
  { spanish: 'Nosotros', form: 3, english: 'We', be: 'are' },
  { spanish: 'Nosotras', form: 3, english: 'We', be: 'are' },
  { spanish: 'Ellos', form: 5, english: 'They', be: 'are' },
  { spanish: 'Ellas', form: 5, english: 'They', be: 'are' },
  { spanish: 'Ustedes', form: 5, english: 'You all', be: 'are' },
];

function conjugationSentence(verb, person) {
  const englishVerb = verb.be ? `${person.be} ${verb.english}` : (person.third ? verb.third : verb.english);
  return {
    spanish: `${person.spanish} ${verb.forms[person.form]}${verb.object || ''}.`,
    english: `${person.english} ${englishVerb}.`,
  };
}

const conjugationContainer = document.getElementById('conjugation-examples');
for (const verb of conjugationVerbs) {
  const article = document.createElement('article');
  article.className = 'conjugation-verb';
  const heading = document.createElement('h3');
  const spanishHeading = document.createElement('span');
  spanishHeading.lang = 'es';
  spanishHeading.textContent = verb.verb;
  heading.append(spanishHeading, ` — ${verb.meaning}`);
  article.append(heading);
  const list = document.createElement('dl');
  for (const person of conjugationPeople) {
    const sentence = conjugationSentence(verb, person);
    const pair = document.createElement('div');
    pair.className = 'conjugation-pair';
    const spanish = document.createElement('dt');
    spanish.lang = 'es';
    spanish.textContent = sentence.spanish;
    const english = document.createElement('dd');
    english.textContent = sentence.english;
    pair.append(spanish, english);
    list.append(pair);
  }
  article.append(list);
  conjugationContainer.append(article);
}

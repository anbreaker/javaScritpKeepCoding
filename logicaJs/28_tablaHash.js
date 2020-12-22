const text =
  'Hola que tal! bienvenido a este ejercicio. Si te esta gustando, sigue hasta terminarlo, a ver que tal se da';

function normalize(word) {
  return word.toLowerCase().replace(/[.|,|!]/g, '');
}

function wordRepeat(text) {
  let dict = {};
  let separateWords = text.split(' ');

  for (const word of separateWords) {
    if (normalize(word) in dict) {
      ++dict[normalize(word)];
    } else {
      dict[normalize(word)] = 1;
    }
  }

  console.log(dict);
}

wordRepeat(text);

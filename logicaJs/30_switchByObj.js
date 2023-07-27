const enemy = 'Hulk';

const LOKI_DISFRACES = {
  'IRON-MAN': 'Magneto',
  Thor: 'Odin',
  Hulk: 'Thanos',
  Lobezno: 'Magneto',
}

const LOKI_DISFRACES_FUNCTION = {
  'IRON-MAN': () => 'Magneto',
  Thor: () => 'Odin',
  Hulk: () => 'Thanos',
  Lobezno: () => 'Magneto',
}

const LOKI_DEFAULT_DISFRAZ = 'Loki';

const loki = LOKI_DISFRACES[enemy] ?  LOKI_DISFRACES[enemy] : LOKI_DEFAULT_DISFRAZ

const lokiFunction = LOKI_DISFRACES_FUNCTION[enemy]() ?  LOKI_DISFRACES_FUNCTION[enemy]() : LOKI_DEFAULT_DISFRAZ

console.log({objetoloki: loki}) // { objetoloki: 'Thanos' }

console.log({lokiFunction}) // { lokiFunction: 'Thanos' }
/*
 27) Programa una clase llamada Pelicula.
 La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de 
 la película en IMDB, titulo, director, año de estreno, país o países de origen, 
 géneros y calificación en IMBD.
   - Todos los datos del objeto son obligatorios.
   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
      7 restantes números.
   - Valida que el título no rebase los 100 caracteres.
   - Valida que el director no rebase los 50 caracteres.
   - Valida que el año de estreno sea un número entero de 4 dígitos.
   - Valida que el país o paises sea introducidos en forma de arreglo.
   - Valida que los géneros sean introducidos en forma de arreglo.
   - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*.
   - Crea un método estático que devuelva los géneros aceptados*.
   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
     decimal de una posición.
   - Crea un método que devuelva toda la ficha técnica de la película.
   - Apartir de un arreglo con la información de 3 películas genera 3 
     instancias de la clase de forma automatizada e imprime la ficha técnica 
     de cada película.
 
      *Géneros Aceptados: Action, Adult, Adventure, Animation, Biography,
      Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, 
      History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi,
      Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      'Action',
      'Adult',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'Film Noir',
      'Game-Show',
      'History',
      'Horror',
      'Musical',
      'Music',
      'Mystery',
      'News',
      'Reality-TV',
      'Romance',
      'Sci-Fi',
      'Short',
      'Sport',
      'Talk-Show',
      'Thriller',
      'War',
      'Western',
    ];
  }

  static generosAceptados() {
    return console.log(`Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}`);
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== 'string')
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
      );
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`
      );
    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== 'number')
      return console.error(`${propiedad} "${valor} ingresado, NO es un numero"`);

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena('IMDB id', id)) {
      if (!/^([a-z]{2}([0-9]){7}$)/.test(id)) {
        return console.error(
          `IMDB id "${id}" no es váñido, debe tener 9 carcateres, los 2 primeros letras minusculas, los 7 restantes numeros`
        );
      }
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero('Año de estreno', estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          `Año de estreno "${estreno}" no es válido, debe ser un numero de 4 digitos`
        );
      }
    }
  }

  validarArray(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" esta vacío`);
    if (!(valor instanceof Array))
      return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);
    if (valor.length === 0) return console.error('no tiene datos');
    for (let num of valor) {
      if (typeof num !== 'string') {
        return console.error(`El valor ${num} ingresado no es un cadena de texto`);
      }
    }

    return true;
  }

  validarTitulo(titulo) {
    if (this.validarCadena('Título', titulo)) {
      this.validarLongitudCadena('Título', titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena('Director', director)) {
      this.validarLongitudCadena('Director', director, 50);
    }
  }

  validarPais(pais) {
    this.validarArray('Pais', pais);
  }

  validarGeneros(generos) {
    if (this.validarArray('Generos', generos)) {
      for (const genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.log(`Géneros incorrectos "${generos.join(', ')} \n`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero('Calificación', calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error('La calificación tiene que estar entre 0 y 10')
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica: \nTítulo: ${this.titulo} \nDirector: ${this.director}\nAño: ${
        this.estreno
      } \nPais: ${this.pais.join(', ')}\nGéneros: ${this.generos.join(
        ', '
      )}\nCalificación: ${this.calificacion}\nIMDB id: ${this.id}`
    );
  }
}

// Pelicula.generosAceptados();

const pelicula = new Pelicula({
  id: 'tt1234567',
  titulo: 'Tenet',
  director: 'Nolan',
  estreno: 2020,
  pais: ['Usa'],
  generos: ['Action'],
  calificacion: 7.6,
});

pelicula.fichaTecnica();

const misPeliculas = [
  {
    id: 'tt1234567',
    titulo: 'Rocky Balboa',
    director: 'Sylvester Stallone',
    estreno: 1976,
    pais: ['Usa'],
    generos: ['Action'],
    calificacion: 7.6,
  },
  {
    id: 'tt1234567',
    titulo: 'Tenet',
    director: 'Nolan',
    estreno: 2020,
    pais: ['Usa'],
    generos: ['Action'],
    calificacion: 7.6,
  },
];

misPeliculas.forEach((el) => new Pelicula(el).fichaTecnica());

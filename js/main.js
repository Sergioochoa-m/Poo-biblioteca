//Hago una clase libro con sus propiedades

class Libro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;

    //Hago una propiedad privada
        this._prestado = "Disponible"
    }

    //Creo funciiones de estado, de prestar y devolver para consultar su estado
    getEstado() {
        return this._prestado
    }

    prestar() {
        return this._prestado = "Prestado"
    }

    devolver() {
        return this._prestado = "Disponible"
    }

}


class Libro2 {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;

        //PRIVADAS
        this._prestado = "Disponible"
    }
    getEstado() {
        return this._prestado
    }

    prestar() {
        return this._prestado = "Prestado"
    }

    devolver() {
        return this._prestado = "Disponible"
    }

}

//Creo la instancia para poder usarlo y hago pruebas con console.log

const donLibro = new Libro("Señor de los anillos", "Juan", "8");

console.log(donLibro.getEstado())
console.log(donLibro.prestar())
console.log(donLibro.getEstado())
console.log(donLibro.devolver())
console.log(donLibro.getEstado())

const donLibro2 = new Libro2("Teo va a la huelga", "Teo", "5")

console.log(donLibro2.getEstado())
console.log(donLibro2.prestar())
console.log(donLibro2.getEstado())
console.log(donLibro2.devolver())
console.log(donLibro2.getEstado())

//Creo la clase biblioteca para tener una coleccion de libros


class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = []; //Creo un array donde guardar las instancias de los libros
    }

//Creo una funcion para meter cada libro al array
    agregarLibro(libro) {
        this.libros.push(libro)

    }
//Creo una funcion para buscar cada libro por su isbn
    buscarIsbn(isbn) {
        return this.libros.find(libro => libro.isbn == isbn)
    }
//Creo una funcion para buscar al libro y llamar al metodo prestar()
    prestarLibro(isbn) {
        let libro = this.buscarIsbn(isbn)
        
            libro.prestar()
     }

    //Creo una funcion cpara buscar al libro y llamar al metodo devolver()
    devolverLibro(isbn) {
        let libro = this.buscarIsbn(isbn);
        libro.devolver()
       
    }
//Creo una funcion para recorrer el array y mostrar el estado de cada libro con sus caracteristicas
    mostrarLibros() {
        console.log(`Libro en ${this.nombre}`);
        this.libros.forEach(libro => {
            console.log(`Título: "${libro.titulo}", Autor: ${libro.autor}, ISBN: ${libro.isbn} Estado: ${libro.getEstado()}`)
        });
    }
}

//Creo la instancia de biblioteca
const biblio = new Biblioteca("Biblioteca Central");

//Añado el primer libro a la biblio
biblio.agregarLibro(donLibro);
//Lo busco
biblio.buscarIsbn("8");
//Lo presto
biblio.prestarLibro("8")
//Muestro su estado
biblio.mostrarLibros();
//Lo devuelvo
biblio.devolverLibro("8");
//Vuelvo a mostrar su estado
biblio.mostrarLibros();


//Lo mismo pero con el segundo libro
biblio.agregarLibro(donLibro2);
biblio.buscarIsbn("5");
biblio.prestarLibro("5")
biblio.mostrarLibros();
biblio.devolverLibro("5");
biblio.mostrarLibros();


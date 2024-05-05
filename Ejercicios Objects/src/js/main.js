//Ejercicios: OBJETOS

// 1. Crea un objeto llamado persona con propiedades como
// nombre, edad y ciudad.

let person = {
    user: "Joan",
    age: 19,
    city: "Medellin",
};

console.log(person);

// 2. Agrega una propiedad adicional al objeto persona que
// represente su ocupación.

person.occupation = "developer";
console.log(person);

// 3. Accede a una propiedad del objeto persona y muestra su valor
// en la consola.

console.log(person.user);

// 4. Crea otro objeto llamado libro con propiedades como título,
// autor y año de publicación.

let book = {
    title: "Dejar de ser tu",
    author: "Joe Dispensa",
    year: 2004,
};

// 5. Combina las propiedades de los objetos persona y libro en un
// nuevo objeto llamado informacion.

const addingObjects = { ...book, ...person };
console.log(addingObjects);

// 6. Cambia el valor de una propiedad en el objeto persona.

person.age=new Date("05/25/2025")
console.log(person)

// 7. Elimina una propiedad del objeto libro.

delete book.author
console.log(book)

// 8. Crea un objeto llamado coche con propiedades como modelo,
// marca y año.
let car={
    model:"nmax",
    brand:"yamaha",
    year:2024
}


// 9. Muestra todas las propiedades del objeto coche en la consola.
console.log(car);
// 10.Agrega un método al objeto coche que imprima un mensaje
// en la consola.

car.sayHi=function(){
    console.log("soy un carro")
}
car.sayHi()
// 11.Crea un objeto llamado circulo con propiedades como radio y
// color.

let circle={
    ratio:2,
    color:"blue"
}

// 12.Calcula el área del círculo utilizando la fórmula A = πr² y
// muestra el resultado.

circle.area=function () {
    console.log(Math.PI*Math.pow(this.ratio, 2))
}

// 13.Crea un objeto llamado rectangulo con propiedades como
// ancho y alto.
let rectangle={
    height:10,
    width:5
}
// 14.Calcula el perímetro del rectángulo utilizando la fórmula P = 2
// * (ancho + alto) y muestra el resultado.
rectangle.perimeter=function() {
    console.log(2*(this.width+this.height))
}
// 15.Combina las propiedades de los objetos circulo y rectangulo
// en un nuevo objeto llamado formas.
let shape={...rectangle, ...circle}
// 16.Crea un objeto llamado computadora con propiedades como
// marca, modelo y precio.
let computer={
    brand:"hp",
    modelo:"3020x",
    price:2000000
}
// 17.Muestra el precio de la computadora en la consola.
console.log(computer.price)
// 18.Agrega una propiedad al objeto computadora que indique si
// tiene o no una tarjeta gráfica.
computer.motherboard=true;
console.log(computer)
// 19.Crea un objeto llamado mascota con propiedades como
// nombre, especie y edad.
let pet={
    namePet:"peca",
    speciePet:"canino",
    agePet:14
}
// 20.Muestra en la consola la especie de la mascota en
// mayúsculas.
console.log(pet.speciePet.toUpperCase())
// 21.Crea un objeto llamado fruta con propiedades como nombre y
// color.
let fruit ={
    nameFruit:'pera',
    color:'verde'
}

// 22.Agrega un método al objeto fruta que imprima un mensaje
// indicando si la fruta está madura.
fruit.rotten=false
fruit.isItRotten=function(){
    console.log(this.rotten)
}
fruit.isItRotten()
// 23.Crea un objeto llamado estudiante con propiedades como
// nombre, edad y calificaciones.
let student = {
    nameStudent:'Franco',
    gradesStudent:[1,2,3,4],
    ageStudent:20
}

// 24.Muestra en la consola el promedio de las calificaciones del
// estudiante.
student.average=function() {
    let suma=0
    for (let i= 0; i < this.gradesStudent.length; i++) {
        suma += this.gradesStudent[i];
    }
    let ans = suma / this.gradesStudent.length
    console.log(ans)
}
student.average()

// 25.Agrega una propiedad al objeto estudiante que indique si ha
// aprobado o no.
student.approval=false

// 26.Crea un objeto llamado bolsa con propiedades como tamaño y
// color.
let bag = {
    size:12,
    color:'transparent'
}

// 27.Muestra en la consola un mensaje que indique la capacidad
// de la bolsa (tamaño).
console.log(bag.size)

// 28.Agrega un método al objeto bolsa que cambie su color.
bag.changeColor = function(){
    let wantedColor = prompt("Escribe tu color deseado: ")
    this.color=wantedColor
}

// 29.Crea un objeto llamado telefono con propiedades como
// marca, modelo y sistema operativo.
let phone={
    brand:'Huawei',
    model:'Y9',
    os: 'Android'
}

// 30.Muestra en la consola un mensaje indicando el sistema
// operativo del teléfono.
console.log(phone.os)

// 31.Agrega una propiedad al objeto telefono que represente la
// cantidad de memoria RAM.
phone.ram=39

// 32.Crea un objeto llamado animal con propiedades como tipo y
// sonido.
let animal ={
    specie:'hommo sapiens sapiens',
    sound:'voz'
}

// 33.Muestra en la consola un mensaje que indique el sonido del
// animal.
console.log(animal.sound)

// 34.Agrega un método al objeto animal que imprima un mensaje
// indicando su tipo y sonido.
animal.infoAnimal=function(){
    console.log('Especie:',this.specie)
    console.log('Sonido:',this.sound);
}
animal.infoAnimal()

// 35.Crea un objeto llamado vuelo con propiedades como
// aerolínea, número de vuelo y hora de salida.
let flight ={
    airline: 'Avianca',
    flightNumber:'30047',
    departureTime: new Date ('05/06/2024 12:50:00')
}

// 36.Muestra en la consola un mensaje que indique la aerolínea y
// el número de vuelo.
console.log('La aerolinea es:',flight.airline,'y el numero de vuelo es:',flight.flightNumber)

// 37.Agrega una propiedad al objeto vuelo que represente el
// destino del vuelo.
flight.arrivalPlace = 'Canada'
console.log(flight)

// 38.Crea un objeto llamado jugador con propiedades como
// nombre, equipo y posición.
let player = {
    namePlayer:'Lionel Messi',
    role:'delantero',
    team:'PSG'
}

// 39.Muestra en la consola un mensaje que indique el nombre y el
// equipo del jugador.
console.log('El nombre del jugador es:',player.namePlayer,'y su equipo es:',player.team)

// 40.Agrega un método al objeto jugador que imprima un mensaje
// indicando su posición en el equipo.
player.showMeRole=function(){
    console.log(this.role)
}
player.showMeRole()

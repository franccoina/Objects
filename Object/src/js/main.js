// Objetos

// A
// Sin usar objetos

console.groupCollapsed("Programando sin objetos")
let nameIs1= "Johannes"
let role1= "designer"
let birthDate1= new Date('05/11/2003 15:00:00')

console.log(nameIs1)

function saludar1() {
    console.log(`Hola, soy ${nameIs1} y tengo ${birthDate1} años`)
}
saludar1()

console.groupEnd()
console.log("")

// B
// Asi puedo sacar los datos del objeto: DESESTRUCTURACION

console.groupCollapsed("Programando con objetos, Desestructuracion")

console.group("Manual")
const user2 = {
    nameIs2: "Jack",
    role2: "administrator",
    birthDate2: new Date('04/01/2003 15:00:00')
}

//let nameIs2 = user2.nameIs2
//let role2 = user2.role2
//let birthDate2 = user2.birthDate2

//console.log(nameIs2)
//console.log(role2)
//console.log(birthDate2)

//function saludar2() {
//    console.log(`Hola, soy ${nameIs2} y naci el ${birthDate2}`)
//}
//saludar2()

console.groupEnd()
console.log("")

console.group("Desestructurada")
const user3 = {
    nameIs3: "Jack",
    role3: "administrator",
    birthDate3: new Date('04/01/2003 15:00:00')
}

let { nameIs3, role3, birthDate3 } = user3

console.log(nameIs3)
console.log(role3)
console.log(birthDate3)

console.log("")
console.log('Renombrar variables, en caso de ser necesario')
console.log("")

let { nameIs3:user, role3:userRole, birthDate3:userBirtDate } = user3

console.log(user)
console.log(userRole)
console.log(userBirtDate)

console.log("")
function saludar3() {
    console.log(`Hola, soy ${user} y naci el ${userBirtDate}`)
}
saludar3()

console.groupEnd()

console.groupEnd()
console.log("")

// C

console.groupCollapsed("Programando con objetos, Sin Desestructuracion")

const user4 = {
    nameIs4: "John",
    role4: "coder",
    birthDate4: new Date('02/10/2003 15:00:00'),
    saludar4: function() {
        console.log(`Hola, soy ${this.nameIs4} y tengo ${this.birthDate4} años`)
    },address4:{
        country4: 'Colombia',
        state4: 'Antioquia',
        city4: 'Medellin',
    },
    skills4: ['python','html','js']
}

console.log(user4.nameIs4)
console.log(user4['nameIs4'])

user4.saludar4()

console.log('')
console.log('Ahora, desestructuramos:')
console.log('')

let {
    nameIs4: coder,
    role4: coderRole,
    birthDate4: coderBirthDate,
    address4:{
        country4: coderNacionality
    },
    skills4: coderSkills
} = user4

console.log('Nombre:',coder)
console.log('Cargo:',coderRole)
console.log('Nacimiento:',coderBirthDate)
console.log('Nacionalidad:',coderNacionality)
console.log('Nombre:',coderSkills)

console.groupEnd()
console.log("")

// D

console.groupCollapsed("Extraccion o llamado de elementos de objeto")

console.log(nameIs3)
console.log(user4.address4)
console.log(user4['nameIs4'])
console.log(user4.address4.country4)
console.log(user4['address4']['city4'])
console.log(user4.skills4[0])

console.groupEnd()
console.log("")

// E

console.groupCollapsed('Añadir o eliminar info a objeto')

user3['idNumberType4'] = 'Cedula de Ciudadania'
user3.idNumber4 = '1000300000'

console.log(user4)

Object.defineProperty(user4, "clan",{
    value: 'Gates',
    variable: false,                                 // permite que la propiedad se pueda modificar
    enumerable: true,                           // permite que la propiedad se pueda ver
    configurable: true                      // permite que la propiedad se pueda eliminar
})

user3['idNumberType4'] = undefined;
delete user4.idNumber4

console.log(user4)

console.groupEnd()
console.log("")

// F

console.groupCollapsed('Unir objetos')

const obj1 = {
    a: "uno",
}
const obj2 = {
    b: "dos",
}
const obj3 = {
    a: "uno",
}
const obj4 = {
    b: "dos",
}

console.log("Antes")
console.log(obj1)
console.log(obj2)

let sumaObjetos1 = Object.assign(obj1,obj2)    //No me los suma, singo que asigna los valores del segundo al primero

console.log("Pero, despues...")
console.log(obj1)
console.log(obj2)
console.log(sumaObjetos1)

console.log("")

let sumaObjetos2 = {...obj3,...obj4}          //Asi debe hacerse para que el primer objeto no sea modificado tras la union

console.log(obj3)
console.log(obj4)
console.log(sumaObjetos2)

console.groupEnd()
console.log("")

//G

//Con el metodo entries se convierte un objeto a array con arrays

let obj1Array = Object.entries(obj1)
console.log(obj1Array)

//Tambien estan values, que da los valores y keys, que da las llaves, como arrays

let obj1Values = Object.values(obj1)
console.log(obj1Values)

let obj1Keys = Object.keys(obj1)
console.log(obj1Keys)

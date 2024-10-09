// Tipos simples
let vidasMario = 3;
let velocidadTurbo = 1.5;
let nombrePersonaje = 'Mario';
let poderOculto = '⭐';
let esInvencible = false;
let nivelActual; // Undefined by default

// Tipos compuestos
let itemsRecogidos = ["moneda", "estrella", "hongo", 3, '🚩'];
let enemigo = {
    tipo: "Bowser",
    vidas: 1000
};

// No usar var - preferir let y const
console.log(enemigo);
//------------------------------------------------------------------------------------

// Strings - propiedades y métodos
let passwordLuigi = "12345Luigui";
console.log(passwordLuigi.length);                // Longitud de la cadena
console.log(passwordLuigi.trim());                // Remueve espacios en blanco al inicio y fin
console.log(passwordLuigi.includes('6'));         // Verifica si contiene '6'
console.log(passwordLuigi.toLowerCase());         // Convierte a minúsculas
console.log(passwordLuigi.toUpperCase());         // Convierte a mayúsculas

// ES6 - nuevas características
// Template String
console.log(`El password de Luigi es: ${passwordLuigi}`);
//------------------------------------------------------------------------------------

let gamePricePS5 = "200.35";
let gamePriceXBOX = 100.55;

// Casting - ES6: convertir un tipo de dato a otro
console.log(+gamePricePS5 + gamePriceXBOX);      // Suma después de convertir el precio de PS5 a número

// Orden de ejecución de los operadores (+ / * - ** ())
//------------------------------------------------------------------------------------

// Condicionales
let monedasMario = 500;
let monedasYoshi = 1000;

// Operador ternario
monedasMario <= monedasYoshi ? console.log("Gana Yoshi") : console.log("Gana Mario");

// Condicional (C)                 cuando el C es V          cuando el C es F
let nombreJugador;
!nombreJugador ? console.log("Provide a nickname") : console.log("Welcome user");

// Valores falsos (Falsy) y verdaderos (Truthy)
// Comparación estricta = compara el valor y el tipo de dato
let vidasPrincesaPeach = 6;
vidasPrincesaPeach === 9 ? console.log("Princesa pasa de nivel") : console.log("Pierde nivel");
// Siempre se debe utilizar el === para obtener el resultado correcto
//----------------------------------------------------------------------------------

// LOOPS
const goals = ["Completar nivel", "Conseguir monedas", "Derrotar Bowser", "Pasar Reino"];
goals.forEach(goal => { console.log(goal); }); // Se recomienda utilizar el mismo nombre del arreglo pero en singular para el callback
// Callback: llama a una función dentro de otra función

// Código optimizado
["Completar nivel", "Conseguir monedas", "Derrotar Bowser", "Pasar Reino"].forEach(console.log);

let newGoals = goals.map(goal => goal.toUpperCase());
console.log(goals);
console.log(newGoals);

// forEach vs map
// En forEach utilizamos/trabajamos el arreglo original, afectamos el arreglo original
// map crea una copia y trabaja sobre esa copia, no afecta el arreglo original
//-------------------------------------------------------------------------------

// FUNCIONES

// Funciones declaradas
function getGokuAvatar() {
    console.log("photo/avatar/goku.png");
}
getGokuAvatar();

// Funciones expresadas
const prepararGokuBatalla = function () {
    console.log("Goku está listo para pelear");
};
prepararGokuBatalla();

// Funciones autoejecutadas
(function () {
    console.log("Trunks viene del futuro");
})(); // Función autoejecutada

// ARGUMENTOS
const validarEmailGoku = function (email, token) {
    console.log(`El token ${token} aumentó los poderes de Goku`);
};
validarEmailGoku("goku@gmail.com", "semilla123");

// Argumentos opcionales
const validarTokenVegeta = function (token = "semilla") {
    console.log(`El token ${token} aumentó los poderes de Vegeta`);
};
validarTokenVegeta();

// Retorno de una función
function RetornoCapitulo() {
    return function () {
        return "Regresa Bills";
    };
}
console.log(RetornoCapitulo()()); // Llamada a la función retornada

// FUNCIONES FLECHA
const prepararGokuBatallaFreezer = () => {
    console.log("Goku listo para pelear");
};

const registrarPoder = (nivel) => {
    console.log("Nivel aumentado");
};

const registrarPoderDos = (nivel) => console.log("Nivel aumentado");

//-------------------------------------------------------------------------------

// Objetos
const datosBananeritoGood = {
    name: "Bananerito",
    age: 1,
    address: {
        city: "Machala",
        telephone: 12345
    },
    friends: ['Cocodrigo', 'Torero'],
    status: true
};

console.log(datosBananeritoGood.name);
console.log(datosBananeritoGood.address);
console.log(datosBananeritoGood.address.city);
datosBananeritoGood.friends.forEach(friend => console.log(friend));

// DESESTRUCTURACIÓN
const { name, age } = datosBananeritoGood; // Aplicando desestructuración

// Métodos
const datosBugsBunny = {
    name: "Bugs Bunny",
    age: 5,
    address: {
        city: "Orlando",
        telephone: 12345
    },
    friends: ['Coyote', 'Pato Lucas', 'Michael Jordan'],
    status: false,
    girlfriend: "Lola Bunny" // Cómo crear un objeto
};

// Agregar propiedades
datosBugsBunny.photo = "bugsbunny.png"; 
// Eliminar propiedades
delete datosBugsBunny.girlfriend; 

console.log(datosBugsBunny);

// Verificación de claves en el objeto
Object.keys(datosBugsBunny).includes("") ? console.log("Error") : console.log("Ok");
Object.keys(datosBugsBunny).includes("") ? console.log("Falta clave") : console.log("Están todas las claves");

const datosNaruto = {
    name: "Naruto Uzumaki",
    age: 17,
    address: {
        village: "Japan",
        telephone: 123458
    },
    friends: ['Sasuke', 'Sakura', 'Kakashi'],
    status: false,
};

// Llamando la función para demostrar la funcionalidad
prepararGokuBatalla();

// Código duplicado comentado (se repite)
// Las funciones autoejecutadas
/*
(function () {
    console.log("Trunks viene del futuro");
})(); // Función autoejecutada

// ARGUMENTOS
const validarEmailGoku = function (email, token) {
    console.log(`El token ${token} aumentó los poderes de Goku`);
};
validarEmailGoku("goku@gmail.com", "semilla123");

// Argumentos opcionales
const validarTokenVegeta = function (token = "semilla") {
    console.log(`El token ${token} aumentó los poderes de Vegeta`);
};
validarTokenVegeta();

// Retorno de una función
function RetornoCapitulo() {
    return function () {
        return "Regresa Bills";
    };
}
console.log(RetornoCapitulo()()); // Llamada a la función retornada

// FUNCIONES FLECHA
const prepararGokuBatallaFreezer = () => {
    console.log("Goku listo para pelear");
};

const registrarPoder = (nivel) => {
    console.log("Nivel aumentado");
};

const registrarPoderDos = (nivel) => console.log("Nivel aumentado");
*/

//-------------------------------------------------------------------------------

// Objetos
/*
const datosBananeritoGood = {
    name: "Bananerito",
    age: 1,
    address: {
        city: "Machala",
        telephone: 12345
    },
    friends: ['Cocodrigo', 'Torero'],
    status: true
};

console.log(datosBananeritoGood.name);
console.log(datosBananeritoGood.address);
console.log(datosBananeritoGood.address.city);
datosBananeritoGood.friends.forEach(friend => console.log(friend));

// DESESTRUCTURACIÓN
const { name, age } = datosBananeritoGood; // Aplicando desestructuración

// Métodos
const datosBugsBunny = {
    name: "Bugs Bunny",
    age: 5,
    address: {
        city: "Orlando",
        telephone: 12345
    },
    friends: ['Coyote', 'Pato Lucas', 'Michael Jordan'],
    status: false,
    girlfriend: "Lola Bunny" // Cómo crear un objeto
};

// Agregar propiedades
datosBugsBunny.photo = "bugsbunny.png"; 
// Eliminar propiedades
delete datosBugsBunny.girlfriend; 

console.log(datosBugsBunny);

// Verificación de claves en el objeto
Object.keys(datosBugsBunny).includes("") ? console.log("Error") : console.log("Ok");
Object.keys(datosBugsBunny).includes("") ? console.log("Falta clave") : console.log("Están todas las claves");

const datosNaruto = {
    name: "Naruto Uzumaki",
    age: 17,
    address: {
        village: "Japan",
        telephone: 123458
    },
    friends: ['Sasuke', 'Sakura', 'Kakashi'],
    status: false,
};

// Llamando la función para demostrar la funcionalidad
prepararGokuBatalla();
*/


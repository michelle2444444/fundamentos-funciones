// Variables de contexto del juego basadas en juegos populares en la imagen

// Tipos simples
let vidasFireboy = 3; // Vidas de Fireboy
let velocidadFireboy = 2.0; // Velocidad de Fireboy
let nombrePersonaje = 'Fireboy'; // Nombre del personaje
let poderOculto = '🔥'; // Poder oculto
let esInvencible = false; // ¿El personaje es invencible?
let nivelActual = undefined; // Nivel actual

// Tipos compuestos
let itemsRecogidos = ["gema", "llave", "piedra de fuego", 5, '⚔️'];
let enemigo = {
    tipo: "Monstruo de Agua",
    vidas: 500
};

// Mostrar el objeto enemigo
console.log(enemigo);

// Propiedades de cadenas y métodos para simulación de contraseña en un juego
let passwordJuego = "ContraseñaSeguraDelJuego123";

console.log(passwordJuego.length); // Verificar longitud de la contraseña
console.log(passwordJuego.trim()); // Eliminar espacios en blanco si hay
console.log(passwordJuego.includes('Juego')); // Verificar si "Juego" es parte de la contraseña
console.log(passwordJuego.toLowerCase()); // Convertir a minúsculas
console.log(passwordJuego.toUpperCase()); // Convertir a mayúsculas

// ES6 - Nuevas Características

// Cadena de Plantilla con el personaje Fireboy
console.log(`La contraseña para Fireboy es: ${passwordJuego}`);
// Nota: Usa comillas invertidas `` para literales de plantilla en ES6

// ------------------------------------------------------------------------------------

// Precios de los ítems en el juego (ajustados al contexto de juego)
let precioUpgradeFireboy = "200.35";
let precioUpgradeWatergirl = 100.55;

// Conversión de tipos - ES6: Convertir tipos de datos (cadena a número)
console.log(+precioUpgradeFireboy + precioUpgradeWatergirl);

// Orden de ejecución de operadores (+ / * - ** ())
console.log((+precioUpgradeFireboy + precioUpgradeWatergirl) * 1.2); // por ejemplo, aplicando una tasa de impuestos

// ------------------------------------------------------------------------------------
// Condicionales

let monedasFireboy = 500;
let monedasWatergirl = 1000;

// ES6 - Operador ternario para determinar quién tiene más monedas
monedasFireboy <= monedasWatergirl 
  ? console.log("¡Chica del Agua gana!") 
  : console.log("¡Fireboy gana!");

// Verificar si el jugador ha proporcionado un apodo (característica del juego)
let nombreJugador;

!nombreJugador 
  ? console.log("Por favor, proporciona un apodo") 
  : console.log("¡Bienvenido, jugador!");

// Valores Falsos (Falsy) y Verdaderos (Truthy)
// Comparación estricta = compara el valor y el tipo de dato
let vidasFiregirl = 6; 
vidasFiregirl === 9 
  ? console.log("Firegirl pasa de nivel") 
  : console.log("Firegirl pierde nivel");
// Siempre se debe utilizar el === para que nos dé el resultado correcto

// ----------------------------------------------------------------------------------

// LOOPS: Metas del juego de la serie Fireboy y Watergirl
const metas = ["Completar-nivel", "Recoger-gemas", "Resolver-puzzles", "Evitar-trampas"];
metas.forEach(meta => {
  console.log(meta); 
}); 
// Callback: Llama a una función dentro de otra función
// Código optimizado en CHATGPT
["Completar-nivel", "Recoger-gemas", "Resolver-puzzles", "Evitar-trampas"].forEach(console.log);

// Usando map para transformar las descripciones de las metas
let nuevasMetas = metas.map(meta => meta.toUpperCase());
console.log(metas);    // El array original permanece sin cambios
console.log(nuevasMetas); // Nuevo array con las metas en mayúsculas

// Explicación forEach vs map:
// - forEach: Trabaja directamente sobre el array original, modificándolo si es necesario
// - map: Crea una copia y trabaja sobre esa copia, dejando el array original sin afectar

// FUNCIONES

// Funciones declaradas

function getFireboyAvatar() {
    console.log("photo/avatar/fireboy.png");
}
getFireboyAvatar();

// Funciones Expresadas
const prepararFireboyBatalla = function () {
    console.log("Fireboy está listo para resolver el siguiente nivel");
};
prepararFireboyBatalla();

// Funciones autoejecutadas (IIFE)

(function () {
    console.log("Watergirl se une para resolver el desafío");
})(); // Como está dentro de los paréntesis, es una función autoejecutada

// ----------------------------------------------------------------------------------
// ARGUMENTOS

const validarEmailFireboy = function (email, token) {
    console.log(`El token ${token} aumentó los poderes de Fireboy`);
};

validarEmailFireboy("fireboy@minijuegos.com", "gemas123");

// Argumentos opcionales
const validarTokenFireboy = function (token = "gemas") {
    console.log(`El token ${token} aumentó los poderes de Fireboy`);
};

validarTokenFireboy(); // Si no se pasa ningún token, se usa "gemas" por defecto

// ----------------------------------------------------------------------------------
// Retorno de una función

function retornoNivel() {
    // return true
    // return "Nuevo desafío desbloqueado"
    // return 89
    // return ['Puente', 'Fuego', 'Agua', 'Trampas']
    // return {
    //    nombre: "Nivel donde se encuentra la gema secreta",
    //    numero: 5
    // }

    return function () {
        return "Regresa Watergirl para el próximo reto";
    };
}

console.log(retornoNivel()()); // Auto-ejecutando la función devuelta

// ----------------------------------------------------------------------------------
// FUNCIÓN FLECHA

const prepararFireboyBatallados = () => {
    console.log("Fireboy listo para enfrentar el siguiente nivel");
};

prepararFireboyBatallados();

// ----------------------------------------------------------------------------------
// Registrar Poder - Función Flecha

function registrarPoder(nivel) {
    console.log("Nivel de poder aumentado");
}

const registrarPoderDos = (nivel) => console.log("Nivel de poder aumentado");

// Objetos

const datosFireboy = {
    name: "Fireboy",
    age: 5,
    address: {
        city: "Lava World",
        telephone: 12345
    },
    friends: ['Watergirl', 'Iceboy'],
    status: true
};

console.log(datosFireboy.name);              // "Fireboy"
console.log(datosFireboy.address);           // { city: "Lava World", telephone: 12345 }
console.log(datosFireboy.address.city);      // "Lava World"
datosFireboy.friends.forEach(friend => console.log(friend)); // "Watergirl", "Iceboy"

// DESESTRUCTURACION
// let name = datosFireboy.name
// let age = datosFireboy.age
// Aplicando desestructuración:

const { name, age } = datosFireboy;
console.log(name);  // "Fireboy"
console.log(age);   // 5

// Métodos

const datosWatergirl = {
    name: "Watergirl",
    age: 4,
    address: {
        city: "Water Temple",
        telephone: 98765
    },
    friends: ['Fireboy', 'Windgirl', 'Earthgirl'],
    status: true,
    favoriteItem: "Water Crystal"
}; // Cómo crear un objeto

datosWatergirl.avatar = "watergirl.png"; // Cómo agregar propiedades
delete datosWatergirl.favoriteItem;      // Cómo eliminar propiedades

console.log(datosWatergirl);

Object.keys(datosWatergirl).includes("avatar") ? "Ok" : "Error"; // Checking if 'avatar' exists
Object.keys(datosWatergirl).includes("avatar") 
    ? console.log("Avatar is present") 
    : console.log("Avatar is missing");

// Otro objeto para agregar más contexto de juegos

const datosIceboy = {
    name: "Iceboy",
    age: 6,
    address: {
        city: "Ice Cave",
        telephone: 1234
    },
    friends: ['Fireboy', 'Watergirl', 'Rockboy'],
    status: false
};

console.log(datosIceboy);




/* Ejercicio 1: Calcular el área de un rectángulo */

function calcularAreaRectangulo(base, altura) {
    console.log("Base: " + base + " Altura: " + altura)
    area = base * altura;
    return "El área del rectángulo es: " + area;
}

console.log("Solución Ejercicio 1: Calular el área de un rectángulo")
console.log(" ")

console.log(calcularAreaRectangulo(5, 3))
console.log(" ")
console.log(calcularAreaRectangulo(7, 8))
console.log(" ")
console.log(calcularAreaRectangulo(10, 2))
console.log(" ")

console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")

/*
    Para calcular el área de un rectángulo se necesitan dos datos: su base y su altura
    Es por esto que la función recibirá ambos datos para realizar el calculo:

        function calcularAreaRectangulo(base, altura)

    Para facilitar la lectura del ejercicio se agrega un detalle de los datos ingresados con console.log:

        console.log("Base: " + base + " Altura: " + altura)

    Luego se debe realizar la multiplicación de ambos valores dentro de la función para obtener el área:

        area = base * altura;

    Finalmente la función retorna el valor de area:

        return "El área del rectángulo es: " + area;

    Luego esta función puede utilizarse para imprimir los diferentes resultados por consola

        console.log(calcularAreaRectángulo (base, altura))
*/


/* Ejercicio 2: Contar palabras en una cadena */

function contarPalabras(cadena) {
    console.log("Cadena ingresada: " + cadena)
    cantPalabras = cadena.split(/\s/).length
    return "La cadena ingresada tiene " + cantPalabras + " palabras";
}

console.log("Solución Ejercicio 2: Contar palabras en una cadena")
console.log(" ")
console.log(contarPalabras("Hola que tal"))
console.log(" ")
console.log(contarPalabras("Esto es una prueba"))
console.log(" ")
console.log(contarPalabras("Humahuaca es un lugar copado"))
console.log(" ")
console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")

/*
    Para contar cuantas palabras hay en una cadena lo primero que necesitará la función es recibir la cadena:

        function contarPalabras(cadena)

    Para facilitar la lectura del ejercicio se agrega un detalle de los datos ingresados con console.log:

        console.log("Cadena ingresada: " + cadena)

    Luego se realiza el cálculo de cantidad de palabras, para esto se utilza el método split que separa la cadena en los espacios en blanco gracias a la expresión regular \s y crea un array con las palabras sueltas:
    
        cadena.split(/\s\)
    
    Por ejemplo:

        "Humahuaca es un lugar copado"

        Pasaría a ser:

        ["Huahuaca", "es", "un", "lugar", "copado"]

    Luego a este array se le aplica el metodo length para contar los elementos del array (las palabras) y se aloja este dato en la variable cantPalabras

        cantPalabras = cadena.split(/\s\).length

    En el ejemplo anterior cantPalabras = 5 porque:

        ["Huahuaca", "es", "un", "lugar", "copado"].lenght = 5

    Finalmente se retorna la cantidad de palabras dentro de un string para faciliar la lectura del ejercicio:

        return "La cadena ingresada tiene " + cantPalabras + " palabras";
*/


/* Ejercicio 3: Invertir una cadena */

function invertirCadena(cadena) {
    console.log("Cadena ingresada: " + cadena);
    cadenaInvertida = cadena.split('').reverse().join('');
    return cadenaInvertida;
}

console.log("Solución Ejercicio 3: Invertir una cadena")
console.log(" ")
console.log(invertirCadena("hola"))
console.log(" ")
console.log(invertirCadena("Esto es una prueba"))
console.log(" ")
console.log(invertirCadena("Humahuaca es un lugar copado"))
console.log(" ")
console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")

/* 
    Similar a lo realizado en el ejercicio anterior, en primer lugar la función necesitara la cadena a invertir:

        function invertirCadena(cadena)

    Para facilitar la lectura del ejercicio se agrega un detalle de los datos ingresados con console.log:

        console.log("Cadena ingresada: " + cadena)

    Luego se utiliza el método split para crear un array con los caracteres separados:

        cadena.split('')

    Por ejemplo:

        "hola" pasa a ser ['h', 'o', 'l', 'a']

    Luego se utiliza el método reverse para invertir el array:

        cadena.split('').reverse()

    Siguiendo el ejemplo:

        ['h', 'o', 'l', 'a'] pasa a ser ['a', 'l', 'a', 'h']

    Se utiliza entonces el método join para volver a unir los caracteres en una cadena y se guarda esta nueva cadena en la variable cadenaInvertida:

        cadenaInvertida = cadena.split('').reverse().join('');

    Siguiendo el ejemplo:

        ['a', 'l', 'a', 'h'] pasa a ser "aloh"

    Finalmente se retorna la cadena invertida:

        return cadenaInvertida

*/


/* Ejercicio 4: Encontrar un palíndromo */ 

function esPalindromo(cadena) {
    cadenaInvertida = invertirCadena(cadena);
    return "Es palíndromo? " + (cadenaInvertida === cadena);
}


console.log("Solución Ejercicio 4: Encontrar un palíndromo")
console.log(" ")
console.log(esPalindromo("humahuaca es un lugar copado"))
console.log(" ")
console.log(esPalindromo("neuquen"))
console.log(" ")
console.log(esPalindromo("reconocer"))
console.log(" ")
console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log(" ")


/*
    En primer lugar, como en los anteriores ejercicios la función necesita recibir la cadena:

        function esPalindromo(cadena)

    Luego se utiliza la función creada en el ejercicio anterior para invertir la cadena ingresada:

        cadenaInvertida = invertirCadena(cadena);

    Finalmente se retorna true si la cadena invertida es igual a la cadena original, de lo contrario retornará false:

        return "Es palíndromo? " + (cadenaInvertida === cadena);

*/


/* Ejercicio 5: Convertir la edad de un perro a años humanos */ 

function edadCanina() {
    edad = parseInt(prompt("Ingrese la edad del perro"))

    if (isNaN(edad) || edad < 0) {
        console.log("La edad ingresada no es válida")
        return;
    }
    edadHumana = edad * 7;
    console.log(`Tu perro tiene ${edadHumana} años humanos`)
}


console.log("Solución Ejercicio 5: Convertir la edad de un perro a años humanos")
console.log(" ")
edadCanina()
edadCanina()
edadCanina()

/* 
    En primer lugar se decalara la función, en este caso no recibirá ningún dato por parámetro:

        function edadCanina()

    Luego se genera un prompt para pedirle al usuario que ingrese la edad del perro

        prompt("Ingrese la edad del perro")

    El valor ingresado se intenta convertir a número entero con parseInt y se guarda en la variable edad:

        edad = parseInt(prompt("Ingrese la edad del perro"))

    Con if se realiza una validación del dato ingresado, si no es un número o es un número negativo se informa al usuario que el dato no es válido y se sale de la función con un return

        if (isNaN(edad) || edad < 0) {
            console.log("La edad ingresada no es válida")
            return;
        }

    Si, por el contrario, el dato es válido se continúa realizando el cálculo de la edad del perro en años humanos multiplicando el valor ingresado por 7:

        edadHumana = edad * 7;

    Finalmente se muestra por consola la edad del perro en años humanos:

        console.log(`Tu perro tiene ${edadHumana} años humanos`)
*/
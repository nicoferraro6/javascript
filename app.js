//Ejercicio de entrega

let nota1, nota2, promedio;

nota1 = Number(prompt("Ingrese primer nota del parcial"))
nota2 = Number(prompt("Ingrese segunda nota del parcial"))
promedio = (nota1 + nota2)/2;

if (promedio >= 7){
    alert("El promedio es " + promedio + ", estás APROBADO")
}else{
    alert("El promedio es " + promedio + ", estás DESAPROBADO, esforzate más")
}




//Funciones: Que son? y para que sirven?

// el algoritmo calculadora: -> suma, resta, multiplicacion y division

// Las funciones son subprogramas (una porcion de codigo) que realiza una determinada tarea
// puede ser llamada (funcion) desde diferentes lugares de programa las veces que sea necesario

// las funciones nos ayudan a organizar nuestro código

// identificar las diferentes tareas (funciones) y las separamos en estos subprogramas
// las creamos 

// sintaxis

// function funcionEjemplo(params) {
//     // codigo de la funcion
//     // instrucciones a ejecutarse
// }

// // luego cuando la necesitemos la llamamos de esta forma

// funcionEjemplo()


// function funcionSaludar() {
//     alert("Hola soy una funcion")
// }

// funcionSaludar()


// let n1 = Number(prompt)
// let n2 = Number(prompt)

// let resultado = n1 + n2;
// console.log()

// function suma(num1, num2) {
//     // console.log(num1 + num2)
//     return num1 + num2 
// }

// // let n1 = Number(prompt("Ingresa el primer numero a sumar"))
// // let n2 = Number(prompt("Ingresa el segundo numero a sumar"))

// suma(50, 50)


// function saludar(dato) {
//     let saludo = "Hola"
//     return dato + saludo
// }
// let nombre = prompt("Ingrese su nombre")

// console.log(saludar(nombre))

// function suma(a, b) {
//     return a + b
// }

// let resultado = suma(5, 10)
// console.log(resultado)


// programar una calculadora

// const calculadora = (num1, num2, operador) =>{
//     switch (operador) {
//         case "+":
//             return alert(num1 + num2);
        
//         case "-":
//         return alert(num1 - num2);
        
//         case "*":
//             return alert(num1 * num2);
            
//         case "/":
//                 return alert(num1 / num2);
            
//         default:
//                 alert("El operador ingresado no es valido, vuelva a intentar")
//             break;
//     }
// }
// function calculadora(num1, num2, operador) {
//     switch (operador) {
//         case "+":
//             return alert(num1 + num2);
            
//         case "-":
//             return alert(num1 - num2);
            
//         case "*":
//             return alert(num1 * num2);
            
//         case "/":
//             return alert(num1 / num2);
            
//         default:
//             alert("El operador ingresado no es valido, vuelva a intentar")
//             break;
//     }
// }

// let valor1 = Number(prompt("Ingresa el primer valor de tu operacion"))
// let valor2 = Number(prompt("Ingresa el segundo valor de tu operacion"))
// let operacion = prompt("Ingresa el operador matematico a utilizar: \n1: + \n2: - \n3: * \n4: /")

// (calculadora(valor1, valor2, operacion))



// funciones anónimas y funcion flecha
// generalmente las funciones anónimas se escriben en una sola línea

// const suma = function(n1, n2){return n1 + n2}

// console.log(suma(30, 20))

// funcion flecha (arrow function) token =>

//ES6

// const suma = function (n1, n2) {return n1 + n2}
// const suma = (n1 + n2) => n1 + n2
// console.log(suma(70, 50))
// solo se aplica cuando hay un parámetro
// const saludo = saludo => saludo
// sañudo("Hola Nico")


// callback -> llamar atras 

// const pregunta = (pregunta, si, no) => {
//     if (confirm(pregunta)) {
//         si()
//     } else{
//         no()
//     }
// }

// // function resSi(){
// //     alert("Mi respuesta es SI")
// // }


// // function resNo(){
// //     alert("Mi respuesta es NO")
// // }

// pregunta("Queres venir al cine?",
// function(){alert("Mi respuesta es Si")}, //argumento
// function(){alert("Mi respuesta es Si")} //argumento

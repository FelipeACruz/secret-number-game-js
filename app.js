
let drawnNumbers = [];


function assingTextElemnt(element, text) {

    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;

}

function verifyAttempt() {

    let userNumber = parseInt(document.getElementById("userValue").value);
    if (attempts == 4) {
        assingTextElemnt("p", "Llegaste al numero maximo de intentos")
        document.getElementById("reiniciar").removeAttribute("disabled");
        
    } else {

        if (userNumber === secretNumber) {
            assingTextElemnt("p", `Acertaste al numero en ${attempts} ${attempts === 1 ? "intento": "intentos"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
            if (userNumber > secretNumber) {
                assingTextElemnt("p", "Fallaste, el número secreto es menor");
            } else {
                assingTextElemnt("p", "Fallaste, el número secreto es mayor");
            }
    
            attempts++;
            cleanInput()
        }

    }
   
}

function generateRandomSecretNumber(maxNumber) {
    var drawnNumber = parseInt((Math.random() * maxNumber) + 1);
    console.log(drawnNumber)
    console.log(drawnNumbers)

    if (drawnNumbers.length === maxNumber) {
        assingTextElemnt("p", "Ya se sortearon todos los numeros posibles");
        
    } else {

        if (!drawnNumbers.includes(drawnNumber)) {
      
            drawnNumbers.push(drawnNumber);
            return drawnNumber;
    
        } else {
            return generateRandomSecretNumber(maxNumber)
        }

    }

}

function cleanInput() {
    document.querySelector("#userValue").value = "";
}

function initialConditions() {
    var maxNumber = 10
    assingTextElemnt("h1", "Juego del número secreto!");
    assingTextElemnt("p", `Indica un número del 1 al ${maxNumber}`);
    secretNumber =  generateRandomSecretNumber(maxNumber);
    attempts = 1;
    

}

function restartGame() {
    // Limpiar valores 
    cleanInput();
    // Indicar mensaje de intervalo de números
    // Generar número aleatorio
    initialConditions();
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}


initialConditions()
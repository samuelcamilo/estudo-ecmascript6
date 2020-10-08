
function squareArea(value) {
    return value * value;
}

function calculateIMC(weight, height) {
    return (weight / (height * height));
}

function selectColor(color) {
    switch(color) {
        case "Red":
            console.log("This color is ", color);
            break;
        case "Blue":
            console.log("This color is ", color);
            break;
        default:
            console.log("This color is ", color);
            break;
    }
}

var power = (base, expo) => {
    
    let result = 1;
    for(let cont = 0; cont < expo; cont++)
        result *= base;
    
    return result;
};

addEventListener('click', () => {
    console.log("Clique...");
});

function scopeJs() {
    
    var name = "Samuel";
    var age = 24;

    function anotherScope() {
        var number = "85 123456789";
        var CPF = "123456789";

        return `${name}, ${age}, ${number}, ${CPF}`;
    }

    return anotherScope();
}

console.log("Area do Quadrado: ", squareArea(5));
console.log("Calculo do IMC: ", calculateIMC(85, 1.76));
console.log(selectColor()); // undefined
console.log("Potência: ", power(5, 5));
console.log("Scope: ", scopeJs());
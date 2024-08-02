// JavaScript source code

function sumNumbers() {
    // Obtener el valor del input
    const input = document.getElementById('numbersInput').value;
    
    // Dividir el texto en un array usando el espacio como delimitador
    const numbers = input.split(' ').map(Number);
    
    // Comprobar si todos los valores son n�meros
    if (numbers.some(isNaN)) {
        document.getElementById('result').textContent = 'Por favor, ingresa solo n�meros separados por espacios.';
        return;
    }

    // Calcular la suma de todos los n�meros
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Mostrar el resultado
    document.getElementById('result').textContent = `La suma de los n�meros ingresados es: ${sum}`;
}

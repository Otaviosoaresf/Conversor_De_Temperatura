"use strict";
const form = document.getElementById('tempForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
    document.getElementById('fahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById('kelvin').innerText = `Kelvin: ${kelvin.toFixed(2)}`;
});

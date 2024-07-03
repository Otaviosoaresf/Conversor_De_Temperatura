const form: void = document.getElementById('tempForm')!.addEventListener('submit', function(event) {
    event.preventDefault();
    const celsius: number = parseFloat((document.getElementById('celsius') as HTMLInputElement).value);


    const fahrenheit: number = (celsius * 9/5) + 32;
    const kelvin: number = celsius + 273.15;


    (document.getElementById('fahrenheit') as HTMLElement).innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    (document.getElementById('kelvin') as HTMLElement).innerText = `Kelvin: ${kelvin.toFixed(2)}`;
});
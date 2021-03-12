//mes 
for (let i = 1; i <= 12; i++){
    let opcion= document.createElement('Option');
    opcion.value = i;
    opcion.innerText =i;
    selectmes.appendChild(opcion);
}
//año
const yearactual = new Date().getFullYear();
for (let i= yearactual; i <= yearactual + 8; i++){
    let opcion =document.createElement('option');
    opcion.value = i;
    opcion.innerText =i;
    selectAño.appendChild(opcion);
}

//num tarjet

inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
    .trim();
} );
//Nombre tarjeta
inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    //Eliminamos los numeros
	inputNombre.value = valorInput.replace(/[0-9]/g, '');
	inputNombre.textContent = valorInput;
});

//CVV
inputCCV.addEventListener('keyup', () => {
inputCCV.value = inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');
});

//telefono
Telefono.addEventListener('keyup', () => {
    Telefono.value = Telefono.value
    // Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');
});
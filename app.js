
document.getElementById('calculateButton').addEventListener('click', calculateDoubleAge);

function calculateDoubleAge() {
    // Obtener las edades del padre y del hijo desde el DOM
    const fatherAge = parseInt(document.getElementById('fatherAge').value);
    const childAge = parseInt(document.getElementById('childAge').value);

    // Validar que las entradas sean números válidos
    if (isNaN(fatherAge) || isNaN(childAge) || fatherAge <= childAge) {
        document.getElementById('result').innerText = "Por favor, ingrese edades válidas (la edad del padre debe ser mayor que la del hijo).";
        return;
    }

    // Calcular en cuántos años el padre tendrá el doble de la edad del hijo
    const yearsUntilDouble = fatherAge - 2 * childAge;

    let result = "";

    if (yearsUntilDouble > 0) {
        result = `En ${yearsUntilDouble} años, el padre tendrá el doble de la edad del hijo.`;
    } else if (yearsUntilDouble < 0) {
        result = `Hace ${Math.abs(yearsUntilDouble)} años, el padre tenía el doble de la edad del hijo.`;
    } else {
        result = "El padre actualmente tiene el doble de la edad del hijo.";
    }

    // Mostrar el resultado en el DOM
    document.getElementById('result').innerText = result;
}
let carrito = [];
document.querySelectorAll('button').forEach((btn, index) => {
 btn.addEventListener('click', () => {
 const producto = {
 nombre: btn.parentElement.querySelector('h3').textContent,
 precio: parseInt(btn.parentElement.querySelector('strong').textContent.slice(1))
 };

 carrito.push(producto);
 alert(`¡Agregado al carrito! ${producto.nombre}`);
 console.log('Carrito:', carrito);
 });
});
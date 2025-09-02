// Carrito básico con almacenamiento en localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
  const producto = { nombre, precio };
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${nombre} agregado al carrito`);
}

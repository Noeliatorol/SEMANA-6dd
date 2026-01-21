// Array de productos inicial
let productos = [
    {
        nombre: "Laptop",
        precio: 899.99,
        descripcion: "Laptop de alta performance con procesador Intel i7"
    },
    {
        nombre: "Mouse Inalámbrico",
        precio: 29.99,
        descripcion: "Mouse ergonómico con batería de larga duración"
    },
    {
        nombre: "Teclado Mecánico",
        precio: 149.99,
        descripcion: "Teclado mecánico RGB para gaming"
    },
    {
        nombre: "Monitor 4K",
        precio: 399.99,
        descripcion: "Monitor de 27 pulgadas con resolución 4K"
    },
    {
        nombre: "Webcam HD",
        precio: 79.99,
        descripcion: "Webcam 1080p con micrófono integrado"
    }
];

// Función para renderizar la lista de productos
function renderizarProductos() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = ""; // Limpiar la lista

    // Recorrer el arreglo de productos
    productos.forEach((producto, index) => {
        // Crear elemento de lista
        const li = document.createElement("li");

        // Crear el contenido del producto usando template
        const contenidoProducto = `
            <div class="producto-nombre">${producto.nombre}</div>
            <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
            <div class="producto-descripcion">${producto.descripcion}</div>
        `;

        li.innerHTML = contenidoProducto;
        listaProductos.appendChild(li);
    });
}

// Función para agregar un nuevo producto
function agregarProducto() {
    const nombre = document.getElementById("nombreProducto").value.trim();
    const precio = parseFloat(document.getElementById("precioProducto").value);
    const descripcion = document.getElementById("descripcionProducto").value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !descripcion || isNaN(precio) || precio < 0) {
        alert("Por favor, complete todos los campos correctamente. El precio debe ser mayor o igual a 0.");
        return;
    }

    // Crear nuevo objeto de producto
    const nuevoProducto = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    };

    // Agregar el producto al arreglo
    productos.push(nuevoProducto);

    // Limpiar los inputs
    document.getElementById("nombreProducto").value = "";
    document.getElementById("precioProducto").value = "";
    document.getElementById("descripcionProducto").value = "";

    // Renderizar la lista actualizada
    renderizarProductos();
    
    // Mensaje de confirmación
    alert("Producto agregado exitosamente!");
}

// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    renderizarProductos();
});

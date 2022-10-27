const inventario = new Inventario();
const historial = document.getElementById('divHistorial');

// Agregar producto

const btnAgregar = document.getElementById('btn-agregar');
const btnBuscar = document.getElementById('btn-buscar');
const btnListar = document.getElementById('btn-listar');
const formBuscar = document.getElementById('form-buscar')
const formAgregar = document.getElementById('form-agregar');
const formEliminar = document.getElementById('form-eliminar');
const containerTabla = document.getElementById('divTabla');

// const Validar = (codigo, nombre, cantidad, precio) => {
//     if (codigo === '' || nombre === '' || cantidad === '' || precio === '') {
//         alert('Todos los campos son obligatorios');
//         return;
//     }
// }

btnAgregar.addEventListener('click', () => {
    let codigo = document.getElementById('codigo-p').value;
    let nombre = document.getElementById('nombre-p').value;
    let precio = document.getElementById('precio-p').value;
    let cantidad = document.getElementById('cantidad-p').value;

    //validar
    // Validar(codigo, nombre, cantidad, precio);

    inventario.agregar(new Producto(codigo, nombre, cantidad, precio));
    historial.innerHTML += `<p>Se agrego el producto ${nombre}</p>`;
    
    formAgregar.reset();
});

// Buscar Producto
formBuscar.addEventListener('submit', (e) => {
    e.preventDefault()

    let codigo = document.getElementById('codigo-b').value;
    let product = inventario.buscar(codigo);

    if (!product) return alert('Producto no encontrado');

    const bodyTableProducts = document.getElementById('tabla-productos');
    bodyTableProducts.innerHTML = ProductRow(product);
    historial.innerHTML += `<p>Se ha buscado un producto</p>`;
    formBuscar.reset();
});

// Eliminar Producto
formEliminar.addEventListener('submit', (e) => {
    e.preventDefault();

    let codigo = document.getElementById('codigo-e').value;

    if (codigo === '' || inventario.buscar(codigo) === null) 
        return alert('Todos los campos son obligatorios');
    
    inventario.eliminar(codigo);
    historial.innerHTML += `<p>Se ha eliminado un producto</p>`;
    formEliminar.reset();
})

// Listar Productos
btnListar.addEventListener('click', (e) => {
    e.preventDefault();

    let lista = inventario.listar();
    if (!lista) return alert('No hay productos en el inventario');
        
    containerTabla.innerHTML = createTable();
    const bodyTableProducts = document.getElementById('tabla-productos');
    bodyTableProducts.innerHTML = inventario.listar();
    historial.innerHTML += `<p>Se han listado los productos</p>`;
});

// Listar Productos invertidos
const btnListarInv = document.getElementById('btn-listar-inv');
btnListarInv.addEventListener('click', () => {
    let listaInv = inventario.listarInverso();
    if (!listaInv) return alert('No hay productos en el inventario');

    containerTabla.innerHTML = createTable()
    const bodyTableProducts = document.getElementById('tabla-productos');
    bodyTableProducts.innerHTML = inventario.listarInverso();
    historial.innerHTML += `<p>Se han listado los productos de forma inversa</p>`;
});
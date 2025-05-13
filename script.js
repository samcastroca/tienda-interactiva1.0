const productos = [
    { nombre: "Camiseta", categoria: 1, precio: 20 },
    { nombre: "Pantalón", categoria: 1, precio: 35 },
    { nombre: "Zapatos", categoria: 2, precio: 50 },
    { nombre: "Móvil", categoria: 3, precio: 300 },
    { nombre: "Auriculares", categoria: 3, precio: 75 },
    { nombre: "Silla", categoria: 4, precio: 120 },
    { nombre: "Escritorio", categoria: 4, precio: 150 },
    { nombre: "Sudadera", categoria: 1, precio: 40 },
    { nombre: "Chaqueta", categoria: 1, precio: 60 },
    { nombre: "Botas", categoria: 2, precio: 80 },
    { nombre: "Sandalias", categoria: 2, precio: 30 },
    { nombre: "Tablet", categoria: 3, precio: 250 },
    { nombre: "Smartwatch", categoria: 3, precio: 200 },
    { nombre: "Monitor", categoria: 3, precio: 180 },
    { nombre: "Teclado", categoria: 3, precio: 45 },
    { nombre: "Ratón", categoria: 3, precio: 25 },
    { nombre: "Lámpara", categoria: 4, precio: 35 },
    { nombre: "Estantería", categoria: 4, precio: 100 },
    { nombre: "Alfombra", categoria: 4, precio: 60 },
    { nombre: "Cojín", categoria: 4, precio: 15 },
    { nombre: "Abrigo", categoria: 1, precio: 85 },
    { nombre: "Gorra", categoria: 1, precio: 18 },
    { nombre: "Calcetines", categoria: 1, precio: 8 },
    { nombre: "Cinturón", categoria: 1, precio: 22 },
    { nombre: "Bolso", categoria: 2, precio: 90 },
    { nombre: "Mochila", categoria: 2, precio: 55 },
    { nombre: "Impresora", categoria: 3, precio: 130 }
  ];
  
var costo = 0
var cantidad = 0

function init() {
    
    var carrito = document.getElementById("carrito")
    var productoSec = document.getElementById("productos")
    carrito.innerHTML = `$${costo} (${cantidad} elemenos añadidos)`
    for (const producto of productos){
        productoSec.innerHTML+= `<div class="card m-3 col-3 productoH" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${producto["nombre"]}</h5>
    <h6>Categoría: ${producto["categoria"]}</h6>
    <h6>Precio: ${producto["precio"]}</h6>
    <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${producto['precio']})">Añadir al carrito</a>
  </div>
</div>`
    }

}

function filtrarCategoria(element) {
    var productoSec = document.getElementById("productos")
    const categ = element.value
    if(categ!=0){

        productoSec.innerHTML = ``
        for (const producto of productos){
            if (producto["categoria"] == categ) {
                productoSec.innerHTML+= `<div class="card m-3 col-3 productoH" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${producto["nombre"]}</h5>
                <h6>Categoría: ${producto["categoria"]}</h6>
                <h6>Precio: ${producto["precio"]}</h6>
                <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${producto['precio']})">Añadir al carrito</a>
              </div>
            </div>`
                
            }
    
        }

        
    }

    else {
        init()
    }
    
}

function agregarAlCarrito(precio) {
    costo += precio
    cantidad += 1

    var carrito = document.getElementById("carrito")
    carrito.innerHTML = `$${costo} (${cantidad} elemenos añadidos)`


    
}
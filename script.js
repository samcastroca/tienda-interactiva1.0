const productos = [
    { nombre: "Camiseta", categoria: 1, precio: 20 },
    { nombre: "Pantalón", categoria: 1, precio: 35 },
    { nombre: "Zapatos", categoria: 2, precio: 50 },
    { nombre: "Móvil", categoria: 3, precio: 300 },
    { nombre: "Auriculares", categoria: 3, precio: 75 },
    { nombre: "Silla", categoria: 4, precio: 120 },
    { nombre: "Escritorio", categoria: 4, precio: 150 }
  ];

function init() {
    

    var productoSec = document.getElementById("productos")
    for (const producto of productos){
        productoSec.innerHTML+= `<div class="card m-3 col-3 productoH" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${producto["nombre"]}</h5>
    <h6>Categoría: ${producto["categoria"]}</h6>
    <h6>Precio: ${producto["precio"]}</h6>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>
</div>`
    }

}
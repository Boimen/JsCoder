let carritomonto = 0;
let cantidadMother1 = 0;
let cantidadMother2 = 0;
let cantidadMother3 = 0;
let Carrito = JSON.parse(localStorage.getItem('Carrito'));


 

 


class Motherboard{
    constructor(marca,modelo,precio,otros,stock){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.otros = otros;
        this.stock = stock ;
        this.cantidad = 0;

        this.detalle = function(){
            alert("Motherboard marca: " +marca+ "-" +modelo+ "\nPrecio: $" +precio+ "\nDetalles adicionales: " +otros);
        }
    }
    reducir(reduccion){
        this.stock -= reduccion;
    }
}


const motherboard1 = new Motherboard ("Asus","gr122",5000,"Mother baja gamma",100);
const motherboard2 = new Motherboard ("Asus","gr150",10000,"Mother media gamma",50);
const motherboard3 = new Motherboard ("Asus","gr800",23000,"Mother alta gamma",70);

const Productos = [];


Productos.push(motherboard1);
Productos.push(motherboard2);
Productos.push(motherboard3);



localStorage.setItem('Productos',JSON.stringify(Productos));

let botonm1 = document.getElementById("botonmother1");
    botonmother1.addEventListener("click",agregarMother1)

let botonm2 = document.getElementById("botonmother2");
    botonm2.addEventListener("click",agregarMother2)

let botonm3 = document.getElementById("botonmother3");
    botonmother3.addEventListener("click",agregarMother3)

///Funciones para agregar al carrito///    

function agregarMother1(){

    cantidadMother1 = parseInt(prompt("Cuantos Mother1 quieren agregar?"));
    if(cantidadMother1>motherboard1.stock){
        alert("Error el stock de este producto es: " +motherboard1.stock);
    }else{
    agregar = Carrito.push(motherboard1);  
    carritocompra(motherboard1.precio*cantidadMother1);
    motherboard1.reducir(cantidadMother1);
    alert("Producto agregado al carrito");
    }
    console.log(Carrito);
    console.log(carritomonto);
    localStorage.setItem('Carrito',JSON.stringify(Carrito));

    }

function agregarMother2(){

    cantidadMother2 = parseInt(prompt("Cuantos Mother2 quieren agregar?"));
    if(cantidadMother2>motherboard2.stock){
        alert("Error el stock de este producto es: " +motherboard2.stock);
    }else{
    agregar = Carrito.push(motherboard2);  
    carritocompra(motherboard2.precio*cantidadMother2);
    motherboard2.reducir(cantidadMother2);
    alert("Producto agregado al carrito");
    }
    console.log(Carrito);
    console.log(carritomonto);
    localStorage.setItem('Carrito',JSON.stringify(Carrito));
    localStorage.setItem((localStorage.getItem('Carrito').modelo == "gr150").cantidad,cantidadMother2);
        }   

function agregarMother3(){

    cantidadMother3 = parseInt(prompt("Cuantos Mother3 quieren agregar?"));
    if(cantidadMother3>motherboard3.stock){
        alert("Error el stock de este producto es: " +motherboard3.stock);
    }else{
    agregar = Carrito.push(motherboard3);  
    carritocompra(motherboard3.precio*cantidadMother3);
    motherboard3.reducir(cantidadMother3);
    alert("Producto agregado al carrito");
    }
    console.log(Carrito);
    console.log(carritomonto);
    localStorage.setItem('Carrito',JSON.stringify(Carrito));
    localStorage.setItem('Cantidad',cantidadMother3);
    localStorage.setItem((localStorage.getItem('Carrito').modelo == "gr800").cantidad,cantidadMother3);


}      

function carritocompra(monto){
        carritomonto+=monto;
        localStorage.setItem('totalcarrito',carritomonto);
        }

///Detalle producto///        

$("#detalle1").click(function(){
    $("#detallemother1").toggle(200,function(){
        if($("#detalle1").html() == "Mas detalles"){
            $("#detalle1").html("Ocultar detalles");
        }else{
            $("#detalle1").html("Mas detalles");
        }
    })
})

$("#detalle2").click(function(){
    $("#detallemother2").toggle(200,function(){
        if($("#detalle2").html() == "Mas detalles"){
            $("#detalle2").html("Ocultar detalles");
        }else{
            $("#detalle2").html("Mas detalles");
        }
    })
})
$("#detalle3").click(function(){
    $("#detallemother3").toggle(200,function(){
        if($("#detalle3").html() == "Mas detalles"){
            $("#detalle3").html("Ocultar detalles");
        }else{
            $("#detalle3").html("Mas detalles");
        }
    })
})
$("#detallemother3").animate({
    height: '100%',
    padding: '20px',
}
);
$("#detallemother2").animate({
    height: '100%',
    padding: '20px',
}
);
$("#detallemother1").animate({
    height: '100%',
    padding: '20px',
}
);



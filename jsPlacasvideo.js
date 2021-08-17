
let cantidad_placavideo1 = 0;
let cantidad_placavideo2 = 0;
let cantidad_placavideo3 = 0;
let Carrito = (JSON.parse(localStorage.getItem('Carrito')));
let carritomonto = (JSON.parse(localStorage.getItem('totalcarrito')));

class Placavideo{
    constructor(marca,modelo,capacidad,precio,otros){
        this.marca = marca;
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.precio = precio;
        this.otros = otros;
        this.stock = 100;
        this.detalle = function(){
            alert("Placa de video marca: " +marca+ "-" +modelo+ "\nCapacidad:" +capacidad+ "\nPrecio: $" +precio+ "\nDetalles adicionales: " +otros);
        }
    }
    reducir(reduccion){
        this.stock -= reduccion;
    }
}


const placavideo1 = new Placavideo ("Radeon","gr122","5gb",7800,"Placa de video baja gamma");
const placavideo2 = new Placavideo ("Radeon","gx2000","8gb",25000,"Placa de video media gamma");
const placavideo3 = new Placavideo ("Nvidia","gtx2000","16gb",78000,"Placa de video alta gamma");


const Productos = [];



Productos.push(placavideo1);
Productos.push(placavideo2);
Productos.push(placavideo3);


localStorage.setItem('Productos',JSON.stringify(Productos));

let botonplaca1 = document.getElementById("botonplaca1");
    botonplaca1.addEventListener("click",agregarplacavideo1)

let botonplaca2 = document.getElementById("botonplaca2");
    botonplaca2.addEventListener("click",agregarplacavideo2)

let botonplaca3 = document.getElementById("botonplaca3");
    botonplaca3.addEventListener("click",agregarplacavideo3)

///Funciones para agregar al carrito///       

function agregarplacavideo1(){

    cantidad_placavideo1 = parseInt(prompt("Cuantos placas de video 1 quieren agregar?"));
    if(cantidad_placavideo1>placavideo1.stock){
        alert("Error el stock de este producto es: " +placavideo1.stock);
    }else{
    agregar = Carrito.push(placavideo1);  
    carritocompra(placavideo1.precio*cantidad_placavideo1);
    placavideo1.reducir(cantidad_placavideo1);
    alert("Producto agregado al carrito");
    }
    console.log(Carrito);
    console.log(carritomonto);
    localStorage.setItem('Carrito',JSON.stringify(Carrito));

    }

function agregarplacavideo2(){

    cantidad_placavideo2 = parseInt(prompt("Cuantos placas de video 2 quieren agregar?"));
    if(cantidad_placavideo2>placavideo2.stock){
        alert("Error el stock de este producto es: " +placavideo2.stock);
    }else{
    agregar = Carrito.push(placavideo2);  
    carritocompra(placavideo2.precio*cantidad_placavideo2);
    placavideo2.reducir(cantidad_placavideo2);
    alert("Producto agregado al carrito");
    }
    console.log(Carrito);
    console.log(carritomonto);
    localStorage.setItem('Carrito',JSON.stringify(Carrito));
        }   

function agregarplacavideo3(){

    cantidad_placavideo3 = parseInt(prompt("Cuantas placas de video 3 quieren agregar?"));
    if(cantidad_placavideo3>placavideo3.stock){
        alert("Error el stock de este producto es: " +placavideo3.stock);
    }else{
    agregar = Carrito.push(placavideo3);  
    carritocompra(placavideo3.precio*cantidad_placavideo3);
    placavideo3.reducir(cantidad_placavideo3);
    alert("Producto agregado al carrito");
    }
    console.log(Carrito);
    console.log(carritomonto);
    localStorage.setItem('Carrito',JSON.stringify(Carrito));


}      

function carritocompra(monto){
        carritomonto+=monto;
        localStorage.setItem('totalcarrito',carritomonto);
        }

///Detalle producto///

        $("#detalle1").click(function(){
            $("#detalleplaca1").toggle(200,function(){
                if($("#detalle1").html() == "Mas detalles"){
                    $("#detalle1").html("Ocultar detalles");
                }else{
                    $("#detalle1").html("Mas detalles");
                }
            })
        })
        
        $("#detalle2").click(function(){
            $("#detalleplaca2").toggle(200,function(){
                if($("#detalle2").html() == "Mas detalles"){
                    $("#detalle2").html("Ocultar detalles");
                }else{
                    $("#detalle2").html("Mas detalles");
                }
            })
        })
        $("#detalle3").click(function(){
            $("#detalleplaca3").toggle(200,function(){
                if($("#detalle3").html() == "Mas detalles"){
                    $("#detalle3").html("Ocultar detalles");
                }else{
                    $("#detalle3").html("Mas detalles");
                }
            })
        })
        $("#detalleplaca1").animate({
            height: '100%',
            padding: '20px',
        }
        );
        $("#detalleplaca2").animate({
            height: '100%',
            padding: '20px',
        }
        );
        $("#detalleplaca3").animate({
            height: '100%',
            padding: '20px',
        }
        );
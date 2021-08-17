let carritomonto = (JSON.parse(localStorage.getItem('totalcarrito')));
let cantidad_cantidadram1 = 0;
let cantidad_cantidadram2 = 0;
let cantidad_cantidadram3 = 0;
let Carrito = (JSON.parse(localStorage.getItem('Carrito')));

class Ram{
    constructor(marca,modelo,precio,otros){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.otros = otros;
        this.stock = 100;
        this.detalle = function(){
            alert("Ram marca: " +marca+ "-" +modelo+ "\nPrecio: $" +precio+ "\nDetalles adicionales: " +otros);
        }
    }
    reducir(reduccion){
        this.stock -= reduccion;
    }
}

const ram1 = new Ram ("Kingston","a20",3000,"Capacidad 2gb - Ram DDR5");
const ram2 = new Ram ("Kingston","a25",8000,"Capacidad 8gb - Ram DDR6");
const ram3 = new Ram ("Kingston","a35",16000,"Capacidad 16gb -Ram DDR6");

const Productos = [];



Productos.push(ram1);
Productos.push(ram2);
Productos.push(ram3); 

localStorage.setItem('Productos',JSON.stringify(Productos));

let botonram1 = document.getElementById("botonram1");
    botonram1.addEventListener("click",agregarram1)

let botonram2 = document.getElementById("botonram2");
    botonram2.addEventListener("click",agregarram2)

let botonram3 = document.getElementById("botonram3");
    botonram3.addEventListener("click",agregarram3)

function agregarram1(){

    cantidad_cantidadram1 = parseInt(prompt("Cuantas ram 1 quieren agregar?"));
    if(cantidad_cantidadram1>ram1.stock){
        alert("Error el stock de este producto es: " +ram1.stock);
    }else{
    agregar = Carrito.push(ram1);  
    carritocompra(ram1.precio*cantidad_cantidadram1);
    ram1.reducir(cantidad_cantidadram1);
    alert("Producto agregado al carrito");
    }
    console.log(Carrito);
    console.log(carritomonto);
    localStorage.setItem('Carrito',JSON.stringify(Carrito));

    }

function agregarram2(){

    cantidad_cantidadram2 = parseInt(prompt("Cuantas ram 2 quieren agregar?"));
    if(cantidad_cantidadram2>ram2.stock){
        alert("Error el stock de este producto es: " +ram2.stock);
    }else{
    agregar = Carrito.push(ram2);  
    carritocompra(ram2.precio*cantidad_cantidadram2);
    ram2.reducir(cantidad_cantidadram2);
    alert("Producto agregado al carrito");
    }
    console.log(Carrito);
    console.log(carritomonto);
    localStorage.setItem('Carrito',JSON.stringify(Carrito));
        }   

function agregarram3(){

    cantidad_cantidadram3 = parseInt(prompt("Cuantas ram 3 quieren agregar?"));
    if(cantidad_cantidadram3>ram3.stock){
        alert("Error el stock de este producto es: " +ram3.stock);
    }else{
    agregar = Carrito.push(ram3);  
    carritocompra(ram3.precio*cantidad_cantidadram3);
    ram3.reducir(cantidad_cantidadram3);
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


        $("#detalle1").click(function(){
            $("#detalleram1").toggle(200,function(){
                if($("#detalle1").html() == "Mas detalles"){
                    $("#detalle1").html("Ocultar detalles");
                }else{
                    $("#detalle1").html("Mas detalles");
                }
            })
        })
        
        $("#detalle2").click(function(){
            $("#detalleram2").toggle(200,function(){
                if($("#detalle2").html() == "Mas detalles"){
                    $("#detalle2").html("Ocultar detalles");
                }else{
                    $("#detalle2").html("Mas detalles");
                }
            })
        })
        $("#detalle3").click(function(){
            $("#detalleram3").toggle(200,function(){
                if($("#detalle3").html() == "Mas detalles"){
                    $("#detalle3").html("Ocultar detalles");
                }else{
                    $("#detalle3").html("Mas detalles");
                }
            })
        })
        $("#detalleram1").animate({
            height: '100%',
            padding: '20px',
        }
        );
        $("#detalleram2").animate({
            height: '100%',
            padding: '20px',
        }
        );
        $("#detalleram3").animate({
            height: '100%',
            padding: '20px',
        }
        );
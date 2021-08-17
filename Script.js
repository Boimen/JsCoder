let menuB = true;
let Carrito = [];
let cantidad = 0;
const DOLAR = 101.25;

let nuevototal = 1;
localStorage.setItem('nuevototal',nuevototal);

let iniciado = localStorage.setItem('Carrito',JSON.stringify(Carrito));


/// DECLARACION DE CLASES //////

const carritoProductos = [];

class Motherboard{
    constructor(marca,modelo,precio,otros){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.otros = otros;
        this.stock = 100 ;
        this.detalle = function(){
            alert("Motherboard marca: " +marca+ "-" +modelo+ "\nPrecio: $" +precio+ "\nDetalles adicionales: " +otros);
        }
    }
    reducir(reduccion){
        this.stock -= reduccion;
    }
}


const motherboard1 = new Motherboard ("Asus","gr122",5000,"Mother baja gamma");
const motherboard2 = new Motherboard ("Asus","gr150",10000,"Mother media gamma");
const motherboard3 = new Motherboard ("Asus","gr800",23000,"Mother alta gamma");

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

class Ram{
    constructor(marca,modelo,precio,otros){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.otros = otros;
        this.stock = 100;
        this.detalle = function(){
            alert("Ram marca: " +marca+ "-" +modelo+ "\nCapacidad:" +capacidad+ "\nPrecio: $" +precio+ "\nDetalles adicionales: " +otros);
        }
    }
    reducir(reduccion){
        this.stock -= reduccion;
    }
}

const ram1 = new Ram ("Kingston","a20",3000,"Capacidad 2gb - Ram DDR5");
const ram2 = new Ram ("Kingston","a25",8000,"Capacidad 8gb - Ram DDR6");
const ram3 = new Ram ("Kingston","a35",16000,"Capacidad 16gb -Ram DDR6");


$(document).ready(function() {
    obtenerDatos();
});

///API///

function obtenerDatos() {
    $.get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15").done(function(resultado, estado) {
        console.log("Estado que retorna el metodo get: " + estado);
        if (estado == "success") {
            let datosRecibidos = resultado;
            datosRecibidos.forEach(juegos => {
                $("#juegos").append("<tr><td>" + juegos.title + "</td><td>" + juegos.normalPrice + "</td></tr>");
            });
        }
    });
}

$("#botonindex").click(function(){
    $("#detalleproducto").toggle(200,function(){
        if($("#botonindex").html() == "Precio Juegos"){
            $("#botonindex").html("Ocultar juegos");
        }else{
            $("#botonindex").html("Precio Juegos");
        }
    })
})

$("#detalleproducto").animate({
    height: '100%',
    padding: '20px',
}
);

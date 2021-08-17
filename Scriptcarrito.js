let Productos = JSON.parse(localStorage.getItem('Productos'));
let Carrito = JSON.parse(localStorage.getItem('Carrito'));
let cantidadMother = JSON.parse(localStorage.getItem('Cantidad'));
let total_carrito = JSON.parse(localStorage.getItem('totalcarrito'));
let nuevototal = JSON.parse(localStorage.getItem('nuevototal')) ;





$(document).ready(function(){
    console.log("Dom ready");
});

// DOM // 

if(Carrito == null){
    $("section").append( 
        `
        <div>
            
            <h3>Su Carrito esta vacio</h3>

            </div>`);
;


}
for(const Producto of Carrito){
    $("section").prepend(
        `<div class="row">
            <div class="col-sm d-flex justify-content-center col-sm" id="Carritorender">
                <div class="card shadow mb-1 bg-dark rounded" id="Tarjetacarrito">
                    <h3 class="card-title pt-2 text-center text-primary">${Producto.marca + "-" +Producto.modelo}</h3>
                    <p class="card-text text-white-50 description" id="Descripcion">Modelo: ${Producto.otros}</p>
                    <h5 class="text-primary">Precio:<span class="precio">$ ${Producto.precio} </span></h5>
                </div>
            </div>
        </div>`);
        }

$("section").append( 
        `
        <div class="col d-flex justify-content-center mb-4 col-sm" >
            <div class="card shadow mb-1 bg-dark rounded" id="Tarjetacarrito">
            <h3>El total acumulado es:  $${total_carrito}</h3>
            <button class="btn btn-danger" id="eliminar_carrito">Eliminar carrito</button>
            </div>
            </div>
            </div>`);
;

$("section").append( 
    `
    <div class="col d-flex justify-content-center mb-4 col-sm" >
        <div class="card shadow mb-1 bg-dark rounded" id="Tarjetacarrito">
        <h3>Calcular Cuotas</h3>
        <div class="btn-group">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Calcular cuota
        </button>
        <div class="dropdown-menu dropdown-menu-right">
        <button class="dropdown-item" type="button" id="boton1">Banco Supervielle x3 pagos Visa (5% interes)</button>
        <button class="dropdown-item" type="button" id="boton2">Banco Supervielle x6 pagos Visa (15% interes)</button>
        <button class="dropdown-item" type="button" id="boton3">Banco Supervielle x3 pagos Mastercard (7% interes)</button>
        <button class="dropdown-item" type="button" id="boton4">Banco Galicia x3 pagos Visa (sin interes)</button>
        <button class="dropdown-item" type="button" id="boton5">Banco Galicia x6 pagos Visa (10% interes)</button>
        </div>
    </div>
        <h3>Total financiado: $${nuevototal.toFixed(2)}<h3>
        </div>
        </div>

        </div>`);
;

//Borrar Carrito//

let boton_eliminar = document.getElementById("eliminar_carrito");
    boton_eliminar.addEventListener("click",borrarcarrito)


function borrarcarrito(){
    localStorage.removeItem('Carrito');
    localStorage.removeItem('totalcarrito');
    localStorage.removeItem('nuevototal');
    alert("Carrito Eliminado");
    location.reload();
}

$(document).ready(function(){
    console.log("Dom ready");
});

// Botones cuotas //

let boton1 = document.getElementById("boton1");
    boton1.addEventListener("click",SupVisatres);

let boton2 = document.getElementById("boton2");
    boton2.addEventListener("click",SupVisaseis);

let boton3 = document.getElementById("boton3");
    boton3.addEventListener("click",SupMastertres);

let boton4 = document.getElementById("boton4");
    boton4.addEventListener("click",GalVisatres); 
    
let boton5 = document.getElementById("boton5");
    boton5.addEventListener("click",GalVisaseis);        

// Funciones con interes //

function SupVisatres(){
    nuevototal = 0;
    nuevototal = total_carrito*1.05;
    alert("El total en 3 pagos es: $" +nuevototal.toFixed(2)+ "\nEn tres pagos de: $"+(nuevototal/3).toFixed(2));
    let confirmacion = confirm("Desea tomar esta forma de pago?");
    if (confirmacion){
    localStorage.setItem('nuevototal',nuevototal);
    }else{
        return;
    }
    location.reload();

}

function SupVisaseis(){
    nuevototal = 0;
    nuevototal = total_carrito*1.15;
    alert("El total en 6 pagos es: $" +nuevototal.toFixed(2)+ "\nEn tres pagos de: $"+(nuevototal/6).toFixed(2));
    let confirmacion = confirm("Desea tomar esta forma de pago?");
    if (confirmacion){
    localStorage.setItem('nuevototal',nuevototal);
    }else{
        return;
    }
    location.reload();

}

function SupMastertres(){
    nuevototal = 0;
    nuevototal = total_carrito*1.07;
    alert("El total en 3 pagos es: $" +nuevototal.toFixed(2)+ "\nEn tres pagos de: $"+(nuevototal/3).toFixed(2));
    let confirmacion = confirm("Desea tomar esta forma de pago?");
    if (confirmacion){
    localStorage.setItem('nuevototal',nuevototal);
    }else{
        return;
    }
    location.reload();

}

function GalVisatres(){
    nuevototal = 0;
    nuevototal = total_carrito;
    alert("El total en 3 pagos es: $" +nuevototal.toFixed(2)+ "\nEn tres pagos de: $"+(nuevototal/3).toFixed(2));
    let confirmacion = confirm("Desea tomar esta forma de pago?");
    if (confirmacion){
    localStorage.setItem('nuevototal',nuevototal);
    }else{
        return;
    }
    location.reload();

}

function GalVisaseis(){
    nuevototal = 0;
    nuevototal = total_carrito*1.10;
    alert("El total en 6 pagos es: $" +nuevototal.toFixed(2)+ "\nEn tres pagos de: $"+(nuevototal/6).toFixed(2));
    let confirmacion = confirm("Desea tomar esta forma de pago?");
    if (confirmacion){
    localStorage.setItem('nuevototal',nuevototal);
    }else{
        return;
    }
    location.reload();

}
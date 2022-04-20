const tiposCripto = [{nombre: 'BNB', precio: 429}, {nombre: 'ETHEREUM', precio: 3271}, {nombre: 'USDT', precio: 1},{nombre: 'BITCOIN', precio: 46600} ];
let carritoCompra = [];
let form = document.querySelector('#formulario');
let eleccion = document.querySelector('#moneda');
let divPrincipal = document.createElement('div');


seleccionadorMonedas(tiposCripto);
botonTotal ();
function seleccionadorMonedas (tipo){

    for(let i = 0; i<tipo.length; i++){
        eleccion.innerHTML += `<option value ='${tipo[i].nombre}'>${tipo[i].nombre}</option>`

    }
};

class Criptomoneda {
    constructor(nombre, cantidadUSD){
        this.nombre = nombre,
        this.cantidadUSD = parseInt( cantidadUSD);
        this.precio = calcularPrecio(this.nombre);
        this.calculadoraCripto = this.cantidadUSD / this.precio;
    };

    TotalCompra(){
        compraTotal = this.nombre + '--> ' + this.cantidadUSD + ' = ' + this.calculadoraCripto + ' ' + this.nombre + '\n' + compraTotal
        return compraTotal
    }
}; 
function calcularPrecio (nom) {
    const validar = tiposCripto.find( (el) => el.nombre === nom  )

    return validar.precio
};

document.querySelector('#formulario').onsubmit = (e) => {
    e.preventDefault();
    let dinero = document.querySelector('#cantidadMoneda').value
    const compra = new Criptomoneda ( eleccion.value,dinero )
    carritoCompra.push(compra)
    console.log(carritoCompra)
    mostrarCompra(compra)
    

};

function mostrarCompra(comprar) {
   
   let divHijo = document.createElement('div')
   divHijo.innerHTML = `<h2>Usted Compro: ${comprar.nombre} </h2>
                    <h2>Total que desea comprar: ${comprar.cantidadUSD}  </h2>
                    <h2>Cotizacion Actual: ${comprar.precio}  </h2>
                    <h2>Total en Cripto: ${comprar.calculadoraCripto}  </h2>`
    divPrincipal.appendChild(divHijo);

    
};

function botonTotal (){
    let fin = document.querySelector('#finalizar')
    fin.onclick = () =>{
        let totalPrecio = 0;
        for(const el of carritoCompra ){
            totalPrecio += el.cantidadUSD       
        }
        alert('El total de su compra es de: $ ' + totalPrecio )
        location.reload()
    }
};

document.body.append(divPrincipal);
console.log(carritoCompra);
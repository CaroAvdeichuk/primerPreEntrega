
//Bienvenida
let logIn = parseInt(prompt('Ingrese su numero de CUIT'))
alert('Sr. Contribuyente: A continuación ingrese los datos solicitados para confeccionar su factura electrónica.')

//Variables
let fecha = ''
let razonSocial = ''
let cuit = ''
let tipoContribuidor = ''
let generarComprobante = false
let tipoComprobante = ''
let producto = ''
let precio = 0
let cantidad = 0
let calcularTotal = false
let subTotal = 0
let totalSinIva=''
let iva=''
let precioFinal=''

//Funciones
const ingresarDatos = () => {

    do {
        fecha = prompt('Ingrese la fecha de emisión del comprobante')
        razonSocial = prompt('Ingrese la razon social:')
        cuit = parseInt(prompt('Ingrese el número de CUIT:'))
        tipoContribuidor = parseInt(prompt('Ingrese la condición frente al IVA: \n1.Consumidor Final\n2.IVA excento\n3.Monotributista\n4.Responable inscripto '))

        switch (tipoContribuidor) {
            case 1:
                tipoComprobante = 'B'
                break;
            case 2:
                tipoComprobante = 'B'
                break;
            case 3:
                tipoComprobante = 'A'
                break;
            case 4:
                tipoComprobante = 'A'
                break;
            default:
                alert('Los datos ingresados no son correctos!')
        }

    } while (generarComprobante);
    return tipoComprobante
};

const detalleCompra = (tipoComprobante) => {

    do {
        producto = prompt('Descripción del producto:')
        precio = parseInt(prompt('Ingrese el precio por unidad:'))
        cantidad = parseInt(prompt('Ingrese la cantidad:'))
        subTotal = precio * cantidad
    } while (calcularTotal);
    return subTotal
};

const detalleCostos = (detalleCompra) => {

    if (tipoComprobante == 'A') {
        totalSinIva = subTotal / 1.21
        iva = totalSinIva * 0.21
        precioFinal = totalSinIva + iva
    } else{
        subTotal
    } 
};

const detalleFactura = (ingresarDatos, tipoComprobante, detalleCompra, detalleCostos) => {
    if(tipoComprobante=='A') {alert('Detalle de la Factura emitida: '+'\n Fecha: '+fecha+'\nRazón Social: '+razonSocial+'\nCUIT: '+cuit+'\nFactura: '+tipoComprobante+'\nProducto: '+producto+'\nCantidad: '+cantidad+'\nSubtotal: '+totalSinIva+'\nIVA: '+iva+'\nTotal: '+precioFinal )} else{
        alert('Detalle de la Factura emitida: '+'\n Fecha: '+fecha+'\nRazón Social: '+razonSocial+'\nCUIT: '+cuit+'\nFactura: '+tipoComprobante+'\nProducto: '+producto+'\nCantidad: '+cantidad+'\nTotal: '+subTotal)
    }
};


const datosComprador = ingresarDatos()
const subtotal = detalleCompra(tipoComprobante)
const total = detalleCostos(detalleCompra)
const datosFactura = detalleFactura (ingresarDatos, tipoComprobante, detalleCompra, detalleCostos)







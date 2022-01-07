
const productos = [
    {id: '1', nombre: 'Amazfit GTS 3', precio: '$23,500', img: 'assets/img/amazfitgts3.jpg', stock: 12, info: 'El Amazfit GTS 3 cuenta con una pantalla cuadrada AMOLED de 1,75 pulgadas en un diseño más fino y ligero. Además, viene con Alexa integrado y tiene una batería de 250 mAh que promete hasta 12 días de autonomía. Para personalizarlo, ofrece 100 esferas de reloj y la posibilidad de poner tu propia foto como imagen de fondo.'},
    {id: '2', nombre: 'Laptop Hp Omen Rtx2070', precio: '$325,000', img: 'assets/img/hpomen.jpg', stock: 6},
    {id: '3', nombre: 'Apple Iphone 13 Mini', precio: '$180,000', img: 'assets/img/iphone13mini.jfif', stock: 5},
    {id: '4', nombre: 'JBL Xtreme 3', precio: '$75,000', img: 'assets/img/jblxtreme3.jpg', stock: 4},
    {id: '5', nombre: 'Scooter Xiaomi M365', precio: '$115,000', img: 'assets/img/scooterxiaomi.jpg', stock: 3},
    {id: '6', nombre: 'Samsung Z Flip3', precio: '$139,900',  img: 'assets/img/zflip3.jpg', stock: 8}
];

export const getFetch = new Promise((resolve, reject)=>{
    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(productos)
        },2000)
    } else {
        reject('error')
    }
})

const productos = [
    {id: '1', nombre: 'Amazfit GTS 3', precio: 23500, img: '/assets/img/amazfitgts3.jpg', stock: 12, categoria: 'smartwatches', info: 'El Amazfit GTS 3 cuenta con una pantalla cuadrada AMOLED de 1,75 pulgadas en un diseño más fino y ligero. Además, viene con Alexa integrado y tiene una batería de 250 mAh que promete hasta 12 días de autonomía. Para personalizarlo, ofrece 100 esferas de reloj y la posibilidad de poner tu propia foto como imagen de fondo.'},
    {id: '2', nombre: 'Laptop Hp Omen Rtx2070', precio: 325000, img: '/assets/img/hpomen.jpg', stock: 6, categoria: 'notebooks', info: 'Juega tu máximo en cualquier lugar con el mejor desempeño. La OMEN 15 Laptop mejora contigo, con gráficos súper poderosos y capacidad de expansión para una inmersión completa.'},
    {id: '3', nombre: 'Apple Iphone 13 Mini', precio: 180000, img: '/assets/img/iphone13mini.jfif', stock: 5, categoria: 'smartphones', info: 'iPhone 13 mini. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante.'},
    {id: '4', nombre: 'JBL Xtreme 3', precio: 75000, img: '/assets/img/jblxtreme3.jpg', stock: 4, categoria: 'parlantes', info: 'JBL Xtreme 3 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.'},
    {id: '5', nombre: 'Scooter Xiaomi M365', precio: 115000, img: '/assets/img/scooterxiaomi.jpg', stock: 3, categoria: 'movilidad', info: 'Xiaomi M365 es un nuevo patinete eléctrico color negro y de diseño elegante, desde la luz hasta los neumáticos.'},
    {id: '6', nombre: 'Samsung Z Flip3', precio: 139900,  img: '/assets/img/zflip3.jpg', stock: 8, categoria: 'smartphones', info: 'Se pliega en el bolsillo. Entra en tu cartera. Se desliza en tus jeans más apretados. Cuando lo sacás, se abre un smartphone 5G con pantalla completa que se adapta a tus ángulos favoritos.'}
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
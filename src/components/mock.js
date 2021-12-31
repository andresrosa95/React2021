import carrito from '../assets/img/carrito.png'

const productos = [
    {id: 1, nombre: 'Amazfit GTS 3', img: 'https://dxelectronica.com.ar/wp-content/uploads/2021/11/AMAZFITGTS3NEGRO-1.jpg', stock: 12},
    {id: 2, nombre: 'Hp OMEN', img: 'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/4_zu_3_omen1536.jpg', stock: 6},
    {id: 3, nombre: 'Apple iPad Mini 2021', img: 'https://www.apple.com/newsroom/images/product/ipad/standard/Apple_iPad-mini_colors_09142021_big_carousel.jpg.large.jpg', stock: 5},
    {id: 4, nombre: 'JBL Xtreme 3', img: 'https://m.media-amazon.com/images/I/81ZB3wID7oL._AC_SL1500_.jpg', stock: 4},
    {id: 5, nombre: 'Scooter Xiaomi', img: 'https://cdn-static.flashme.com.ar/wp-content/uploads/2021/03/FBC4025GL-1.jpg', stock: 3},
    {id: 6, nombre: 'Samsung Z Flip3',  img: 'https://images.samsung.com/ar/smartphones/galaxy-z-flip3-5g/buy/zflip3_carousel_marketingsinglekv_ex_mo.jpg', stock: 8}
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
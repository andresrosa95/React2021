
const ItemDetail = ({producto}) => {
    return (
        <div>
            <h1>{producto.nombre} </h1>
            <h2>{producto.precio}</h2>
            <h3>{producto.info}</h3>
            <h3>Stock: {producto.stock} unidades</h3><br />
            <img src={producto.img} width={450} height={450} alt={producto.nombre} /> <br />
        </div>
    )
}

export default ItemDetail

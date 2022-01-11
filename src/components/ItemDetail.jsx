import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div>
            <h1>{producto.nombre} </h1>
            <img src={producto.img} width={450} height={450} alt={producto.nombre} /> <br />
            <h3>{producto.info}</h3>
            <h2>{producto.precio}</h2>
            <ItemCount min={1} max={producto.stock} /> <br />
            <h3>Stock: {producto.stock} unidades</h3><br />
        </div>
    )
}

export default ItemDetail

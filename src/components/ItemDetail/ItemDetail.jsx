import { ItemCount } from "../ItemCount/ItemCount"
export const ItemDetail = ({ item }) => {

    const onAdd = (contador) => { 
        console.log(contador)
        console.log(item)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.img} alt={`Imagen de ${item.name}`} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Color: {item.colour}</p>
                    <p className="card-text">Precio: ${item.price}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}
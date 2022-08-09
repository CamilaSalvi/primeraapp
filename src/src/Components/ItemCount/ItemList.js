import Item from './Item/Item';


function ItemList({products}){
    return(
        <div>
            {products.map(data =>{
                return(
                    <Item                         
                    id = {data.id}
                    titulo = {data.titulo}
                    precio = {data.precio}
                    stock = {data.stock}
                    imagen = {data.imagen}
                    >


                    </Item>
                )})}
        </div>
    )
}

export default ItemList;
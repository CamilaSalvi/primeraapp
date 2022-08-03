import items from './Item';
function ItemList({products}){
    return(
        <div>
            {products.map(data =>{
                return(
                    <Item>

                    </Item>
                )
            })}
        </div>
    )
}
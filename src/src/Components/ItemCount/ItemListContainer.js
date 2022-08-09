import { useEffect, useState } from "react";
import './ItemList.css'
import ItemList from "./ItemList";
import Item from "./Item/Item";

function ItemListContainer() {
    const getData = new Promise((res) =>{
            setTimeout(() => {
                res(Item)
            }, 2000);
    })

    const[products, setProducts] = useState([]);

    useEffect(()=>{
        getData.then((resp)=>setProducts(resp)
        ).catch(err=>console.log(err))
        .finally(()=>console.log(products))
    },[])

    return(
        <div>
            <ItemList products={products}>
            </ItemList>
        </div>
    )
}

export default ItemListContainer;
   
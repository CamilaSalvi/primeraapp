import { useEffect, useState } from "react";
import './ItemList.css'

function ItemList(props) {
    const getData = new Promise((res, rej) =>{
        if(true){
            setTimeout(() => {
                res(items)
            }, 2000);
        }
    })

    const[items, setItems] = useState([]);

    useEffect(()=>{
        getData.then((resp)=>setItems(resp)
        ).catch(err=>console.log(items))
    },[])

    return(
        <div className="">
            <ItemList items={items}>

            </ItemList>
        </div>
    )
}

export default ItemList;
   
import { useState , useEffect} from "react";


const Listview = ({getList}) => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        console.log("useeffect-listview")
        setItems(getList)
    },[getList])
    return (
        <div>
            {items.map((item,index)=>{
               return <p key={index} >{item}</p>
            })}
        </div>
    )
}

 export default Listview;
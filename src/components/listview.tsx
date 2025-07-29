import { useState , useEffect, useContext} from "react";
import theme from "./list.tsx"


const Listview = ({getList}) => {
    const [items, setItems] = useState([]);
    const [themes] = useContext(theme);

    console.log(themes)

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
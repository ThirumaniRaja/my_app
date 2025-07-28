
import { useState ,useCallback} from "react";
import Listview from "./listview.tsx";

const List = () => {
    const [num, setNum] = useState(0);
    const [dark, setTheme] = useState(false);

     const changeTheme = {
                color: dark ? 'white' : 'black',
                backgroundColor: dark ? 'black' : 'white'
     }

    // const listarr = () =>{
    //     return [num + 1, num + 2, num +3];
    //     }

      const listarr = useCallback(() =>{
        return [num + 1, num + 2, num +3];
        },[num]
    )
    

    return(
        <div>
        <input type="number" value={num} onChange={(e)=>setNum(parseInt(e.target.value))}></input>
        <button style={changeTheme} onClick={() => setTheme((prev) => !prev)}>Toggle button</button>

        < Listview getList={listarr}/>

        </div>
    )

}


export default List;
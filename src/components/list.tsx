
import { useState ,useCallback,createContext} from "react";
import Listview from "./listview.tsx";

export const theme = createContext()


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
        <theme.Provider value={{dark}}>
        <input type="number" value={num} onChange={(e)=>setNum(parseInt(e.target.value))}></input>
        <button style={changeTheme} onClick={() => setTheme((prev) => !prev)}>Toggle button</button>

        < Listview getList={listarr}/>

        </theme.Provider>
    )

}


export default List;
import React from 'react';

const HigherOrder = (Comp) => {

    return(props)=>{
        const handleClick = () => { 
            console.log(props.trackInfo)
        };

        return (
            <div onClick={handleClick}>
                <Comp {...props}/>
            </div>
        )

    }
   
}

export default HigherOrder
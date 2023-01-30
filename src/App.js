import React, { useState } from "react";
import './App.css';  


function App(){
    const incNum = () =>{
        setCount(count+1);
    }
    const decNum = () =>{
        setCount(count-1);
    }
     
    const [count,setCount] = useState(0);
    return(
        <>
            <div className="container">
                <h1>{count}</h1>
                
                <button onClick={decNum}>-</button>
                <button onClick={incNum}>+</button>
            </div>
        </>
    )
};
export default App;
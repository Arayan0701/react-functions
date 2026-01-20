 import React, {Component} from "react";

 export default function Hook1Example(){
   const [count, setCount] = React.useState(0);
   const [name , setName] = React.useState("Guest");
   const [checked, setChecked] = React.useState(true);
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <h2>Hello, {name}!</h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
            <div>
                <label>
                    <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
                    Check me!
                </label>
            </div>
            {checked && <p>The checkbox is checked!</p>}


        </div>
    )
 };
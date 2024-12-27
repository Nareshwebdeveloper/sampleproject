import { useState } from "react";
import { Child } from "./child";
// child component
export function Parent(props){
    
    
    return(
        <div>
            {/* <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.job}</h1> */}
            <div>
                {/* {props.showButton ?<button onClick={}>click me</button>:""} */}
                <h6>I am from prent component:Hide</h6>
            </div>
        </div>
    )

   
}
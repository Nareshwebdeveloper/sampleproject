import React, { useState } from "react"

export function Netflex(){
    const[number,setnumber]=React.useState(1)
    
    return(
        <div>
            <input type="number" value={number}/>
        </div>
    )
}
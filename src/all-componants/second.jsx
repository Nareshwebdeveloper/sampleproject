import { useState } from "react"
import { Parent } from "./parent"

// main component
 export function Second() {
    const [show, setshow] = useState(true)
    function ShowMe() {
        if (show == false) {
            setshow(true)
        } else {
            setshow(false)
        }
    }
    return (
        <div>
            {/* This is one type or Show and Hide functionality  */}

            {/* <Parent name="Naresh"/>
            <Parent age={65}/>
            <Parent job="senginner"></Parent> */}
            {/* 
              <button onClick={()=>setshow(!show)}>{show? "hide":"show"}</button>
                    {show && <h1>hello world</h1>} */}


            {/* This is second one type or Show and Hide functionality  */}

            {/* <button onClick={ShowMe}>{show ? "hide" : "show"}</button>
            {show && <h1>hello world</h1>} */}

            {/* This 3rd way for conditional rendring for component rendaring */}

            <button className="btn btn-primary" onClick={ShowMe}>{show ?<Parent/>:"show"} </button>
        </div>

    )
}

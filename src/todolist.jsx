import { useState } from "react"

    export function Todolist(){
      
  const[countries,setcountries]=useState(["India","Pakistan","Srilanka"])
    
    function addcountry(e)
    {
         var nc=document.getElementById('c1').value;
         setcountries([...countries,nc])
        
    }
    return(
        <div className="flex p-4 ml-4" >
            <input type="text" id='c1'/>
            <button onClick={addcountry}>Add Country</button>
            
                <ol>
                    {
                        countries.map((list)=>
                        <li>{list}</li>
                        )
                    
                    }
                </ol>
                   
                 
        </div>
    )
}
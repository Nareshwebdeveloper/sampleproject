import { useState } from "react"

export function Sample(){
const[cities]=useState(["Hyderabad","chennai","Banglore"]);

return(

    <div className="conatiner-fluid p-3">
        <div><h3>My Cities</h3></div>
        <ul>
{
      cities.map(citi=>
      
      <li key={citi}>{citi}</li>
      
      )
}
</ul>
    </div>
)

}
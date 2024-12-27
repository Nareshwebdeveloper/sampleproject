import { useState } from "react";

export function CounterExample(){

    const[counter, setCounter]=useState(0);
    const[text,setText]=useState('');
    const[msg,setmsg]=useState("Naresh");
    const[employees]=useState([{Name:"Naresh",lastname:"Thaviti",age:29},
                               {Name:"laxmi",lastname:"Thaviti",age:25} 
                                ])

    
    // we can use either normal functio or arrow function 
    
    // function counts(){

    //     setCounter(counter+1);
       
        
    // }
    // function decrement(){

    //     setCounter(counter-1);
        
    // }

    function submit(e){

        setText(e.target.value)
    }
    
    return(
        <div>
            <h2>Counting:{counter}</h2>
            <button className="btn btn-primary mt-3 ms-3" onClick={()=>setCounter(counter+1)}>Increment</button>
            <button className="btn btn-danger mt-3 ms-3" onClick={()=>setCounter(counter-1)}>Decrement</button>
            


            <div className="container-fluid">
                <center>
                <div>
                    <span>
                        <input width="25"  value={text} onChange={submit}/>
                    </span>
                    <p>you type:{text}</p>
                </div>
                <button onClick={()=>setText('')}>Reset</button>
                
                </center>
            </div>

            <div>
                <center><h3>Hello ! {msg}</h3></center>
            </div>
            <div >
                <table className="table table-hover">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map((employee)=>
                            
                            <tr key={employee.Name}>

                                <td>{employee.Name}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.age}</td>
                            
                            </tr>
                            
                            )
                        }
                    </tbody>

                </table>
                
            </div>

            <div>
                <center>
                <input type="search"  placeholder="Search a Google or type a URL" style={{ width:"500px",height:"50px",borderRadius:'100px' }} 
                className="form-control form-control-sm "/>
                </center>
            </div>
        </div>
    )
}





export function Styleing(){

    var numbers=[12,43,65,77,99]
    var names=["naresh","thaviti","satvik","7hills"]
    return (
        <div>
            <h1 style={{align:"center"}}>Assignment-1 Apply red color to JSX h1 with green background</h1>
            <h4 style={{backgroundColor:"lime"}}>This is React Styleing</h4>
            <h4 style={{color:"red"}}>This is React Styleing</h4>
            <hr/><hr/><br/>
        
        <h1 style={{align:"center"}}>Assignment-2 Display each array element in flex boxes</h1>
        <hr/><br/>
            <div style={{display:'flex'}}>
            
           {
             numbers.map((list)=>
             <div style={{border:"1px solid",padding:"10px",margin:"10px"}}>{list}</div>)
           }
            
            

        </div>
        <hr/><br/><b></b>
        <h2>Assignment-3 
Display each array element in flex boxes</h2>
        <div style={{display:"flex"}}>
            {
                names.map((list)=>
                <div style={{border:"1px solid",padding:"10px",margin:"10px"}}>{list}</div>
                )
            }
        </div>
        </div>
    )
    
}
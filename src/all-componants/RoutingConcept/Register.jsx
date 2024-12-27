

export function Register(){
    return(
        <div>
            
            <div className="d-flex justify-content-center border">
         
            <form style={{marginTop:"130px"}} className="" >
                <dl><dt>User name
                    <dd><input type="text" className="form-control"/></dd>
                </dt>
                <dt>Email
                    <dd><input type="text" className="form-control"/></dd>
                </dt>
                <dt>Password
                    <dd><input type="text" className="form-control"/></dd>
                </dt>
                </dl>
                <button >Register</button>
                    
                
            </form>
            
            </div>
            
        </div>
    )
}
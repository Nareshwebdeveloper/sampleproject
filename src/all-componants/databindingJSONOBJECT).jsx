import { Simpledatabining } from "./DatabindingSimple"
export function Databinding(){
    var products=
    {
        "id":1,
        "name":"samsung",
        "cost":4500,
        "stock":true
    }
    return(
        <div>
            <div className="container-fluid p-3 mr-4">
            <dt>Id:</dt>
            <dd>{products.id}</dd>
            <dt>product Name</dt>
            <dd>{products.name}</dd>
            <dt>Cost:</dt>
            <dd>{products.cost}</dd>
            <dt>Stock:</dt>
            <dd>{(products.stock==true)?"availble":"not available"}</dd>
            </div>

            <Simpledatabining></Simpledatabining>
        </div>
        
    );

    
}


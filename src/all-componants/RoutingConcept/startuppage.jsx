// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Link,useParams } from "react-router-dom"

// export function StartUpPage(){
//     const params    =useParams();
//     const[categories,setcategories]=useState([])
//     useEffect(()=>{
//         axios({method:"get",url:"http://fakestoreapi.com/products/categories",})
//         .then((responce)=>{
//             setcategories(responce.data)
//         })
//     },[])
//     return(
        
//         <div>
//             {/* <h2>{params.catName}</h2>
//             <h1>Select category</h1>
//             <ol className="p-2 ms-4 ">
//                 {
//                     categories.map(category=>
                        
//                             <li key={category}>
//                             <Link to={`/${category}`}>{category.toUpperCase()}</Link>
//                             </li>
                        
                        
//                         )
//                 }
//             </ol>
//              */}
//             </div>
//     )
// }
import { useState,useEffect } from "react";
import "./generalstore.css";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
export function Generalstore()

{ 
    const [categories,setcategories]=useState([]);
    const [products,setProducts]=useState([]);

    function Loadcategories(){

        // fetch("https://fakestoreapi.com/products/categories")
        // .then((responce)=>responce.json())
        // .then((data)=>{
        //     data.unshift("All");
        //     setcategories(data)
        // })

        fetch("https://fakestoreapi.com/products/categories")
        .then((res)=>res.json())
        .then((data)=>{
            setcategories(data)
        })

        

    }

    function LoadProducts(){

        fetch("http://fakestoreapi.com/products")
        .then((responce)=>responce.json())
        .then((data)=>{
          setProducts(data)
        })
        
    }

    useEffect(()=>{
        Loadcategories();
        LoadProducts();
    },[])  

    function handleCategoryChange(event){
        LoadProducts(`http://fakestoreapi.com/products/category/${event.target.value}` )
    }
    return(
            <div className="conatiner-flex">
            <BrowserRouter>
            <header className="d-flex justify-content-between p-3 bg-success text-white">
                <h4> Logo Here</h4>

                <div>
                    <span className="me-3"><Link to="home" className="text-white text-decoration-none">Home</Link></span>
                    <span className="me-3"><Link to="electronics" className="text-white  text-decoration-none">Electronics</Link></span>
                    <span className="me-3">Men's Cloth</span>
                    <span className="me-3">Women's Cloth</span>
                    <span className="me-3">Jewlery</span>

                </div>
                    <div>
                        <span class="bi bi-heart me-3"></span>
                        <span className="bi bi-person me-3"></span>
                        <span className="bi bi-search me-3"></span>
                        <span className="bi bi-cart me-3"></span>
                    </div>
              
            </header>
            
            <Routes>
                {/* <Route path="home" element ={<h1>hello</h1>}/> */}
                <Route path="home" element={<div><h1>hello this home page</h1>
                                                </div>
                                            }/>
                </Routes>
            </BrowserRouter>


            <section className="mt-4 ms-2 row">
            <div className="col-6">
                {/* <label className="form-label"> Select a category</label> */}
                <h3>Select Category</h3>
                <select className="form-select w-25">
                   {

                        categories.map(category=>

                        <option key={category} value={category}>{category.toUpperCase()}</option>
                        
                        )

                   }
                 
                </select>

            </div>
            <main className="col-30 d-flex flex-wrap">
               
               {
                    products.map(product=>
                        
                        <div key={product.id} className="card m-2 p-2">
                            <div className="card-header" style={{height:"300px",width:"300px"}}>
                                <img src={product.image} height="200" className="card-img-top"/>
                            <h6 className="card-title">{product.title.toUpperCase()}</h6>
                            </div> 
                            <div className="card-footer" style={{height:"120px",width:"300px"}}>
                                <h5>Price</h5>
                                <p className="card-text" style={{height:"20px",width:"30px"}}>{product.price}</p>
                                <span className="bi bi-star-fill text-success"></span>{product.rating.rate} [{product.rating.count}]

                            {/* <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd><span className="bi bi-star-fill text-success"></span>{product.rating.rate} [{product.rating.count}]</dd>
                            </dl> */}
                            </div>
                        </div>
                        )

               }
               
            </main>
            
            </section>
            
        </div>
    )

        
        

}
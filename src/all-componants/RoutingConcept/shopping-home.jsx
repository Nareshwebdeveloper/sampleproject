import { useEffect, useState } from "react";
import axios from "axios";


export function ShoppingHome() {

    const [products, setproducts] = useState([]);
    const name = () => {

    }

    useEffect(() => {

        axios({
            method: "get",
            url: "http://fakestoreapi.com/products/",

        })
            .then((responce) => {
               setproducts(responce.data)
            })
    }, [])
    return (
        <div className="conainer-fluid">
            <div className="d-flex flex-wrap">
                {
                    products.map(product =>
                        <div key={product.id} className="d-flex card m-4 p-4" style={{ width: "230px" }}>
                            <img src={product.image} className="card-img-top" height="150" />
                            <div className=" card-header" style={{ height: "120px", backgroungColor: "pink" }}>
                                <h6>{product.title}</h6>
                                <span><button className="btn btn-info">Add to cart</button></span>
                                <span className="p-1"><button className="btn btn-info">Buy Now</button></span>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    )

}


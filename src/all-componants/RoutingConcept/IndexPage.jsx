import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { StartUpPage } from "./startuppage";
import { Sample } from "../sample";
import { Register } from "./Register";



export function Index() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="p-3 mt-3 d-flex justify-content-between" style={{ backgroundColor: "tomato", height: "50px" }}>
                    <div>
                        <span className="p-2"> <Link to="home" className="text-white text-decoration-none">Home</Link></span>
                        <span className="p-2"> <Link to='product' className="text-white text-decoration-none">Products</Link></span>
                        <span className="p-2"> <Link to='task' className="text-white text-decoration-none">Task</Link></span>
                        <span className="p-2"> <Link to='about' className="text-white text-decoration-none">Abot us</Link></span>
                        <span className="p-2"> <Link to='contact' className="text-white text-decoration-none">Contact</Link></span>
                       
                    </div>
                    
                    <div>
                    <span > <Link to='Login'><button className="btn btn-primary p-1">Login</button></Link></span>
                    <span > <Link to='register'><button className="btn btn-dark p-1" style={{width:"100px",height:"200%"}}>Register</button></Link></span>
                    </div>


                </header>

                <Routes>

                    <Route path="home" element={<ShoppingHome />} />

                    <Route path="product" element={<h1>hello this product page</h1>} />

                    <Route path="task" element={<h1>hello this task page</h1>} />

                    <Route path="about" element={<h1>hello this about page</h1>} />

                    <Route path="contact" element={<h1>hello this contact page</h1>} />
                    <Route path="Login" element={<Sample />} />
                    <Route path="register" element={<Register/>} />

                    <Route path="*" element={<h1>Page Not Found</h1>} />
                    <Route path="/" element={<ShoppingHome />} />




                </Routes>

            </BrowserRouter>



        </div>
    )
}
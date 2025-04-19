import React from "react";
import ReactDom from "react-dom/client";







const Header =() =>{
    return (
        <div className="header">
            <div className="logo-container" >
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/021/812/963/non_2x/healthy-food-logo-design-template-with-carrot-love-perfect-for-business-company-mobile-app-restaurant-etc-free-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contanct us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}




const AppLayout = () =>{
    return (
        <div className="app">
         <Header />
        </div>
    )
}

const root =ReactDom.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
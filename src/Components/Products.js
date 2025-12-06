import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function Products(){
    return(
        <>
        <div>
            <h1>My Products Page</h1>

        </div>

        <nav>
            <Link to={'shirt'}>Shirt</Link>
            <Link to={'jeans'}>Jeans</Link>
        </nav>
        <Outlet/>
        </>


    )
};

export default Products;
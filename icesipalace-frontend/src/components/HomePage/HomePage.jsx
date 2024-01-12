import React from "react";
import "../../styles/HomePage/HomePage.css";
import Product from "./Product";

function HomePage() {

    const products = [
        {
            id: 1,
            name: "Producto 1",
            price: 100,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 2,
            name: "Producto 2",
            price: 200,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 3,
            name: "Producto 3",
            price: 300,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 4,
            name: "Producto 4",
            price: 400,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 5,
            name: "Producto 5",
            price: 500,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 6,
            name: "Producto 6",
            price: 600,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 7,
            name: "Producto 7",
            price: 700,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 8,
            name: "Producto 8",
            price: 800,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 9,
            name: "Producto 9",
            price: 900,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 10,
            name: "Producto 10",
            price: 1000,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 11,
            name: "Producto 11",
            price: 1100,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 12,
            name: "Producto 12",
            price: 1200,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 13,
            name: "Producto 13",
            price: 1300,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
        {
            id: 14,
            name: "Producto 14",
            price: 1400,
            image: "https://co.pinterest.com/pin/1092263715862611508/"
        },
    ]

    return (
        <div className="home-page">
            <nav className="nav-bar">
                <h1>MarketPlace</h1>
            </nav>
            <div className="products-section">
                <div className="products-header">
                    <span className="products-title">Productos</span>
                </div>
                <div className="products">
                    {products.map(product => (
                        <Product props={[product.id, product.image, product.name, product.price]} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
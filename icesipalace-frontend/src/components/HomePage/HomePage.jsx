import React from "react";
import "../../styles/HomePage/HomePage.css";
import Product from "./Product";

function HomePage() {

    const products = [
        {
            id: 1,
            name: "Producto 1",
            price: 100,
            image: "https://i.pinimg.com/564x/4e/a0/00/4ea000823256d5d66d6c56e4eef78a2a.jpg"
        },
        {
            id: 2,
            name: "Producto 2",
            price: 200,
            image: "https://i.pinimg.com/564x/de/fa/0b/defa0bcf93e4aee05081b74cf342b847.jpg"
        },
        {
            id: 3,
            name: "Producto 3",
            price: 300,
            image: "https://i.pinimg.com/564x/62/3f/8b/623f8b5d99a5427041cc9ece6df03481.jpg"
        },
        {
            id: 4,
            name: "Producto 4",
            price: 400,
            image: "https://i.pinimg.com/564x/c1/61/c8/c161c8eb9755205f66a499c50d807ead.jpg"
        },
        {
            id: 5,
            name: "Producto 5",
            price: 500,
            image: "https://i.pinimg.com/564x/b9/22/cb/b922cbc02e019ee9f58d6f67d5a6edda.jpg"
        },
        {
            id: 6,
            name: "Producto 6",
            price: 600,
            image: "https://i.pinimg.com/564x/03/63/4d/03634de058d23a4efb67ec362ebee93e.jpg"
        },
        {
            id: 7,
            name: "Producto 7",
            price: 700,
            image: "https://i.pinimg.com/564x/39/12/0c/39120c806b86c61a14ebdf41878b39e1.jpg"
        },
        {
            id: 8,
            name: "Producto 8",
            price: 800,
            image: "https://i.pinimg.com/564x/4a/95/72/4a9572d9e2c8cfca9ebea5c2b1a62f6c.jpg"
        },
        {
            id: 9,
            name: "Producto 9",
            price: 900,
            image: "https://i.pinimg.com/564x/91/08/1b/91081b133de9e32b41a3a837d9f55dc3.jpg"
        },
        {
            id: 10,
            name: "Producto 10",
            price: 1000,
            image: "https://i.pinimg.com/564x/be/3b/82/be3b8216e6363a9a2bcb2f7837aaec70.jpg"
        },
        {
            id: 11,
            name: "Producto 11",
            price: 1100,
            image: "https://i.pinimg.com/564x/95/79/3c/95793cedc284a3573914592c735e1eac.jpg"
        },
        {
            id: 12,
            name: "Producto 12",
            price: 1200,
            image: "https://i.pinimg.com/564x/6b/70/08/6b7008533f50115394db57c3a7e044ea.jpg"
        },
        {
            id: 13,
            name: "Producto 13",
            price: 1300,
            image: "https://i.pinimg.com/564x/06/4b/df/064bdf2e0ab7bdca425c42cc43305ead.jpg"
        },
        {
            id: 14,
            name: "Producto 14",
            price: 1400,
            image: "https://i.pinimg.com/564x/e7/0d/8b/e70d8b4270646bff47a291fec016ab53.jpg"
        },
    ]

    return (
        <div className="home-page">
            <nav className="nav-bar">
                <h1>MarketPlace</h1>
            </nav>
            <div className="products-section">
                <div className="products-header">
                    <span className="products-title">Sugerencias para ti</span>
                </div>
                <div className="products">
                    {products.map(product => (
                        <Product key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
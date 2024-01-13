import React from "react";
import "../../styles/HomePage/HomePage.css";
import Product from "./Product";

function HomePage() {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:8080/api/v1/post/list-all-post")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="home-page">
            <nav className="nav-bar">
                <span className="nav-bar-title">MarketPlace</span>
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
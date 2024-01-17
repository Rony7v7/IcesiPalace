import React from "react";
import "../../styles/HomePage/HomePage.css";
import Product from "../Post/Product";
import LeftSideNav from "./LeftSideNav";
import CreatePostForm from "../Post/CreateProductForm"
import DataAccess from "../../services/DataAccess";

function HomePage() {

    const [products, setProducts] = React.useState([]);
    const [searchResults, setSearchResults] = React.useState([]);

    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    const handleSearch = (results) => {
        setProducts(results)
    }

    React.useEffect(() => {
        DataAccess.queryAllPosts().then((posts) => {
            if (posts) {
                setProducts(posts);
            }
        })
    }, []);


    const createPostForm = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const handlePostExpansion = () => {
        console.log("expanded");
    }

    return (
        <div className="home-page">
            <LeftSideNav onClick={createPostForm} onSearchResult={handleSearch} />
            <div className="products-section">
                <div className="products-header">
                    <span className="products-title">Sugerencias para ti</span>
                </div>
                <CreatePostForm trigger={isPopupOpen} setTrigger={createPostForm} />
                <div className="products">
                    {products.map(product => (
                        <Product key={product.id} onClick={handlePostExpansion}{...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
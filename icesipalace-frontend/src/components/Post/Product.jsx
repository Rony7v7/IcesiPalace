import "../../styles/Product/Product.css";

function Product({ id, name, price, image, onClick }) {
    return (
        <div className="product" onClick={onClick}>
            <div className="product-image">
                <img src={image} alt="product" />
            </div>
            <div className="product-info">
                <div className="product-name">
                    <span>{name}</span>
                </div>
                <div className="product-price">
                    <span>$ {price}</span>
                </div>

            </div>
        </div>
    )
}

export default Product;
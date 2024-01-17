import React from 'react';
import "../../styles/Product/ProductExpanded.css";



export default function ProductExpanded(props) {

    return props.trigger ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-danger rounded-circle" onClick={() => props.setTrigger()}>X</button>
                </div>
                <div className="product-expanded">
                    <div className="product-expanded-image">
                        <img src={props.image} alt="product" />
                    </div>
                    <div className="product-expanded-info">
                        <div className="product-expanded-name">
                            <span>{props.name}</span>
                        </div>
                        <div className="product-expanded-price">
                            <span>$ {props.price}</span>
                        </div>
                        <div className="product-expanded-description">
                            <span>{props.description}</span>
                        </div>
                        <div className="product-expanded-category">
                            <span>{props.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}
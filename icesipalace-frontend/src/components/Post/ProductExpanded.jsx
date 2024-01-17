import React from 'react';
import "../../styles/Product/ProductExpanded.css";



export default function ProductExpanded(props) {

    return props.trigger ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-danger rounded-circle" onClick={() => props.setTrigger()}>X</button>
                </div>
                <div className="container text-center">

                    <div className='row align-items-start'>

                        <div className='col'>
                            <div className="product-expanded-image">
                                <img src={props.product.image} alt="product" />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="product-expanded-name">
                                <span>{props.product.name}</span>
                            </div>
                            <div className="product-expandend-userId">
                                <span>{props.product.userId}</span>
                            </div>
                            <div className="product-expanded-price">
                                <span>$ {props.product.price}</span>
                            </div>
                            <div className="product-expanded-description">
                                <span>{props.product.description}</span>
                            </div>
                            <div className="product-expanded-category">
                                <span>{props.product.category}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}
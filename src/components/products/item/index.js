import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartButton from '~c/products/button';

export default (props) => {

    const {title, image, price, backUrl, inCart, onAdd, onRemove} = props;
    return (
        <div className="row">
            <img src={image} className="col-4" />
            <div className="col-8">
                <Link to={backUrl}>Back to list</Link>
                <h1>{title}</h1>
                    
                <hr/>
                <div>
                    <strong>Price: {price}</strong> 
                </div>
                <p>Text about product</p>
                <CartButton inCart={inCart} onAdd={onAdd} onRemove={onRemove}/>
            </div>
        </div>
    );
}


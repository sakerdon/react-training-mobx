import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import {observer, inject} from 'mobx-react';
import CartButton from '~c/products/button';

@inject('stores') @observer class Products extends React.Component{
    render(){
        let productModel = this.props.stores.products;
        let cart = this.props.stores.cart;

        let productsCards = productModel.items.map((product) => {  
           
            return (<div className={'col col-6 ' + styles.col} key={product.id}>
                <Card>
                    <Card.Body className="row">

                        <Card.Img variant="top" className="col-5 p-0 pl-2" src={product.image} />
                        <div className="col-7 d-flex flex-column">
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <strong>Price: {product.price}</strong>
                            </Card.Text>
                            <Link className="mb-3 " to={urlBuilder('product', {id: product.id})}>
                                Get more...
                            </Link>
                            <CartButton inCart={cart.inCart(product.id)} 
                                        onAdd={() => cart.add(product.id)} 
                                        onRemove={() => cart.remove(product.id)}
                                        disabled={product.id in cart.processId}
                                        />
                        </div>
                    </Card.Body>
                </Card>
            </div>)
        });

        return (
            <div>
                <h1>Products page</h1>
                <div className="row">
                    {productsCards}
                </div>
                <hr/>
                <button className="btn btn-danger" onClick={() => 
                    this.props.stores.notifications.add(Math.random() + ' error!')
                }>
                    Test Error button
                </button>
            </div>
        );
    }
}

export default Products;
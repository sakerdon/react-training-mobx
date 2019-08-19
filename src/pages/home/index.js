import React from 'react';
import { Carousel } from 'react-bootstrap';
import {observer, inject} from 'mobx-react';

@inject('stores') @observer class Products extends React.Component{
    render(){

        let productModel = this.props.stores.products;

        let productSlide = productModel.items.map( product => {
            return (
              <Carousel.Item key={product.id} className="mb-3">
                <img
                  className="d-block col-6 m-auto"
                  src={product.image}
                  alt="Slide"
                />
                <Carousel.Caption className="position-static">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )

        }) 

        return (
            <div>
                <Carousel className="bg-secondary">
                {productSlide}
                </Carousel>

            </div>
        );
    }
}

export default Products;


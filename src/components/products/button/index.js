import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
    const {inCart, onRemove, onAdd, disabled} = props;

    if (inCart) {
        return <Button variant="danger" onClick={onRemove} disabled={disabled}>
        Remove from cart
    </Button>
    } else {
        return <Button variant="success" onClick={onAdd} disabled={disabled}>
        Add to cart
    </Button>
    }

}

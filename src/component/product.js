import React from "react";

import {ProductItem} from "../global";

import {useSelector, connect} from "react-redux";
import {Button, Card, Row} from "react-bootstrap";
import {add, store} from "../store";
import {addItemToCart} from "../redux/action/cartAction";

import FormImpl from "react-bootstrap/esm/Form";

const Product = () => {

    const products = useSelector((state: ProductItem[]) => state)
    return (
        <Row>
            {products.map((product: ProductItem) => (

                <Card style={{width: '18rem'}} className='ml-3 mt-2 p-2' border='warning'>

                    <Card.Link href="/productPage"
                               key={product.id}
                               disabled={product.added}
                               //onClick={() => store.dispatch(add(product))}
                               onClick={() => addItemToCart({product})}


                    >
                        <Card.Img variant="top" src={product.imageUrl1}/>
                    </Card.Link>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Brand: {product.brand}</Card.Text>
                        <Card.Text>Price: ${product.price}</Card.Text>
                        <Card.Text>Description: {product.description}
                        </Card.Text>
                        <Button variant="warning"
                                key={product.id}
                                disabled={product.added}
                                //onClick={() => store.dispatch(add(product))}
                                onClick={() => addItemToCart({product})}
                        >Add to cart
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    )
}


export default connect(null, {addItemToCart})(Product);

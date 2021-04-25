import React  from 'react';

import {Button, Card, CardDeck, Carousel, Container, Image} from 'react-bootstrap';
import {connect,useSelector} from "react-redux";
//import {add, store} from "../store";
import store from "../redux/combineReducer";
//import * as actions from '../redux/action/cartAction';
import {addItemToCart} from "../redux/action/cartAction";



const HomePage = (props) => {

    const productsInCart = useSelector(state => state.shoppingCartReducer);
    
    const product1 = {
        "name": "Camera",
        "brand": "CANNON",
        "price": "$600",
        "description": "CANNON EOS 80D DSLR CAMERA"
    }

    const product2 = {
        "name": "Mouse",
        "brand": "LOGITECH",
        "price": "$100",
        "description": "LOGITECH G-SERIES GAMING MOUSE"
    }

    const product3 = {
        "name": "Phone",
        "brand": "APPLE",
        "price": "$1000",
        "description": "IPHONE 11 PRO 256GB MEMORY"
    }

    const product4 = {
        "name": "Playstatio",
        "brand": "SONY",
        "price": "$500",
        "description": "SONY PLAYSTATION 4 PRO WHITE VERSION"

    }



    return (
        <Container fluid className='pt-5 '>

            <Carousel className='pt-lg-4'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/Amaz1-1.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/Amaz3-1.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
            </Carousel>
            <h2 className='m-3'>Shop by category</h2>
            <CardDeck className='m-1'>
                <Card className='border-warning'>
                    <Card.Body >
                        <Card.Title>Electronics</Card.Title>
                        <Card.Link href="/categoryPage">
                        <Card.Img variant="top" src="../images/Am3.jpg" />
                        </Card.Link>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body >
                </Card>
                <Card className=' border-warning'>
                    <Card.Body>
                        <Card.Title>Mobile Phones</Card.Title>
                        <Card.Link href="/category1Page">
                        <Card.Img variant="top" src="../images/Am6.jpg" />
                        </Card.Link>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
                <Card className=' border-warning'>
                    <Card.Body>
                        <Card.Title>Laptops</Card.Title>
                        <Card.Link href="/category2Page">
                        <Card.Img variant="top" src="../images/Am2.jpg" />
                        </Card.Link>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
                <Card  className='border-warning'>
                    <Card.Body>
                        <Card.Title>Tablets</Card.Title>
                        <Card.Link href="/category3Page">
                        <Card.Img variant="top" src="../images/tablet.jpg" />
                        </Card.Link>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
            </CardDeck>
            <Card.Link href="#">
            <Image className='m-2' src="../images/Amaz2.jpg" fluid />
            </Card.Link>


            <h2 className='m-3'>Latest Products</h2>
            <CardDeck className='m-1'>
                <Card border='warning' className='ml-3 mt-2 p-2'>
                    <Card.Link href="/productPage">
                            <Card.Img variant="top" src='../images/camera.jpg' />
                        </Card.Link>
                       <Card.Body>
                        <Card.Title>Camera</Card.Title>
                            <Card.Text>Brand: CANNON</Card.Text>
                            <Card.Text>Price: $600</Card.Text>
                            <Card.Text>Description: CANNON EOS 80D DSLR CAMERA
                            </Card.Text>
                           <Button variant="warning"
                                   onClick={() => props.addToCart(product1)}

                           >Add to cart
                           </Button>
                        </Card.Body>
                </Card>
                <Card border='warning' className='ml-3 mt-2 p-2'>
                    <Card.Link href="/productPage">
                        <Card.Img variant="top" src='../images/mouse.jpg' />
                    </Card.Link>
                    <Card.Body>
                        <Card.Title>Mouse</Card.Title>
                        <Card.Text>Brand: LOGITECH</Card.Text>
                        <Card.Text>Price: $100</Card.Text>
                        <Card.Text>Description:  LOGITECH G-SERIES GAMING MOUSE
                        </Card.Text>
                        <Button variant="warning"
                                onClick={() => props.addToCart(product2)}

                        >Add to cart
                        </Button>
                    </Card.Body>
                </Card>
                <Card border='warning' className='ml-3 mt-2 p-2'>
                    <Card.Link href="/productPage">
                        <Card.Img variant="top" src='../images/phone.jpg' />
                    </Card.Link>
                    <Card.Body>
                        <Card.Title>Phone</Card.Title>
                        <Card.Text>Brand: APPLE</Card.Text>
                        <Card.Text>Price: $1000</Card.Text>
                        <Card.Text>Description: IPHONE 11 PRO 256GB MEMORY
                        </Card.Text>
                        <Button variant="warning"
                                onClick={() => console.log(productsInCart)}
                        >Add to cart
                        </Button>
                    </Card.Body>
                </Card>
                <Card border='warning' className='ml-3 mt-2 p-2'>
                    <Card.Link href="/productPage">
                        <Card.Img variant="top" src="../images/playstation.jpg" />
                    </Card.Link>
                    <Card.Body>
                        <Card.Title>Playstation</Card.Title>
                        <Card.Text>Brand: SONY</Card.Text>
                        <Card.Text>Price: $500</Card.Text>
                        <Card.Text>Description: SONY PLAYSTATION 4 PRO WHITE VERSION
                        </Card.Text>
                        <Button variant="warning"
                                onClick={() => addItemToCart({product4})}
                        >Add to cart
                        </Button>
                    </Card.Body>
                </Card>


            </CardDeck>

        </Container>

    );
};

const mapDispatchtoProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch(addItemToCart({item}));
        }
    }
}

export default connect(null, mapDispatchtoProps)(HomePage);

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Header, Container, Button} from 'semantic-ui-react';

import NavBar from './NavBar';
import PizzaContainer from './PizzaContainer';
import {formatPrice} from "../helpers";

const Menu = (props) => (
    <Fragment>
        <NavBar order={props.order} orderTotal={props.orderTotal} changeCurrency={props.changeCurrency}
                currency={props.currency}>
            {props.orderTotal > 0 && <Button as={Link} to='/cart' color='teal' id='menu-checkout-btn'>Checkout</Button>}
        </NavBar>
        <Container id='page-container'>
            <Header as='h1' id='page-header'>Pizza Selection</Header>
            <Container textAlign='center' id='menu-free-banner'>
                <p id='menu-banner-text'>Free delivery for orders over {formatPrice(1200, props.currency)}</p>
            </Container>
            <Container id='menu-pizza-container'>
                <PizzaContainer addToOrder={props.addToOrder} currency={props.currency}/>
            </Container>
        </Container>
    </Fragment>
);

Menu.propTypes = {
    order: PropTypes.array,
    orderTotal: PropTypes.number,
    addToOrder: PropTypes.func.isRequired,
    changeCurrency: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired
};

export default Menu;

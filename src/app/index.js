import React from 'react';
import withStore from '~/hocs/withStore';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import routes, { routesMap } from '~/routes';
import Notifications from '~p/notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBook } from '@fortawesome/free-solid-svg-icons'

import {Navbar} from 'react-bootstrap';

class App extends React.Component{
    render(){
        let cart = this.props.stores.cart;

        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact} 
                          key={route.url}
                    />;
        });

        return (
        <Router>
            <Notifications/>

            <header className="mb-5">
                <Navbar bg="light" expand="lg">
                    <div className="container">
                        <NavLink to={routesMap.home} className="navbar-brand text-primary">
                        <FontAwesomeIcon icon={faBook} /> BestBookShop
                        </NavLink>

                        <NavLink to="/cart" className="nav-link ml-auto text-body">
                          <div className="text-right">
                              <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                              <sup className="badge badge-danger d-inline-flex"><small>{cart.cartCnt}</small></sup>
                          </div>
                              <div className="text-right">${cart.total}</div>
                        </NavLink>

                    </div>
                </Navbar>
            </header>


            <div className="container">
                <div className="row">
                    <div className="col col-3">
                        <div className="list-group">
                            <NavLink className="list-group-item list-group-item-action" to={routesMap.home} exact activeClassName="active">
                                Home
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action" to={routesMap.productList} exact activeClassName="active">
                                Catalog
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action" to={routesMap.cart} activeClassName="active">
                                Cart
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action" to={routesMap.order} activeClassName="active">
                                Order now
                            </NavLink>
                        </div>
                    </div>
                    <div className="col col-9">
                        <Switch>
                            {routesComponents}
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
        )
    }
}

export default withStore(App);
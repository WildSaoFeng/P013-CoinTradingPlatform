import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './MyNavbar.css';

class MyNavbar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">"繁星"协会积分交易系统</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Link Right
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link Right
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;
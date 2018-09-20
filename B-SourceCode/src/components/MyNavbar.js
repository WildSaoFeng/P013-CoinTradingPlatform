import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './MyNavbar.css';
import MyLogin from './MyLogin';
import MyRegister from './MyRegister';
import MyUserInfo from './MyUserInfo';

class MyNavbar extends Component {

    state = {
        hasLogined: false
    };


    render() {
        return (
            <Navbar style={{margin: 0}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">"繁星"协会积分交易系统</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        主页
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        简介
                    </NavItem>
                </Nav>

                <Nav pullRight>
                    {
                        !this.state.hasLogined &&
                            <NavItem eventKey={1} href="#">
                                <MyLogin/>
                            </NavItem>

                    }
                    {
                        !this.state.hasLogined &&
                            <NavItem eventKey={2} href="#">
                                <MyRegister/>
                            </NavItem>

                    }
                    {
                        this.state.hasLogined &&
                            <NavItem eventKey={1} href="#">
                                <MyUserInfo/>
                            </NavItem>
                    }
                </Nav>
            </Navbar>

        );
    }
}

export default MyNavbar;
import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './MyNavbar.css';
import MyLogin from './MyLogin';
import MyRegister from './MyRegister';
import MyUserInfo from './MyUserInfo';

class MyNavbar extends Component {

  state = {
    hasLogined: false,
    isAdmin: false,
    changedByProps: false,
  };

  transferMsg(newMsg) {
    this.setState({
      hasLogined: true
    });
    if (newMsg) {
      this.setState({
        isAdmin: true
      });
    }
  }

  // 安全退出
  transferLogOut() {
    this.setState({
      hasLogined: false,
      isAdmin: false
    });
    sessionStorage.clear();
  }

  // 读取本地存储的证书
  loadCertificate = () => {
    const cert = sessionStorage.getItem('auth');
    if (cert)
      this.transferMsg(true);
  };

  render() {
    // Change B
    if (!this.state.hasLogined)
      this.loadCertificate();
    // Change A
    if (!this.state.hasLogined && !this.state.changedByProps && this.props.hasSSO) {
      this.transferMsg(true);
      this.setState({ changedByProps: true });
    }

    return (
      <Navbar style={{ margin: 0 }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">"繁星"协会积分交易系统</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">
            主页
          </NavItem>
          {
            this.state.hasLogined &&
            <NavItem eventKey={2} href="/trade">
              我的交易
            </NavItem>
          }
          <NavItem eventKey={3} href="/trade">
            当前行情
          </NavItem>
          {
            this.state.hasLogined &&
            <NavItem eventKey={4} href="/data">
              管理员界面
          </NavItem>
          }
        </Nav>

        <Nav pullRight>
          {
            !this.state.hasLogined &&
            <NavItem eventKey={1} href="#">
              <MyLogin transferMsg={newMsg => this.transferMsg(newMsg)} />
            </NavItem>

          }
          {
            !this.state.hasLogined &&
            <NavItem eventKey={2} href="#">
              <MyRegister />
            </NavItem>

          }
          {
            this.state.hasLogined &&
            <NavItem eventKey={1} href="#">
              <MyUserInfo transferLogOut={() => this.transferLogOut()} />
            </NavItem>
          }
        </Nav>
      </Navbar>

    );
  }
}

export default MyNavbar;
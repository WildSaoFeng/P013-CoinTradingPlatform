import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';

import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router'; 
import { BrowserRouter } from 'react-router-dom'; 

import MyFooter from './components/MyFooter';

import HomePage from './components/pages/HomePage';
import TradePage from './components/pages/TradePage';
import DataPage from './components/pages/DataPage';

import { Modal, Popover, Button, notification, Icon, Avatar, Input, Checkbox, Form } from 'antd';
import 'antd/lib/icon/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/button/style/css';

const FormItem = Form.Item;

class App extends Component {

  state = {
    trySSO: false,
    hasSSO: false
  };

  handleSSO = () => {
    // console.log('Aha');
    this.setState({ trySSO: !this.state.trySSO });
  };

  handleSubmit = () => {
    Modal.success({
      title: '单点登录 验证成功！',
      content: '已从教务系统同步您的个人信息，自动完成社团系统注册'
    });
  };

  componentDidMount = () => {
    const output = this.props;
    console.log(output);
  };

  render() {

    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <div>
          <BrowserRouter>
            <div>
              <MyNavbar />
              <Route path='/' component={HomePage} exact />
              <Route path='/trade' component={TradePage}/>
              <Route path='/data' component={DataPage}/>
            </div>
          </BrowserRouter>
          <MyFooter />;
          <br />
          <a href={null}>单点登录入口</a>
        </div>
      </div>
    );
  }
}

export default App;

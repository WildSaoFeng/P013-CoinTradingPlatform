import React, { Component } from 'react';

import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import { Modal, Popover, Button, notification, Icon, Avatar, Input, Checkbox, Form } from 'antd';
import 'antd/lib/icon/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/button/style/css';

const FormItem = Form.Item;

class App extends Component {

  constructor() {
    super();
    this.updateBox1Change = this.updateBox1Change.bind(this);
    this.updateBox2Change = this.updateBox2Change.bind(this);
  }

  state = {
    hasLogined: false,
    box1: '',
    box2: '',
    cert: ''
  }

  updateBox1Change(evt) {
    this.setState({
      box1: evt.target.value
    });
  }

  updateBox2Change(evt) {
    this.setState({
      box2: evt.target.value
    });
  }

  handleSubmit = () => {
    console.log('yes!');
    console.log(this.state.box1, this.state.box2);
    axios({
      method: 'post',
      url: '/users',
      data: {
        username: this.state.box1,
        password: this.state.box2
      }
    }).then(res => {
      if(res.data.success) {
        this.setState({ hasLogined: true, cert: '/sso/'+res.data.cert });
        Modal.success({
          title: '单点登录 验证成功！',
          content: '已从教务系统同步您的个人信息，自动完成社团系统注册'
        });
      } else {
        Modal.error({
          title: '单点登录 验证失败！',
          content: '账户密码错误，请重新输入！'
        });
      }
    }).then(() => {
      
    });

  };

  render() {
    return (
      <div align="left">

        <p style={{
          paddingLeft: '180px',
          paddingTop: '45px',
          color: '#1069A4',
          fontFamily: 'microsoft YaHei',
          fontSize: '28px',
          lineHeight: '45px',
        }}> <Icon type='setting' /> <b>中央财经大学本科生教务系统</b></p>

        <Grid >
          <Row >
            <Col md={8} className="clear-padding-col">
              <img src="http://xuanke.cufe.edu.cn/zftal-ui-v5-1.0.2/assets/images/login_bg_pic.jpg" />
            </Col>
            <Col md={4} className="clear-padding-col">

              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  <b> 用户名</b>
                  <Input onChange={this.updateBox1Change} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />

                </FormItem>
                <FormItem>
                  <b> 密码</b>
                  <Input onChange={this.updateBox2Change} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

                </FormItem>
                <FormItem>

                  <Button onClick={this.handleSubmit}>提交</Button>
                </FormItem>
                <FormItem>
                  <a href={"localhost:8000"+this.state.cert}>
                    <Button disabled={!this.state.hasLogined}>转至繁星交易所网站</Button>
                  </a>
                </FormItem>
              </Form>

              <img src="http://xuanke.cufe.edu.cn/zftal-ui-v5-1.0.2/assets/images/login_ewm.gif" />

              <p> 用手机扫一扫,
                  安全、便捷登录
                        </p>

            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;

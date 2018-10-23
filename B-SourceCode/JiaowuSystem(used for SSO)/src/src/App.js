import React, { Component } from 'react';

import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';

import { Modal, Popover, Button, notification, Icon, Avatar, Input, Checkbox, Form } from 'antd';
import 'antd/lib/icon/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/button/style/css';

const FormItem = Form.Item;

class App extends Component {

    handleSubmit = () => {
        Modal.success({
            title: '单点登录 验证成功！',
            content: '已从教务系统同步您的个人信息，自动完成社团系统注册'
        });
        this.setState({
            // trySSO: !this.state.trySSO,
            // hasSSO: true,
        });
    };

  render() {
    return (
        <div align="left">

            <p style={{
                paddingLeft:'180px',
                paddingTop: '45px',
                color: '#1069A4',
                fontFamily: 'microsoft YaHei',
                fontSize: '28px',
                lineHeight: '45px',
            }}> <Icon type='setting'/> <b>中央财经大学本科生教务系统</b></p>

            <Grid >
                <Row >
                    <Col md={8} className="clear-padding-col">
                        <img src="http://xuanke.cufe.edu.cn/zftal-ui-v5-1.0.2/assets/images/login_bg_pic.jpg"/>
                    </Col>
                    <Col md={4} className="clear-padding-col">

                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                <b> 用户名</b>
                                <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />

                            </FormItem>
                            <FormItem>
                                <b> 密码</b>
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

                            </FormItem>
                            <FormItem>

                                <Button onClick={this.handleSubmit}>提交</Button>
                            </FormItem>
                            <FormItem>

                                <Button onClick={this.handleSubmit}>转至繁星交易所网站</Button>
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

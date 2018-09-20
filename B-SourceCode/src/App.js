import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import MyCandleGraph from './components/MyCandleGraph';
import MyNoticeBox from './components/MyNoticeBox';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import MyTable from "./components/MyTable";
import MyPendingTable from "./components/MyPendingOrderTable";
import MyHistoryTable from "./components/MyHistoryOrderTable";
import MyBuyBidBox from "./components/MyBuyBidBox";
import MySellBidBox from "./components/MySellBidBox";
import ContentPage from './components/ContentPage';
import MyFooter from './components/MyFooter';
import MyAdmin from './components/MyAdmin';
import MyAdmin2 from './components/MyAdmin2';
import MyAdmin3 from './components/MyAdmin3';





import {Modal, Popover, Button, notification, Icon, Avatar, Input, Checkbox, Form} from 'antd';
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
      this.setState({trySSO: !this.state.trySSO});
  };

  handleSubmit = () => {
      Modal.success({
          title: '单点登录 验证成功！',
          content: '已从教务系统同步您的个人信息，自动完成社团系统注册'
      });
      this.setState({
          trySSO: !this.state.trySSO,
          hasSSO: true,
      });
  };

  render() {

    return (
      <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />

            {
                !this.state.trySSO && <div>
                <MyNavbar hasSSO={this.state.hasSSO}/>

                <MyCarousel/>
                <Grid className="clear-margin">

                <Row>
                <ContentPage/>
                </Row>
                </Grid>
                <MyFooter/>;


                <Grid className="clear-margin">
                <Row className="clear-padding-row">
                <Col md={4} className="clear-padding-col">
                <MyNoticeBox/>
                <MyPendingTable/>
                <MyHistoryTable/>
                </Col>
                <Col md={8} className="clear-padding-col">
                <MyCandleGraph/>
                <Col md={6} className="clear-padding-col">
                <MyBuyBidBox/>
                </Col>
                <Col md={6} className="clear-padding-col">
                <MySellBidBox/>
                </Col>
                </Col>
                </Row>
                </Grid>

                <MyFooter/>;

                <Grid className="clear-margin">
                <Row className="clear-padding-row">
                <Col md={4} className="clear-padding-col">
                <MyNoticeBox/>
                </Col>
                <Col md={8} className="clear-padding-col">
                <MyCandleGraph/>
                </Col>
                </Row>
                </Grid>

                <MyFooter/>;
                <Grid className="clear-margin">
                <Row className="clear-padding-row">
                <Col md={4} className="clear-padding-col">
                <MyAdmin/>;
                </Col>
                <Col md={4} className="clear-padding-col">
                <MyAdmin2/>;
                </Col>
                <Col md={4} className="clear-padding-col">
                <MyAdmin3/>;
                </Col>
                </Row>
                </Grid>
                <MyFooter/>;

                    <br/>
                    <a onClick={this.handleSSO} href={null}>单点登录入口</a>

                </div>
            }



          {
              this.state.trySSO && <div align="left">

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
                              </Form>

                          </Col>
                      </Row>
                  </Grid>

              </div>
          }


      </div>
    );
  }
}

export default App;

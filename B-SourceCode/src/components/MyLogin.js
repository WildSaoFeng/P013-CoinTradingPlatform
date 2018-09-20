import { Modal, Button } from 'antd';
import 'antd/lib/modal/style/css';
import React from 'react';
import axios from 'axios';

import MyLoginChoose from './MyLoginChoose';

class MyLogin extends React.Component {
    state = {
        loading: false,
        visible: false,
        authType: 'pswd',
        box1: '',
        box2: '',
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });

        console.log(this.state.box1 + '==' + this.state.box2 + '--' + this.state.authType  );

        switch (this.state.authType) {
            case 'pswd':

                axios({
                    method: 'post',
                    url: '/users/authenticate/pswd',
                    data: {
                        username: this.state.box1,
                        password: this.state.box2
                    }
                }).then(res => {
                    console.log(res);
                    if(res.data.success) {
                        this.setState({ loading: false, visible: false }, () => {
                            this.props.transferMsg(true);
                            sessionStorage.setItem('auth', res.data['token']);
                            Modal.success({
                                title: '账户-密码 登录成功',
                                content: '请开始您的交易'
                            });
                        });
                    } else {
                        this.setState({ loading: false, visible: false });
                        Modal.error({
                            title: '登录失败',
                            content: res.data.msg
                        });
                    }
                }).catch(err => {
                    this.setState({ loading: false, visible: false });
                    console.log(err);
                    Modal.error({
                        title: '登录失败',
                        content: '网络连接失败，请检查链路状态！'
                    });
                });

                break;

            case 'mail':
                console.log('mail!!!');

            case 'message':
                console.log('message!!!');

            case 'solution':
                console.log('solution!!!');

                axios({
                    method: 'post',
                    url: '/users/authenticate/token',
                    data: {
                        username: this.state.box1,
                        password: this.state.box2,
                        token: 'R4%T'
                    }
                }).then(res => {
                    console.log(res);
                    if(res.data.success) {
                        this.setState({ loading: false, visible: false }, () => {
                            this.props.transferMsg(true);
                            sessionStorage.setItem('auth', res.data['token']);
                            Modal.success({
                                title: '登录成功',
                                content: '请开始您的交易'
                            });
                        });
                    } else {
                        this.setState({ loading: false, visible: false });
                        Modal.error({
                            title: '登录失败',
                            content: res.data.msg
                        });
                    }
                }).catch(err => {
                    this.setState({ loading: false, visible: false });
                    console.log(err);
                    Modal.error({
                        title: '登录失败',
                        content: '网络连接失败，请检查链路状态！'
                    });
                });

                break;
            default:
                break;
        }

    };

    handleMsg = () => {
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
            Modal.success({
                title: '短信-登录成功',
                content: '请开始您的交易'
            });
        }, 3500);
    };

    handleMail = () => {
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
            Modal.success({
                title: '邮件-登录成功',
                content: '请开始您的交易'
            });
        }, 4000);
    };

    handlePic = () => {
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
            Modal.success({
                title: '人脸识别-登录成功',
                content: '请开始您的交易'
            });
        }, 2000);
    };

    handleSec = () => {
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
            Modal.success({
                title: '密钥-登录成功',
                content: '请开始您的交易'
            });
        }, 1000);
    };

    transferMsg1(newMsg) {
        this.setState({
            box1: newMsg
        });
    }

    transferMsg2(newMsg) {
        this.setState({
            box2: newMsg
        });
    }

    transferType(newMsg) {
        this.setState({
            authType: newMsg
        });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible, loading } = this.state;
        return (
            <div>
                <div onClick={this.showModal}>
                    登录
                </div>
                <Modal
                    visible={visible}
                    title="欢迎登录"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={850}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk.bind(this)}>
                            Submit
                        </Button>,
                    ]}
                >
                    <MyLoginChoose transferType = {newMsg => this.transferType(newMsg)}
                                   transferMsg1 = {newMsg => this.transferMsg1(newMsg)}
                                   transferMsg2 = {newMsg => this.transferMsg2(newMsg)} />

                </Modal>
            </div>
        );
    }
}

// ReactDOM.render(<MyDialog />, mountNode);

export default MyLogin;


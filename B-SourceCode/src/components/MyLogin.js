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

        console.log(this.state.box1 + ' ' + this.state.box2 + ' ' + this.state.authType  );

        // axios.

        // setTimeout(() => {
        //     this.setState({ loading: false, visible: false });
        //     Modal.success({
        //         title: '登录成功',
        //         content: '请开始您的交易'
        //     });
        // }, 3000);
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


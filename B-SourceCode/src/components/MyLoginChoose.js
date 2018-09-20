import {Menu, Icon, Modal} from 'antd';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';

import React from 'react';
import MyLoginPswd from "./MyLoginPswd";
import MyLoginPhone from "./MyLoginPhone";
import MyLoginMail from "./MyLoginMail";
import MyLoginFace from "./MyLoginFace";
import MyLoginUdisk from "./MyLoginUdisk";
import MyLoginToken from "./MyLoginToken";

class MyLoginChoose extends React.Component {
    state = {
        current: 'pswd',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        this.props.transferType(this.state.current);
        // console.log(this.state.current);
    };

    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="pswd">
                        <Icon type="user" />账户-密码
                    </Menu.Item>
                    <Menu.Item key="mail">
                        <Icon type="mobile" />手机验证码
                    </Menu.Item>
                    <Menu.Item key="message">
                        <Icon type="mail" />邮件验证码
                    </Menu.Item>
                    <Menu.Item key="face">
                        <Icon type="camera" />人脸识别
                    </Menu.Item>
                    <Menu.Item key="udisk">
                        <Icon type="folder-open" />U盾识别
                    </Menu.Item>
                    <Menu.Item key="solution">
                        <Icon type="solution" />安全口令验证
                    </Menu.Item>
                </Menu>
                { this.state.current==='pswd' && <MyLoginPswd
                    transferMsg1 = {this.props.transferMsg1}
                    transferMsg2 = {this.props.transferMsg2}
                />}
                { this.state.current==='mail' && <MyLoginPhone/>}
                { this.state.current==='message' && <MyLoginMail/>}
                { this.state.current==='face' && <MyLoginFace/>}
                { this.state.current==='udisk' && <MyLoginUdisk/>}
                { this.state.current==='solution' && <MyLoginToken/>}

            </div>

        );
    }
}

export default MyLoginChoose;

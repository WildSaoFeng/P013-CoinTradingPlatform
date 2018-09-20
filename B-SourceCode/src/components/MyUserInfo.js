import React from 'react';

import { Popover, Button, notification, Icon, Avatar} from 'antd';
import 'antd/lib/notification/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/popover/style/css';

import QRCode from 'qrcode.react';

const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
        <b>导出私钥</b>
        <br/>
        <QRCode value="DaSaoFeng 666"/>
    </div>
);


class MyUserInfo extends React.Component {



    showRegister = () => {
        notification.open({
            message: '来自 野生大骚风 温馨提示',
            description: '这是社团内部系统，邀请码线下发放，暂不开放对外注册，敬请理解~',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    };

    render() {
        return (

            <div>
                <Avatar style={{ color: '#20716A', backgroundColor: '#ECE8D9' }}>骚</Avatar>
                <b>野生大骚风</b>
                <p>身份： 管理员</p>
                <Popover placement="bottomRight" title={text} content={content} trigger="click">
                    <Button>用户信息</Button>
                </Popover>
                <Popover placement="bottomRight" title={text} content={content} trigger="click">
                    <Icon type="setting" style={{ color: '#2C2828' }} />
                </Popover>
            </div>
        );
    }
}

export default MyUserInfo;
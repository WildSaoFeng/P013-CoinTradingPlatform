import React from 'react';

import { Button, notification, Icon, Avatar } from 'antd';
import 'antd/lib/notification/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/avatar/style/css';

class MyRegister extends React.Component {

    showRegister = () => {

        notification.open({
            message: '来自 野生大骚风 温馨提示',
            description: '这是社团内部系统，邀请码线下发放，暂不开放对外注册，敬请理解~',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    };

    render() {
        return (
            <div onClick={this.showRegister}>
                注册
            </div>
        );
    }
}

export default MyRegister;
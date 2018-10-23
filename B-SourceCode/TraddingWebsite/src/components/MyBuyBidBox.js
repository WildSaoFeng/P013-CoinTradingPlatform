import React from 'react';

import { Popover, Button, notification, Icon, Avatar, Input} from 'antd';
import 'antd/lib/notification/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/popover/style/css';

const Search = Input.Search;


class MyBuyBidBox extends React.Component {



    showRegister = () => {
        notification.open({
            message: '来自 野生大骚风 温馨提示',
            description: '这是社团内部系统，邀请码线下发放，暂不开放对外注册，敬请理解~',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    };

    render() {
        return (

            <Search
                placeholder="input starry price for buying 1 ticket "
                enterButton="Buy"
                size="large"
                onSearch={value => console.log(value)}
            />
        );
    }
}

export default MyBuyBidBox;
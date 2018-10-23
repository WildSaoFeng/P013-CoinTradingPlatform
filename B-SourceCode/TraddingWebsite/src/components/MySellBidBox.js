import React from 'react';

import { Popover, Button, notification, Icon, Avatar, Input} from 'antd';
import 'antd/lib/notification/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/popover/style/css';

const Search = Input.Search;


class MySellBidBox extends React.Component {

    render() {
        return (

            <Search
                placeholder="input starry price for selling 1 ticket "
                enterButton="Sell"
                size="large"
                onSearch={value => console.log(value)}
            />
        );
    }
}

export default MySellBidBox;
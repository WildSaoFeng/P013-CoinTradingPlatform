import React from 'react';

import { Popover, Button, notification, Avatar} from 'antd';
import 'antd/lib/notification/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/tooltip/style/css';

import { TagCloud ,Gauge, WaterWave, ChartCard, Field, MiniArea, MiniBar, MiniProgress, yuan } from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import { Row, Col, Icon, Tooltip } from 'antd';

import 'ant-design-pro/lib/Trend/style/css';
import 'ant-design-pro/lib/NumberInfo/style/css';
import 'ant-design-pro/lib/Charts/style/css';


import numeral from 'numeral';
import moment from 'moment';

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
    visitData.push({
        x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
    });
}

const tags = [];
for (let i = 0; i < 50; i += 1) {
    tags.push({
        name: `TagClout-Title-${i}`,
        value: Math.floor((Math.random() * 50)) + 20,
    });
}

class MyAdmin3 extends React.Component {


    showRegister = () => {
        notification.open({
            message: '来自 野生大骚风 温馨提示',
            description: '这是社团内部系统，邀请码线下发放，暂不开放对外注册，敬请理解~',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    };

    render() {
        return (
            <div style={{ textAlign: 'center' }}>

                <TagCloud
                    data={tags}
                    height={200}
                />
            </div>
        );
    }
}

export default MyAdmin3;
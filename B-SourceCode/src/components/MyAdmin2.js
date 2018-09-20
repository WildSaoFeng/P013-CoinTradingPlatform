import React from 'react';

import { Popover, Button, notification, Avatar} from 'antd';
import 'antd/lib/notification/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/tooltip/style/css';

import { ChartCard, Field, MiniArea, MiniBar, MiniProgress, yuan } from 'ant-design-pro/lib/Charts';
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


class MyAdmin2 extends React.Component {


    showRegister = () => {
        notification.open({
            message: '来自 野生大骚风 温馨提示',
            description: '这是社团内部系统，邀请码线下发放，暂不开放对外注册，敬请理解~',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    };

    render() {
        return (
            <Row>
                <Col span={24}>
                    <ChartCard
                        title="销售额"
                        action={
                            <Tooltip title="指标说明">
                                <Icon type="info-circle-o" />
                            </Tooltip>
                        }
                        total={() => (
                            <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
                        )}
                        footer={
                            <Field label="日均销售额" value={numeral(12423).format("0,0")} />
                        }
                        contentHeight={46}
                    >
        <span>
          周同比
          <Trend flag="up" style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}>
            12%
          </Trend>
        </span>
                        <span style={{ marginLeft: 16 }}>
          日环比
          <Trend
              flag="down"
              style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
          >
            11%
          </Trend>
        </span>
                    </ChartCard>
                </Col>
                <Col span={24} style={{ marginTop: 24 }}>
                    <ChartCard
                        title="移动指标"
                        avatar={
                            <img
                                style={{ width: 56, height: 56 }}
                                src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
                                alt="indicator"
                            />
                        }
                        action={
                            <Tooltip title="指标说明">
                                <Icon type="info-circle-o" />
                            </Tooltip>
                        }
                        total={() => (
                            <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
                        )}
                        footer={
                            <Field label="日均销售额" value={numeral(12423).format("0,0")} />
                        }
                    />
                </Col>
                <Col span={24} style={{ marginTop: 24 }}>
                    <ChartCard
                        title="移动指标"
                        avatar={
                            <img
                                alt="indicator"
                                style={{ width: 56, height: 56 }}
                                src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
                            />
                        }
                        action={
                            <Tooltip title="指标说明">
                                <Icon type="info-circle-o" />
                            </Tooltip>
                        }
                        total={() => (
                            <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
                        )}
                    />
                </Col>
            </Row>
        );
    }
}

export default MyAdmin2;
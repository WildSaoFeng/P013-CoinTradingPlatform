import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import './MyNoticeBox.css';

class MyNoticeBox extends Component {
    render() {
        return(
            <div>
                <h3> 繁星交易所 财富排行榜</h3>
                <ListGroup>
                    <ListGroupItem> 第1名 有想法的肥宅洲    20 Starry</ListGroupItem>
                    <ListGroupItem> 第2名 帅气的王子楠      18 Starry</ListGroupItem>
                    <ListGroupItem> 第3名 年轻有才的睡袋飞   15 Starry</ListGroupItem>
                    <ListGroupItem> 第4名 可怜的公主丰👸   0 Starry</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default MyNoticeBox;
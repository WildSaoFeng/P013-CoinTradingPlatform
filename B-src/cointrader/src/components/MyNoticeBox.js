import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import './MyNoticeBox.css';

class MyNoticeBox extends Component {
    render() {
        return(
            <div>
                <h3> Hello World!</h3>
                <ListGroup>
                    <ListGroupItem>1</ListGroupItem>
                    <ListGroupItem>2</ListGroupItem>
                    <ListGroupItem>3</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default MyNoticeBox;
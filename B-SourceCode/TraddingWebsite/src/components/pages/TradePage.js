import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import MyCandleGraph from '../MyCandleGraph';
import MyNoticeBox from '../MyNoticeBox';
import MyPendingTable from "../MyPendingOrderTable";
import MyHistoryTable from "../MyHistoryOrderTable";
import MyBuyBidBox from "../MyBuyBidBox";
import MySellBidBox from "../MySellBidBox";

class TradePage extends React.Component {

  render() {
    return (
      <div>
        <Grid className="clear-margin">
          <Row className="clear-padding-row">
            <Col md={4} className="clear-padding-col">
              <MyNoticeBox />
              <MyPendingTable />
              <MyHistoryTable />
            </Col>
            <Col md={8} className="clear-padding-col">
              <MyCandleGraph />
              <Col md={6} className="clear-padding-col">
                <MyBuyBidBox />
              </Col>
              <Col md={6} className="clear-padding-col">
                <MySellBidBox />
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TradePage;
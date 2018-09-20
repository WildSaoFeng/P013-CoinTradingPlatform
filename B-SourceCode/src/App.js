import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import MyCandleGraph from './components/MyCandleGraph';
import MyNoticeBox from './components/MyNoticeBox';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import MyTable from "./components/MyTable";
import MyPendingTable from "./components/MyPendingOrderTable";
import MyHistoryTable from "./components/MyHistoryOrderTable";
import MyBuyBidBox from "./components/MyBuyBidBox";
import MySellBidBox from "./components/MySellBidBox";


class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <MyNavbar/>
        <MyCarousel/>
        <Grid className="clear-margin">
          <Row className="clear-padding-row">
            <Col md={4} className="clear-padding-col">
              <MyNoticeBox/>
              <MyPendingTable/>
              <MyHistoryTable/>
            </Col>
            <Col md={8} className="clear-padding-col">
              <MyCandleGraph/>
                <Col md={6} className="clear-padding-col">
                    <MyBuyBidBox/>
                </Col>
                <Col md={6} className="clear-padding-col">
                    <MySellBidBox/>
                </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

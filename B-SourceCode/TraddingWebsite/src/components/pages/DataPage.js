import React from 'react';

import MyAdmin from '../MyAdmin';
import MyAdmin2 from '../MyAdmin2';
import MyAdmin3 from '../MyAdmin3';
import { Grid, Row, Col } from 'react-bootstrap';

class DataPage extends React.Component {

  render() {
    return (
      <div>
        <Grid className="clear-margin">
          <Row className="clear-padding-row">
            <Col md={4} className="clear-padding-col">
              <MyAdmin />;
            </Col>
            <Col md={4} className="clear-padding-col">
              <MyAdmin2 />;
            </Col>
            <Col md={4} className="clear-padding-col">
              <MyAdmin3 />;
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DataPage;
import React from 'react';

import MyCarousel from '../MyCarousel';
import ContentPage from '../ContentPage';
import { Grid, Row, Col } from 'react-bootstrap';
import * as qs from 'query-string';

class HomePage extends React.Component {

  componentDidMount() {
    const inputParams = this.props.location.search;
    if(inputParams != undefined) {
      const tokenSSO = qs.parse(inputParams);
      console.log(tokenSSO);
    }    
  }

  render() {
    return (
      <div>
        <MyCarousel />
        <Grid className="clear-margin">
          <Row>
            <ContentPage />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
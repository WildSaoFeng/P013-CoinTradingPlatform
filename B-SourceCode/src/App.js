import React, { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import MyCandleGraph from './components/MyCandleGraph';
import MyNoticeBox from './components/MyNoticeBox';
import './App.css';
import MyTable from "./components/MyTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <MyNavbar/>
        <MyCarousel/>
        <MyCandleGraph/>
        <MyNoticeBox/>
        <MyTable/>
      </div>
    );
  }
}

export default App;

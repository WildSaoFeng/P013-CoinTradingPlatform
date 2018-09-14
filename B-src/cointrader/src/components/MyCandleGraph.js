import React, { Component } from 'react';
import Chart from './Chart';
import './MyCandleGraph.css';

import { TypeChooser } from "react-stockcharts/lib/helper";

import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

class MyCandleGraph extends Component {

    parseData(parse) {
        return function(d) {
            d.date = parse(d.date);
            d.open = +d.open;
            d.high = +d.high;
            d.low = +d.low;
            d.close = +d.close;
            d.volume = +d.volume;

            return d;
        };
    }

    parseDate = timeParse("%Y-%m-%d");

    getData() {
        const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
            .then(response => response.text())
            .then(data => tsvParse(data, this.parseData(this.parseDate)))
        return promiseMSFT;
    }

    componentDidMount() {
        this.getData().then(data => {
            this.setState({data})
        })
    }

    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <div
                style={{
                    backgroundColor: '#303030'
                }}>
                <TypeChooser>
                    {type => <Chart type={type} data={this.state.data} />}
                </TypeChooser>
            </div>
        );
    }
}

export default MyCandleGraph;

import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';

import { TypeChooser } from "react-stockcharts/lib/helper";

import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
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

const parseDate = timeParse("%Y-%m-%d");

function getData() {
    const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
        .then(response => response.text())
        .then(data => tsvParse(data, parseData(parseDate)))
    return promiseMSFT;
}

class MyCandleGraph extends React.Component {
    componentDidMount() {
        getData().then(data => {
            this.setState({ data })
        })
    }
    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <div
                // style={{ backgroundColor: '#303030'}}
            >
                <TypeChooser>
                    {type => <Chart type={type} data={this.state.data} />}
                </TypeChooser>
            </div>
        );
    }
}

export default MyCandleGraph;

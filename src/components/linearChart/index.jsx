import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    showBorder: "0",
    canvasbgColor: "#FFFFFFF",
    bgColor: "#FFFFFF",
    drawanchors: "0",
    showvalues: "0",
    showAlternateHGridColor: "0",
    canvasBorderThickness: "0",
    xAxisPosition: "none",
    yAxisPosition: "none",
    theme: "fusion"
  },
  data: [
    {
      label: "2007",
      value: "1380000"
    },
    {
      label: "2008",
      value: "1450000"
    },
    {
      label: "2009",
      value: "1610000"
    },
    {
      label: "2010",
      value: "1540000"
    }
  ]
};

export default class linearChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="area2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

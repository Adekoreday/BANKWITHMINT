
import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    showBorder: "0",
    canvasBgAngle: "90",
    canvasBgRatio: "40,60",
    bgColor: "#FFFFFF",
    showAlternateHGridColor: "0",
    canvasBorderThickness: "0",
    showvalues: "0",
    xAxisPosition: "top",
    showYAxisValues: "0",
    scrollshowbuttons: "0",
    showCanvasBorder: "0",
    canvasBorderColor: "#FFFFFF",
    borderAlpha: '0',
    theme: "fusion",
    bgColor: "#FFFFFF",
    theme: "gammel",
    usePlotGradientColor: "1",
    plotGradientColor: "#ffffff",
    showPlotBorder: "0",
    plotFillColor: "A1D2FB",
    adjustDiv: "0",
    plotFillAngle: "90",
    showPlotBorder: "0",
    showAlternateHGridColor: "0",
    numVDivLines: "5",
    vDivLineColor: "#A1D2FB",
    vDivLineThickness: "2",
    divlinedashed: "0",
    divLineColor: "#FFFFFF",
    divLineAlpha: "60",
    divLineDashed: "0",
    caption: "Today: 5, Aug, 2018",
    captionFontSize: "12",
    captionFontBold: "0",
    captionAlignment: "left"
  },
  data: [
    {
      label: "Jan",
      value: "08876",
      color:  ""
    },
    {
      label: "Feb",
      value: "145000"
    },
    {
      label: "Mar",
      value: "1610000"
    },
    {
      label: "Apr",
      value: "0887600"
    },
    {
      label: "May",
      value: "1480000"
    },
    {
      label: "Jun",
      value: "1573000"
    }
  ]
};

export default class LinearChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="area2d"
        dataFormat="JSON"
        width="43%"
        dataSource={dataSource}
      />
    );
  }
}
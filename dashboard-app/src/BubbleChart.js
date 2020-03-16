
import React from 'react';
import Chart from "react-apexcharts";

class BubbleChart extends React.Component {
    
    constructor(props) {
      super(props);

      
      this.state = {
      
        series: [{
          name: 'Team A',
          data: [[2010,1, 5],[2011,2,4],[2012,3, 5],
          [2013,4,7],[2014,5,7],[2015,6,10],[2014,7,5],
          [2015,8,10],[2016,9,10],[2017,10,11],[2018,11,11],[2019,12,11]]
        },
        {
            name: 'Team B',
            data: [[2015,1,10],[2014,2,5],
          [2015,3,10],[2016,4,10],[2017,5,11],[2018,6,11],[2019,7,11]]
          },
          {
            name: 'Team C',
            data: [[2018,1,11],[2019,2,11]]
          },
        {
            name: 'Team D',
            data: [[2019,1,11]]
          }
        ],
        options: {
          chart: {
              height: 350,
              type: 'bubble',
          },
          dataLabels: {
              enabled: false
          },
          fill: {
              opacity: 0.8
          },
          title: {
              text: 'Team - Experience - Size'
          },
          xaxis: {
              tickAmount: 12,
              type: 'category',
          },
          yaxis: {
              max: 10
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          
            <Chart options={this.state.options} series={this.state.series} type="bubble" height={350} />
        </div>
          
      );
    }
  }

  export default BubbleChart;

import React from 'react';
import Chart from "react-apexcharts";

class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['.Net', 'Tableau', 'Java', 'Analytics', 'Tibco'],
          title: {
            text: 'Technology spread',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '15px',
              fontWeight:  'bold',
              fontFamily:  'arial',
              color:  '#263238'
            }
        },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
            legend: {
                position: 'bottom'
              }
            }
          }]
        }
      
      
      };
    }

  

    render() {
      return (
        <div>
            <Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
          </div>
         
      );
    }
  }

  

  export default PieChart;
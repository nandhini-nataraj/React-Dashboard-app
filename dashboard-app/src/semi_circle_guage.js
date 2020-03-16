
import React from 'react';
import Chart from "react-apexcharts";

class SemiCircleGuageChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            
            series: [76],
            options: {
              chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                  track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                    }
                  },
                  dataLabels: {
                    name: {
                      show: false
                    },
                    value: {
                      offsetY: -2,
                      fontSize: '22px'
                    }
                  }
                }
              },
              grid: {
                padding: {
                  top: -10
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  shadeIntensity: 0.4,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 53, 91]
                },
              },
              labels: ['Average Results'],
              title: {
                text: '',
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
            }
            },
          
          
          };
        }

      

        render() {
          return (
            <div>
              <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="radialBar" />
              </div>
              <div id="html-dist"></div>
            </div>
          );
        }
      }

export default SemiCircleGuageChart;
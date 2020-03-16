import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.scss';
import App from './App';
import PieChart from './pie';
import SemiCircleGuageChart from './semi_circle_guage';
import TablePage from './TablePage';

import * as serviceWorker from './serviceWorker';
import BubbleChart from './BubbleChart';

//ReactDOM.render(<App />, document.getElementById('root'));
//const domContainer = document.querySelector('#app');
//ReactDOM.render(<App />, document.getElementById('root'));
const techCompChartContainer = document.querySelector('#techCompChart');
ReactDOM.render(<PieChart/>, techCompChartContainer);
const AssoCompChartContainer1 = document.querySelector('#AssoCompChart1');
ReactDOM.render(<SemiCircleGuageChart/>, AssoCompChartContainer1);

const AssoCompChartContainer2 = document.querySelector('#AssoCompChart2');
ReactDOM.render(<SemiCircleGuageChart loc='Offshore Competency'/>, AssoCompChartContainer2);

const TeamsContainer = document.querySelector('#Teams');
ReactDOM.render(<BubbleChart />, TeamsContainer);

const TeamCompetencyTableContainer = document.querySelector('#TeamCompetencyTable');
ReactDOM.render(<TablePage />, TeamCompetencyTableContainer);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

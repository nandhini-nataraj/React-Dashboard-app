https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
To install Node: https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm
Bootstrap: https://create-react-app.dev/docs/adding-bootstrap

you should have Node.js and npm correctly installed on your machine
node --version
npm --version

npm config set fund=false


To create react application:
============
npm install -g create-react-app
npx create-react-app dashboard-app

cd dashboard-app
npm start

npm i react-charts --save
npm i react-chartjs-2
npm install --save react-apexcharts apexcharts

To install bootstrap
====================
npm install --save bootstrap

to import & override default bootstrap styles:
===================
npm install --save node-sass
create a file called src/custom.scss and import the Bootstrap source stylesheet. 
Add any overrides before the imported file(s). 
You can reference Bootstrap's documentation for the names of the available variables.
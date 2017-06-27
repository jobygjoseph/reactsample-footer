const ReactDOMServer = require('react-dom/server');
const React = require('react');
const express = require('express');
const App = require('./src/app');
const readFileSync = require('fs').readFileSync;

const content = ReactDOMServer.renderToString(<App />);

const app = express();
const file = readFileSync(`${__dirname}/lib/app.js`);

app.get('/application.js', (req, res) => {
  res.send(file);
});

app.get('*', (req, res) => {
  res.send(`
    <html>
      <head>
        <link href="http://www.nbcnews.com/rassets/application.50bbd251.css" rel="stylesheet">
        <script src="./application.js"></script>
        <style>
          footer {
            display: flex;
            justify-content: space-between;
            margin-top: 33px;
            border-top: 3px solid;
            padding-top: 10px;
          }
          .brand-links li {
            float: left;
            margin-left: 20px;
          }
        </style>
      </head>
      <body>
        <h2>Article Body</h2>
        <div id="app">${content}</div>
        <script>
          (function() {
            var el = document.getElementById('app');
            ReactDOM.render(React.createElement(App), el);
          })();
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log('REACT APP RUNNING'));

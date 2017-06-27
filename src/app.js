const React = require('react');
const ReactDOM = require('react-dom');
const Copyright = require('./components/Copyright');
const Logo = require('./components/Logo');
const Links = require('./components/Links');
const BrandLinks = require('./components/BrandLinks');

class App extends React.Component {
  constructor() {
    super();
    // ALL THE FOOTER DATA
  }

  render() {
    return (
      <footer>
        <h2>DA FOOTER</h2>
        <Logo />
        <Copyright name="nbcnews.com" />
        <Links currentUrl="/aboutus.html" />
        <BrandLinks />
      </footer>
    )
  }
}

if (typeof window !== 'undefined') {
  window.App = App;
  window.React = React;
  window.ReactDOM = ReactDOM;
}

module.exports = App;

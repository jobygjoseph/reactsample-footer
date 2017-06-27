const React = require('react');
const ReactDOM = require('react-dom');
const Copyright = require('./components/Copyright');
const Logo = require('./components/Logo');
const Links = require('./components/Links');
const BrandLinks = require('./components/BrandLinks');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <footer>
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

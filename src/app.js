const React = require('react');
const ReactDOM = require('react-dom');
const Copyright = require('./components/Copyright');
const Logo = require('./components/Logo');
const Links = require('./components/Links');
const FeatureLinks = require('./components/FeatureLinks');

class App extends React.Component {
  render() {
    return (
      <footer>
        <h2>DA FOOTER</h2>
        <Logo />
        <Copyright name="nbcnews.com" />
        <Links currentUrl="/aboutus.html" />
        <FeatureLinks />
      </footer>
    )
  }
}

module.exports = App;

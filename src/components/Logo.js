const React = require('react');

class Logo extends React.Component {
  getSiteLogo() {
    return <img src="https://media.sailthru.com/5cj/1k1/6/k/59493e8978575.jpg" width="222" frameBorder="0" height="30" alt="logo-leftfield-222x30"/>
  }

  render() {
    return <span><a href="http://www.nbcnews.com">{this.getSiteLogo()}</a></span>
  }
}

module.exports = Logo;
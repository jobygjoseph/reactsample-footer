const React = require('react');

class Logo extends React.Component {
  getSiteLogo() {
    return <img src="http://sslnodeassets.nbcnews.com/cdnassets/projects/site-images/nbcnews-logo-white.png" alt="NBC NEWS"/>
  }

  render() {
    return <span><a href="http://www.nbcnews.com">{this.getSiteLogo()}</a></span>
  }
}

module.exports = Logo;
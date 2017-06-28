const React = require('react');

class Logo extends React.Component {
  constructor() {
    super();
    this.getSiteLogo = this.getSiteLogo.bind(this);
  }
  
  getSiteLogo() {
    return <img src={this.props.brandImage} alt="NBC NEWS"/>
  }

  render() {
    return <span><a href="http://www.nbcnews.com">{this.getSiteLogo()}</a></span>
  }
}

module.exports = Logo;
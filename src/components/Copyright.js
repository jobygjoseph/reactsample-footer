const React = require('react');

class Copyright extends React.Component {
  render() {
    return <span className="copyright">&copy; {new Date().getFullYear()} {this.props.name || 'Joby'}</span>
  }
}

module.exports = Copyright;
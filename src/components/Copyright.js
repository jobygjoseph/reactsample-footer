const React = require('react');

class Copyright extends React.Component {
  render() {
    return <span>&copy; {new Date().getFullYear()} {this.props.name || 'Joby'}</span>
  }
}

module.exports = Copyright;
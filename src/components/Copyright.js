const React = require('react');

export default class Copyright extends React.Component {
  render() {
    return <span className="copyright">&copy; {new Date().getFullYear()} {this.props.currentBrand || 'Joby'}</span>
  }
}

const React = require('react');

export default class Copyright extends React.Component {
  render() {
    return <div className="copyright">&copy; {new Date().getFullYear()} {this.props.currentBrand || 'Joby'}</div>
  }
}

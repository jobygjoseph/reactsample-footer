const React = require('react');

class Links extends React.Component {
  componentDidMount() {
    console.log('MOUNTED!');
  }

  render() {
    const { brandLinks } = this.props;
    const allLinks = brandLinks
      .map((lk, ind) => <li key={ind}><a href={lk.href}>{lk.display}</a></li>);
    return <ul>{ allLinks }</ul>
  }
}

module.exports = Links;

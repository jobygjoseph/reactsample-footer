const React = require('react');

export default class Links extends React.Component {
  componentDidMount() {
    console.log('MOUNTED!');
  }

  render() {
    const { links } = this.props;
    const allLinks = links
      .map((lk, ind) => <li key={ind}><a href={lk.href}>{lk.display}</a></li>);
    return <ul>{ allLinks }</ul>
  }
}

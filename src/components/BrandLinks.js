const React = require('react');

class BrandLinks extends React.Component {
  render() {
    const fLinks = [
      {
        href: 'http://cnbc.com/',
        imageUrl: '',
      },
      {
        href: 'http://msnbc.com',
        imageUrl: '',
      },
      {
        href: 'http://www.today.com',
        imageUrl: '',
      },
      {
        href: 'http://xfinity.com',
        imageUrl: '',
      },
    ];

    const jsxLinks = fLinks.map((lk,ind) => <li key={ind}><a href={lk.href}><img src={lk.imageUrl}/></a></li>);

    return <ul>{ jsxLinks }</ul>
  }
}


module.exports = BrandLinks;
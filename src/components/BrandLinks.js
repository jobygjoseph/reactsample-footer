const React = require('react');

class BrandLinks extends React.Component {
  render() {
    const fLinks = [
      {
        href: 'http://cnbc.com/',
        imageUrl: 'https://media.sailthru.com/5cj/1k1/6/7/59381576227a9.jpg',
      },
      {
        href: 'http://msnbc.com',
        imageUrl: 'https://media.sailthru.com/5cj/1k1/6/7/59381591c7249.jpg',
      },
      {
        href: 'http://www.today.com',
        imageUrl: 'https://media.sailthru.com/5cj/1k1/6/7/593815a78a443.jpg',
      },
      {
        href: 'http://xfinity.com',
        imageUrl: 'https://media.sailthru.com/5cj/1k1/6/7/593815d52f916.jpg',
      },
    ];

    const jsxLinks = fLinks.map((lk,ind) => <li key={ind}><a href={lk.href}><img src={lk.imageUrl}/></a></li>);

    return <ul>{ jsxLinks }</ul>
  }
}


module.exports = BrandLinks;
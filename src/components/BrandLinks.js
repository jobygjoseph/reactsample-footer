const React = require('react');

class BrandLinks extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    const clickedBrand = e.target.parentElement.dataset.brand || 'nbcnews'
    this.props.updateBrand(clickedBrand);
  }
  
  render() {
    const fLinks = [
      {
        brand: 'cnbc',
        href: 'http://cnbc.com/',
        imageUrl: 'https://media.sailthru.com/5cj/1k1/6/7/59381576227a9.jpg',
      },
      {
        brand: 'msnbc',
        href: 'http://msnbc.com',
        imageUrl: 'https://media.sailthru.com/5cj/1k1/6/7/59381591c7249.jpg',
      },
      {
        brand: 'today',
        href: 'http://www.today.com',
        imageUrl: 'https://media.sailthru.com/5cj/1k1/6/7/593815a78a443.jpg',
      },
      {
        brand: 'nbcnews',
        href: 'http://xfinity.com',
        imageUrl: 'https://media.sailthru.com/5cj/1k1/6/7/593815d52f916.jpg',
      },
    ];

    const jsxLinks = fLinks.map((lk,ind) => (
        <li key={ind}>
          <a href={lk.href} onClick={this.clickHandler} data-brand={lk.brand}>
            <img src={lk.imageUrl}/>
          </a>
        </li>
      )
    );
    return <ul className="brand-links">{ jsxLinks }</ul>
  }
}


module.exports = BrandLinks;
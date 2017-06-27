const React = require('react');

class Links extends React.Component {
  componentDidMount() {
    console.log('MOUNTED!');
  }

  constructor() {
    super();
    this.state = {
      links: [{
          href: '/aboutus.html',
          display: 'ABOUT US'
        },
        {
          href: '/careers.html',
          display: 'CAREERS'
        },
        {
          href: '/contactus.html',
          display: 'CONTACT'
        },
        {
          href: '/privaypolicy.html',
          display: 'PRIVACY POLICY'
        },
        {
          href: '/termsofservice.html',
          display: 'TERMS OF SERVICE'
        },
        {
          href: '/sitemap.html',
          display: 'NBCNEWS SITE MAP'
        }]
    }
  }

  render() {
    const { links } = this.state;
    const allLinks = links
      .filter(lk => lk.href !== this.props.currentUrl)
      .map((lk, ind) => <li key={ind}><a href={lk.href}>{lk.display}</a></li>);
    return <ul>{ allLinks }</ul>
  }
}

module.exports = Links
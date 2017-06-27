const React = require('react');
const ReactDOM = require('react-dom');
const Copyright = require('./Copyright');
const Logo = require('./Logo');
const Links = require('./Links');
const BrandLinks = require('./BrandLinks');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
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
        }
      ],
      logo: 'http://sslnodeassets.nbcnews.com/cdnassets/projects/site-images/nbcnews-logo-white.png',
      site: 'nbcnews',
    }
  }

  render() {
    return (
      <footer>
        <Logo />
        <Copyright name="nbcnews.com" />
        <Links currentUrl="/aboutus.html" />
        <BrandLinks />
      </footer>
    )
  }
}

if (typeof window !== 'undefined') {
  window.App = App;
  window.React = React;
  window.ReactDOM = ReactDOM;
}

if (typeof module !== 'undefined') {
  module.exports = App;
}

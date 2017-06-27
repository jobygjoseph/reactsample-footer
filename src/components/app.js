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
      currentUrl: '/',
      currentBrand: 'nbcnews',
      brandData: {
        nbcnews: {
          logo: 'http://sslnodeassets.nbcnews.com/cdnassets/projects/site-images/nbcnews-logo-white.png',
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
          name: 'NBC News',
        },
        msnbc: {
          logo: 'http://www.msnbc.com/sites/msnbc/themes/leanforward/images/site-header/msnbc-logo-small.png',
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
          name: 'MSNBC',
        },
        cnbc: {
          logo: 'http://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc-hdr-logo2.png',
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
          name: 'CNBC',
        },
        today: {
          logo: 'https://nodeassets.today.com/cdnassets/today-images/show-header-logo.png',
          links: [
            {
              href: '/today-aboutus.html',
              display: 'ABOUT TODAY'
            },
            {
              href: '/today-careers.html',
              display: 'CAREERS @ Today'
            },
            {
              href: '/today-contactus.html',
              display: 'CONTACT Today'
            },
            {
              href: '/today-privaypolicy.html',
              display: 'Today: PRIVACY POLICY'
            },
            {
              href: '/today-termsofservice.html',
              display: 'Today: TERMS OF SERVICE'
            },
            {
              href: '/today-sitemap.html',
              display: 'Today SITE MAP'
            }
          ],
          name: 'Today',
        },
      }
    }
    this.updateBrand = this.updateBrand.bind(this);
  }

  componentDidMount() {
    this.setState({currentUrl: window.location.pathname});
  }

  updateBrand(brand) {
    this.setState({currentBrand: brand});
  }

  render() {
    return (
      <footer>
        <Logo />
        <Copyright name="nbcnews.com" />
        <Links currentUrl="/aboutus.html" />
        <BrandLinks updateBrand={this.updateBrand} />
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

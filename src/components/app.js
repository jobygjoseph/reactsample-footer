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
          displayName: 'NBC News',
        },
        msnbc: {
          logo: 'http://www.msnbc.com/sites/msnbc/themes/leanforward/images/site-header/msnbc-logo-small.png',
          links: [
            {
              href: '/msnbc-aboutus.html',
              display: 'MSNBC ABOUT US'
            },
            {
              href: '/msnbc-careers.html',
              display: 'MSNBC CAREERS'
            },
            {
              href: '/msnbc-contactus.html',
              display: 'MSNBC CONTACT'
            },
            {
              href: '/msnbc-privaypolicy.html',
              display: 'MSNBC PRIVACY POLICY'
            },
            {
              href: '/msnbc-termsofservice.html',
              display: 'MSNBC TERMS OF SERVICE'
            },
            {
              href: '/msnbc-sitemap.html',
              display: 'MSNBC NBCNEWS SITE MAP'
            }
          ],
          displayName: 'MSNBC',
        },
        cnbc: {
          logo: 'http://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc-hdr-logo2.png',
          links: [
            {
              href: '/cnbc-aboutus.html',
              display: 'CNBC ABOUT US'
            },
            {
              href: '/cnbc-careers.html',
              display: 'CNBC CAREERS'
            },
            {
              href: '/cnbc-contactus.html',
              display: 'CNBC CONTACT'
            },
            {
              href: '/cnbc-privaypolicy.html',
              display: 'CNBC PRIVACY POLICY'
            },
            {
              href: '/cnbc-termsofservice.html',
              display: 'CNBC TERMS OF SERVICE'
            },
            {
              href: '/cnbc-sitemap.html',
              display: 'CNBC  SITE MAP'
            }
          ],
          displayName: 'CNBC',
        },
        today: {
          logo: 'https://nodeassets.today.com/cdnassets/today-images/show-header-logo.png',
          links: [
            {
              href: '/today-aboutus.html',
              display: 'TODAY ABOUT US'
            },
            {
              href: '/today-careers.html',
              display: 'TODAY CAREERS'
            },
            {
              href: '/today-contactus.html',
              display: 'TODAY CONTACT US'
            },
            {
              href: '/today-privaypolicy.html',
              display: 'TODAY PRIVACY POLICY'
            },
            {
              href: '/today-termsofservice.html',
              display: 'TODAY TERMS OF SERVICE'
            },
            {
              href: '/today-sitemap.html',
              display: 'TODAY SITE MAP'
            }
          ],
          displayName: 'TODAY',
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
        <Logo brandImage={this.state.brandData[this.state.currentBrand].logo} />
        <Copyright currentBrand={this.state.brandData[this.state.currentBrand].displayName} />
        <Links brandLinks={this.state.brandData[this.state.currentBrand].links} />
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

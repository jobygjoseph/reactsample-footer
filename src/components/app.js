import React from 'react';
import ReactDOM from 'react-dom';
import Copyright from './Copyright';
import Logo from './Logo';
import Links from './Links';
import BrandLinks from './BrandLinks';
import initialState from '../initialState.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
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
        <div>
          <Logo brandImage={this.state.brandData[this.state.currentBrand].logo} />
          <Copyright currentBrand={this.state.brandData[this.state.currentBrand].displayName} />
        </div>
        <Links links={this.state.brandData[this.state.currentBrand].links} />
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

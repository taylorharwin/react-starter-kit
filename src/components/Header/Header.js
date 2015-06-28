/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
// import Link from '../../utils/Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
            <span className="Header-brandTxt">Jill and Taylors Wedding</span>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
            <p className="Header-bannerDesc">November 14, 2015</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;

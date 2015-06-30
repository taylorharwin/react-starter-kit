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
        <Navigation className="Header-nav" />
        <div className="Header-container">
       
          <div className="Header-banner">
            
          </div>
        </div>
         <div className="subHead">
            <div>Jill and Taylor&#39;s Wedding </div>
            <div>November 14, 2015</div>
            <div>PDX</div>
        </div>
      </div>
    );
  }

}

export default Header;

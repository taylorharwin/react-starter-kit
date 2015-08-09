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
        <Navigation
        path={this.props.path} 
        className="Header-nav" />
       
          <div className="Header-banner">
            
          </div>
        </div>
         <div className="subHead">
            
        </div>
      </div>
    );
  }

}

export default Header;

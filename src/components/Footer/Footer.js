/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Footer.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withViewport
@withStyles(styles)
class Footer {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
  

    return (
      <div className="Footer">
        <div className="Footer-container">
          <span className="Footer-text">A Harderwood Production</span>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/" onClick={Link.handleClick}>Wedding Details</a>
          <span className="Footer-spacer">|</span>
          <a className="Footer-link" href="/recs" onClick={Link.handleClick}>Portland Recommendations</a>
          <span className="Footer-spacer">·</span>
        </div>
      </div>
    );
  }

}

export default Footer;

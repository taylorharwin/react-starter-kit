/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class Navigation {


  static propTypes = {
    className: PropTypes.string,
    path: PropTypes.string
  };

  getActive = function(path){
    var output = "Navigation-link"
    if (path){
      output += " Navigation-activeLink"
    }
    return output
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
      <span className="Navigation-links">
        <a className={this.getActive(this.props.path == "/")} href="/" onClick={Link.handleClick}>
           <span className="Navigation-img"> @
          </span>
        Connect</a>
           <img className="Navigation-cat" 
        src="https://s.yimg.com/fz/api/res/1.2/.dpvzfQ5SZMLpVEC3pA6Jw--/YXBwaWQ9c3JjaGRkO2g9NzkyO3E9OTU7dz02MTI-/http://2.bp.blogspot.com/_jFXb3jnqUa8/TK82vE2vCsI/AAAAAAAABM8/x5TEUzRTlRk/s1600/CatSilhouette1.jpg">
        </img>
        <a className={this.getActive(this.props.path == "/recs")}
          href="/recs" onClick={Link.handleClick}>
          <span className="Navigation-img"> #
          </span>
        Discover</a>
      </span>
        <span className="Navigation-right">
          November 14, Portland OR
        </span>
      </div>
    );
  }

}

export default Navigation;

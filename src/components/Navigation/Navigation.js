/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class Navigation {


  static propTypes = {
    className: PropTypes.string
  };



  render() {
    if (this.props.path == "/"){
      return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
      <span className="Navigation-links">
        <a className="Navigation-link Navigation-linkActive" href="/" onClick={Link.handleClick}>
           <span className="Navigation-img"> @
          </span>
        Connect</a>
           <img className="Navigation-cat" 
        src="https://s.yimg.com/fz/api/res/1.2/.dpvzfQ5SZMLpVEC3pA6Jw--/YXBwaWQ9c3JjaGRkO2g9NzkyO3E9OTU7dz02MTI-/http://2.bp.blogspot.com/_jFXb3jnqUa8/TK82vE2vCsI/AAAAAAAABM8/x5TEUzRTlRk/s1600/CatSilhouette1.jpg">
        </img>
        <a className="Navigation-link" href="/recs" onClick={Link.handleClick}>
          <span className="Navigation-img"> #
          </span>
        Discover</a>
      </span>
     
      </div>
    );
  } return (
    <div className={classNames(this.props.className, 'Navigation')} role="navigation">
      <span className="Navigation-links">
        <a className="Navigation-link" href="/" onClick={Link.handleClick}>
           <span className="Navigation-img"> @
          </span>
        Connect</a>
           <img className="Navigation-cat" 
        src="https://s.yimg.com/fz/api/res/1.2/.dpvzfQ5SZMLpVEC3pA6Jw--/YXBwaWQ9c3JjaGRkO2g9NzkyO3E9OTU7dz02MTI-/http://2.bp.blogspot.com/_jFXb3jnqUa8/TK82vE2vCsI/AAAAAAAABM8/x5TEUzRTlRk/s1600/CatSilhouette1.jpg">
        </img>
        <a className="Navigation-link Navigation-linkActive" href="/recs" onClick={Link.handleClick}>
          <span className="Navigation-img"> #
          </span>
        Discover</a>
      </span>
     
      </div>
    );
}
}

export default Navigation;

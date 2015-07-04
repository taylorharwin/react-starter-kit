/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ContentPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContentPage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
          <div className="ContentPage-leftColumn">
          {
            this.props.path === '/' ? null : <h1>{this.props.title}</h1>
          }
            <h3 className="explanation">
              <div>This is a website for the wedding of Jillian Underwood and Taylor Harwin</div> 
              <div>We will update it with logistics and timelines closer to the event</div>
              <div>Until then it is, as they say on the Internet, <i>Under Construction</i></div>
            </h3>
          </div>

          <div className="ContentPage-rightColumn">
            <h1>Where to stay</h1>
          </div>
          <div className="ContentPage-rightColumn">
            <h1 className="explanation">Registry Lists</h1>
          </div>
      </div>
      </div>
    );
  }

}

export default ContentPage;

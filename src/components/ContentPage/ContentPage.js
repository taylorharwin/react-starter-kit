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

  componentDidMount(nextProps){
    window.twttr.widgets.load();
  } 


  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
          <div className="ContentPage-leftColumn">
          {
            this.props.path === '/' ? null : <h1>{this.props.title}</h1>
          }
              <div className="ContentPage-announce"><b>Whats happening:</b> Jill and Taylor are getting married! 
              <div>We will update this page with more logistics closer to the event</div>
              <div>In the meantime, please follow our Twitter account!</div>
              </div>
              <a className="twitter-timeline" href="https://twitter.com/taylorandjill" data-widget-id="617424235049299969">Tweets by @taylorandjill</a>
              </div>
          <div className="ContentPage-rightColumn">
            <h1>Key Locations</h1>
            <div>
            <iframe className="ContentPage-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4964304343316!2d-122.6573445!3d45.52021479999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0a68254de97%3A0xecaf9f21ed9726a8!2sCyril&#39;s+at+Clay+Pigeon+Winery!5e0!3m2!1sen!2sus!4v1436044025677"></iframe>
            </div>
          </div>
          <div className="ContentPage-rightColumn ContentPage-registry">
            <h1 className="explanation">Registry Lists</h1>
          </div>
      </div>
      </div>
    );
  }

}

export default ContentPage;

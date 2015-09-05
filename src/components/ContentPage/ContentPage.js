/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ContentPage.less';
import withStyles from '../../decorators/withStyles';
var $ = require('jquery');
var _ = require('underscore');
var Firebase = require('firebase');
var myDataRef = new Firebase('https://taylorandjill.firebaseio.com');
var musicRef = myDataRef.child('music');
var rsvpRef = myDataRef.child('rsvp');

@withStyles(styles)
class ContentPage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  postContactToGoogle(e){
    e.preventDefault();
    var yes = React.findDOMNode(this.refs.yes).checked;
    var no = React.findDOMNode(this.refs.no).checked;
    var guests = React.findDOMNode(this.refs.guests).value;
    var music = React.findDOMNode(this.refs.music).value;

    if (guests){
      rsvpRef.child(guests).set({
        guests: guests,
        canCome: yes
      }, _.bind(this.handleFormComplete, this));
    }
    if (music){
      musicRef.child(guests).set({
        suggestedBy: guests,
        music: music
      }, _.bind(this.handleFormComplete, this));
    }
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  componentDidMount(nextProps){
    if (window.twttr & window.twttr.widgets){
          window.twttr.widgets.load();
    }
  } 

  handleFormComplete(){
    console.log('form submitted successfully');
    React.findDOMNode(this.refs.guests).value = '';
    React.findDOMNode(this.refs.music).value = '';
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container"
              ref="mainPage">
        <div>
          <img className="ContentPage-weddingLogo" src="weddingLogo.png"/>
        </div>
          <div className="ContentPage-leftColumn">
              <a className="twitter-timeline" href="https://twitter.com/taylorandjill" data-widget-id="617424235049299969">Tweets by @taylorandjill</a>
              </div>
          <div className="ContentPage-rightColumn">
            <h1 className="ContentPage-explanation">Key Locations</h1>
            <div>
          <iframe className="ContentPage-map" src="https://mapsengine.google.com/map/embed?mid=zm-8AoblbN8w.kSi1YDJOX8K4" width="640" height="480"></iframe>            </div>
          </div>
          <div className="ContentPage-righterColumn">
            <h1 className="ContentPage-explanation">RSVP</h1>
            <div className='rsvp'>
              <form onSubmit={_.bind(this.postContactToGoogle, this)}>
                <div className="ContentPage-question">Your name(s): 
                  <input ref="guests" name="guests" type="text"/>
                </div>
                <div>
                <div className="ContentPage-question">
                  <span className="ContentPage-prompt">Are you able to attend our wedding in Portland, Oregon on November 14?:
                  </span>
                </div>
                  <div className="ContentPage-question">
                  <div className="ContentPage-button">
                  Yes
                  <input ref="yes"type="radio" name="yesno" value="Yes" defaultChecked={true} />
                  </div>
                  <div className="ContentPage-button">
                  No
                  <input ref="no" type="radio" name="yesno" value="No" />
                  </div>
                  </div>
                  </div>
                <div>
                <span className="ContentPage-prompt">Any songs youd like to suggest for the wedding playlist?:
                </span>
                <input ref="music" name="music" type="text" />
                </div>
                <input className="ContentPage-submitForm" type="submit" value="Send" /> 
              </form>
              <div className="ContentPage-middleColumn">
              <h1 className="ContentPage-explanation">Our registries</h1>
              <div>
                <div className="ContentPage-registry">
                  <a href='http://www.crateandbarrel.com/gift-registry/jillian-underwood-and-taylor-harwin/r5401997' target="_blank">
                  Crate & Barrel
                  </a>
                </div>
                <div className="ContentPage-registry">
                  <a href='http://www.amazon.com/registry/wedding/2XB4XWRICXKGL' target="_blank">
                  Amazon
                  </a>
                </div>


              </div>
            </div>
            </div>



          </div>
      </div>
      </div>
    );
  }

}

export default ContentPage;

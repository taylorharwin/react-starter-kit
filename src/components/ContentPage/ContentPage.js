/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ContentPage.less';
import withStyles from '../../decorators/withStyles';
var $ = require('jquery');
var _ = require('underscore');

@withStyles(styles)
class ContentPage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  getInitialState(){
    return {
      yesno: 'yes',
      guests: '',
      music: ''
    }
  };


  handleYesNoChange(e){
    this.setState({
      yesno: e.target.value
    })
  };
  handleMusicChange(e){
    this.setState({
      music: e.target.value
    })
  };
  handleGuestChange(e){
    this.setState({
      music: e.target.value
    })
  };

  postContactToGoogle(e){
    e.preventDefault();
    var yes = React.findDOMNode(this.refs.yes).value;
    var no = React.findDOMNode(this.refs.no).value;
    var guests = React.findDOMNode(this.refs.guests).value;
    var music = React.findDOMNode(this.refs.music).value;

    $.ajax({
        url: "https://docs.google.com/forms/d/1YDfih9MMnzFAplwXqSe1H5hKjZsZORKX4L7hlyJtg14/formResponse",
        data: { 
        "entry.141907784": yes,
        "entry.2027375146": guests, 
        "entry.1159374558":music
        },
        type: "POST",
        crossDomain: true,
        dataType: "xml",
        statusCode: {
            0: function () {
                console.log('thanks!');
            },
            200: function () {
                console.log('thanks a bunch');
            }
        }
    });



    console.log(yes, no, guests, music);
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
  };


  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
        <div>
          <img className="ContentPage-weddingLogo" src="weddingLogo.png"/>
        </div>
          <div className="ContentPage-leftColumn">
              <a className="twitter-timeline" href="https://twitter.com/taylorandjill" data-widget-id="617424235049299969">Tweets by @taylorandjill</a>
              </div>
          <div className="ContentPage-rightColumn">
            <h1>Key Locations</h1>
            <div>
            <iframe className="ContentPage-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4964304343316!2d-122.6573445!3d45.52021479999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0a68254de97%3A0xecaf9f21ed9726a8!2sCyril&#39;s+at+Clay+Pigeon+Winery!5e0!3m2!1sen!2sus!4v1436044025677"></iframe>
            </div>
          </div>
          <div className="ContentPage-righterColumn">
            <h1 className="explanation">RSVP</h1>
            <div className='rsvp'>
              <form onSubmit={_.bind(this.postContactToGoogle, this)}>
              <span>Your name(s):</span>
                <input ref="guests" name="guests" type="text"onChange={this.handleGuestChange}/>
                <div>Can you make it t\o our wedding on November 14?</div>
                <input ref="yes"type="radio" name="yesno" value="Yes" onChange={this.handleYesNoChange} defaultChecked={true} />
                Yes
                <br/>
                <input ref="no" type="radio" name="yesno" value="No" onChange={this.handleYesNoChange}/>
                No
                <div>Are there any songs you would like to suggest for the wedding playlist?</div>
                <input ref="music" name="music" type="text" onChange={this.handleMusicChange}/>
                <input type="submit">Send</input> 
              </form>
            </div>
          </div>
      </div>
      </div>
    );
  }

}

export default ContentPage;

'use strict'
var React = require('react-native');
var {
  StyleSheet,
  WebView,
} = React

var WechatPosterDetail = React.createClass({
  render: function() {
    return (
      <WebView
  automaticallyAdjustContentInsets={true}
  source={{uri: this.props.url}}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  decelerationRate="normal"
  startInLoadingState={true}
  />
    );
  },
});

module.exports = WechatPosterDetail;

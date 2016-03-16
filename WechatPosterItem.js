'use strict'
var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} = React

var WechatPosterItem = React.createClass({
  render: function() {
    var news = this.props.news
    return(
      <TouchableOpacity {...this.props}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{news.title}</Text>
          <View style={styles.row}>
            <Text style={[styles.secondaryLabel, styles.left_item]}>{news.description}</Text>
            <Text style={[styles.secondaryLabel, styles.right_item]}>{news.ctime}</Text>
          </View>
          <Image source={{uri: news.picUrl}} style={styles.wechat_img}/>
        </View>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flexDirection:'row'
  },
  wrapper: {
    backgroundColor:'#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    margin:10
  },
  wechat_img: {
    marginTop:10,
    resizeMode:Image.resizeMode.cover,
    height:200
  },
  title: {
    marginLeft:10,
    fontSize:16,
    color:'#2d2d2d',
    marginBottom:8,
    marginTop:10,
  },
  secondaryLabel: {
    fontSize:13,
    color:'#858585',
    marginBottom:8
  },
  left_item: {
    textAlign:'left',
    marginLeft:10,
    flex:1
  },
  right_item: {
    textAlign:'right',
    marginRight:10,
    flex:1
  }
});

module.exports = WechatPosterItem;

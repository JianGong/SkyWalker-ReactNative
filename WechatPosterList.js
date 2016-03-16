'use strict'

var React = require('react-native');
var {
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableOpacity,
  Image
} = React

var TimerMixin = require('react-timer-mixin');
var RefreshInfiniteListView = require('react-native-refresh-infinite-listview');
var WechatPosterItem = require('./WechatPosterItem');
var WechatPosterDetail = require('./WechatPosterDetail');
var Config = require('./Config')

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var WechatPosterList = React.createClass({
  mixins: [TimerMixin],
  page: 1,
  newslist: ds.cloneWithRows([]),
  getInitialState: function() {
    return {
      dataSource: this.newslist,
    }
  },

  componentDidMount: function() {
    this.page = 1
    this.fetchPosters(this.page);
  },

  fetchPosters: function(page) {
    var url = Config.WECHAT_LIST_API + '&page=' + page;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        if (this.page == 1) {
          this.newslist = ds.cloneWithRows(responseData.newslist);
        } else {
          this.newslist = this.newslist.cloneWithRows(responseData.newslist);
        }
        this.setState({
          dataSource: this.newslist,
        });
      })
      .done();
  },
  onRefresh() {
        this.page = 1;
        this.fetchPosters(this.page);
        this.setTimeout(()=>{
            this.list.hideHeader();
        }, 1000);
    },
  onInfinite() {
        this.page = this.page + 1;
        this.fetchPosters(this.page);
        this.setTimeout(()=>{
            this.list.hideFooter();
        }, 1000);
    },
  loadedAllData() {
    return false;
  },
  _renderEmptyRow() {
    return (
      <View></View>
    );
  },
  selectPosterDetail: function(news) {
    this.props.navigator.push(
      {
        component: WechatPosterDetail,
        title: news.title,
        passProps: { url: news.url },
      });
  },
  render: function() {
    return (
      <RefreshInfiniteListView
      ref = {(list) => {this.list=list}}
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
      renderEmptyRow={this._renderEmptyRow}
      initialListSize={20}
      scrollEventThrottle={10}
      style={{backgroundColor:'transparent'}}
      onRefresh = {this.onRefresh}
      onInfinite = {this.onInfinite}
        >
      </RefreshInfiniteListView>
    );
  },
  _renderRow: function(news) {
    return (
      <WechatPosterItem news={news} onPress={this.selectPosterDetail.bind(this, news)} />
    );
  }
});

var styles = StyleSheet.create({
  background: {
    backgroundColor:'#fcfafc'
  }
});

module.exports = WechatPosterList;

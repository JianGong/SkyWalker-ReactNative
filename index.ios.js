'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var WechatPosterList = require('./WechatPosterList');

class SkyWalker extends Component {
  render() {
    return (
      <React.NavigatorIOS style={styles.container} initialRoute={{
        title: '天行者',
        component: WechatPosterList,
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
});

AppRegistry.registerComponent('SkyWalker', () => SkyWalker);

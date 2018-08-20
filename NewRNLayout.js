import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,DeviceEventEmitter,ToastAndroid,NativeModules} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let message = "dxw"

DeviceEventEmitter.addListener('NewRNLayout',(msg)=>{
  title = "React Native界面,收到数据：" + msg;
  message = msg;
  ToastAndroid.show("发送成功", ToastAndroid.SHORT);
})

export default class NewRNLayout extends Component {

  constructor(props) {
		super(props);
        
  }
  /**
    * 接收原生调用
    */
   componentWillMount() {
     //有延迟
  }

  render() {
    return (
      <View style={styles.container}>
            <Text>NewRNLayout</Text>
            <Text>{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
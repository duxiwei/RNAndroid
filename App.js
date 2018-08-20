/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,NativeModules,DeviceEventEmitter,TextInput} from 'react-native';

export default class App extends Component {


  componentDidMount(){

  }

  constructor(props) {
		super(props);
      message = '';
      show = '';
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            // NativeModules.commModule.startActivity(this.state.message);
            if(this.message !== '')
              NativeModules.ReactCommModule.startActivity(this.message);
				}}>
					<Text style={styles.welcome}>
            发送
					</Text>
				</TouchableOpacity>
        <TextInput 
				    underlineColorAndroid={'transparent'}
					  style={[styles.input]}
						multiline={false}
						keyboardType='default'
						placeholder={'未添加'}
						autoFocus={false}
						returnKeyType="next"
            onChangeText={(text) => {
              this.message = text;
            }}
						/>
          <Text>{this.show}</Text>
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
  input: {
    paddingBottom: 1,paddingTop:1,
    color: '#000', width: 100,fontSize:15, textAlign: 'center',
},
});

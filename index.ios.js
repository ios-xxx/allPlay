/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    WebView
} from 'react-native';

export default class playVideo extends Component {

  webview = null;

  render() {
    return (
        <WebView
            source={{uri:'http://v.youku.com/'}}
            automaticallyAdjustContentInsets={true}
             javaScriptEnabled={true}
             domStorageEnabled={true}
             injectedJavaScript="document.addEventListener('message',function(script) {eval(script.data)});"
             userAgent={'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Mobile Safari/537.36'}
             onloadend={()=>this.onLoadEnd()}
            onmessage={this.onMessage}
            ref= {webview => {this.webview = webview;}}
            style={styles.webView}
        />
    );
  }

    onLoadEnd(){
          this.webview.postMessage("window.postMessae(navigator.userAgent)")

    }

    onMessage(script){
           var msg = script.nativeEvent.data.toString();
           alert(msg);
    }

}

const styles = StyleSheet.create({

    webView:{
      width:'100%',
        height:'100%',
        backgroundColor:'white',


    } ,
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

AppRegistry.registerComponent('playVideo', () => playVideo);

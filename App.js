import React from 'react';
import { View } from 'react-native';
import { Root } from './app/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <Root />
      </View>
    );
  }
}
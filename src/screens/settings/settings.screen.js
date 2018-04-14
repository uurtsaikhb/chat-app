import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

export default SettingsScreen;

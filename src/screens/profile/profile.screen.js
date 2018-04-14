import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;

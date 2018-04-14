import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ContactsScreen extends Component {
  static navigationOptions = {
    title: 'Contacts'
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contact Screen</Text>
      </View>
    );
  }
}

export default ContactsScreen;

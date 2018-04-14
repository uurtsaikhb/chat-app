import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';

import firebase from 'react-native-firebase';

class SignInScreen extends Component {
  state = {
    phoneNumber: '',
    confirmResult: null,
    verificationCode: 0,
    displayVerification: false
  };

  static navigationOptions = {
    title: 'Sign In'
  };

  onLoginWithPhone = () => {
    const { phoneNumber } = this.state;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => {
        this.setState({ confirmResult });

        this.setState({
          displayVerification: true
        });
      })
      .catch(error => {
        alert(error);
      });
  };

  onVerification = () => {
    const { confirmResult, verificationCode } = this.state;

    confirmResult
      .confirm(verificationCode)
      .then(user => {
        this.props.navigation.navigate('App');
      })
      .catch(error => {
        alert('error in verification');
      });
  };

  renderVerification = () => {
    const { displayVerification } = this.state;

    if (displayVerification) {
      return (
        <View>
          <Item regular style={{ marginBottom: 5 }}>
            <Icon active name="ios-checkmark-outline" />
            <Input
              placeholder="xxx xxx"
              onChangeText={verificationCode => {
                this.setState({ verificationCode });
              }}
            />
          </Item>
          <Button full warning onPress={this.onVerification}>
            <Text>Verify code</Text>
          </Button>
        </View>
      );
    } else {
      return;
    }
  };

  render() {
    firebase.auth().onAuthStateChanged(d => {
        console.log('test');
        if (d) {
            this.props.navigation.navigate('App');
        }
    })
    
    return (
      <Container style={styles.container}>
        <Item regular style={{ marginBottom: 5 }}>
          <Icon active name="ios-call-outline" />
          <Input
            placeholder="+1 xxx xxx xxxx"
            onChangeText={phoneNumber => {
              this.setState({ phoneNumber });
            }}
          />
        </Item>
        <Button
          full
          warning
          style={{ marginBottom: 30 }}
          onPress={this.onLoginWithPhone}
        >
          <Text>Get code</Text>
        </Button>

        {this.renderVerification()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  }
});

export default SignInScreen;

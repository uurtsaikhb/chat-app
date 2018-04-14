import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import {
  StackNavigator,
  SwitchNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import ChatsScreenStack from './src/screens/chats/chats.stack.navigation';
import ContactsScreenStack from './src/screens/contacts/contacts.stack.navigation';
import ProfileScreenStack from './src/screens/profile/profile.stack.navigation';
import SettingsScreenStack from './src/screens/settings/settings.stack.navigation';

import SignInScreen from './src/screens/signin/signin.screen';

import defaultNavigationOptions from './src/components/shared/default.navigation.options.js';

const SignInStack = StackNavigator(
  {
    SignInScreen: { screen: SignInScreen }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNavigationOptions
    }
  }
  
);

const AppNavigation = TabNavigator(
  {
    Chats: { screen: ChatsScreenStack },
    Contacts: { screen: ContactsScreenStack },
    Profile: { screen: ProfileScreenStack },
    Settings: { screen: SettingsScreenStack }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      labelStyle: {
        fontSize: 11
      },
      style: {
        backgroundColor: 'white',
        height: 55
      },
      inactiveTintColor: 'gray',
      activeTintColor: 'orange'
    }
  }
);

const Root = SwitchNavigator(
  {
    Signin: SignInStack,
    App: AppNavigation
  },
  {
    initialRouteName: 'Signin'
  }
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

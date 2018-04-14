import React from 'react';
import { StackNavigator } from 'react-navigation';

import ContactsScreen from './contacts.screen';
import ContactsTabIcon from './contacts.tab.icon';
import defaultNavigationOptions from '../../components/shared/default.navigation.options.js';

const ContactsScreenStack = StackNavigator(
  {
    ContactScreen: { screen: ContactsScreen }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: props => <ContactsTabIcon {...props} />
    }
  }
);

export default ContactsScreenStack;

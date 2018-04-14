import React from 'react';
import { StackNavigator } from 'react-navigation';

import ProfileScreen from './profile.screen';
import ProfileTabIcon from './profile.tab.icon';
import defaultNavigationOptions from '../../components/shared/default.navigation.options.js';

const ProfileScreenStack = StackNavigator(
  {
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: props => <ProfileTabIcon {...props} />
    }
  }
);

export default ProfileScreenStack;

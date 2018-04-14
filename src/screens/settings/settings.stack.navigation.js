import React from 'react';
import { StackNavigator } from 'react-navigation';

import SettingsScreen from './settings.screen';
import SettingsTabIcon from './settings.tab.icon';
import defaultNavigationOptions from '../../components/shared/default.navigation.options.js';

const SettingsScreenStack = StackNavigator(
  {
    SettingsScreen: { screen: SettingsScreen }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: props => <SettingsTabIcon {...props} />
    }
  }
);

export default SettingsScreenStack;

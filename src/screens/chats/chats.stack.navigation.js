import React from 'react';
import { StackNavigator } from 'react-navigation';

import ChatsScreen from './chats.screen';
import ChatsTabIcon from './chats.tab.icon';
import defaultNavigationOptions from '../../components/shared/default.navigation.options.js';

const ChatsScreenStack = StackNavigator(
  {
    ChatsScreen: { screen: ChatsScreen }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: props => <ChatsTabIcon {...props} />
    }
  }
);

export default ChatsScreenStack;

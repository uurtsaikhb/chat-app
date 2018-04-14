import React, { Component } from 'react';
import { Icon } from 'native-base';

class ChatsTabIcon extends Component {
  render() {
    return (
      <Icon
        name="ios-chatboxes-outline"
        style={{
          fontSize: 30,
          color: this.props.tintColor
        }}
      />
    );
  }
}

export default ChatsTabIcon;

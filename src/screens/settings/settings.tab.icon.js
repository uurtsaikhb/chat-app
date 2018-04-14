import React, { Component } from 'react';
import { Icon } from 'native-base';

class SettingsTabIcon extends Component {
  render() {
    return (
      <Icon
        name="ios-settings-outline"
        style={{
          fontSize: 30,
          color: this.props.tintColor
        }}
      />
    );
  }
}

export default SettingsTabIcon;

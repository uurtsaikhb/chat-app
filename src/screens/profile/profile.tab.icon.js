import React, { Component } from 'react';
import { Icon } from 'native-base';

class ProfileTabIcon extends Component {
  render() {
    return (
      <Icon
        name="ios-contact-outline"
        style={{
          fontSize: 30,
          color: this.props.tintColor
        }}
      />
    );
  }
}

export default ProfileTabIcon;

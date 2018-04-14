import React, { Component } from 'react';
import { Icon } from 'native-base';

class ContactsTabIcon extends Component {
  render() {
    return (
      <Icon
        name="ios-contacts-outline"
        style={{
          fontSize: 30,
          color: this.props.tintColor
        }}
      />
    );
  }
}

export default ContactsTabIcon;

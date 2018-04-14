import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from 'native-base';

export default class ChatsScreen extends Component {
  static navigationOptions = {
    title: 'Chats'
  };

  conversationHandler = () => {
    console.log('clicked');
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem
              avatar
              button
              onPress={this.conversationHandler.bind(this)}
            >
              <Left>
                <Thumbnail
                  source={{
                    uri: 'https://placeimg.com/200/200/people/tech'
                  }}
                />
              </Left>
              <Body>
                <Text>Mandal Tsaschikher</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem
              avatar
              button
              onPress={this.conversationHandler.bind(this)}
            >
              <Left>
                <Thumbnail
                  source={{
                    uri: 'https://placeimg.com/200/200/people'
                  }}
                />
              </Left>
              <Body>
                <Text>Luvsansharav Altangerel</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem
              avatar
              button
              onPress={this.conversationHandler.bind(this)}
            >
              <Left>
                <Thumbnail
                  source={{
                    uri: 'https://placeimg.com/200/200/animal'
                  }}
                />
              </Left>
              <Body>
                <Text>Shagai Nyamdorj</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import lodash from "lodash";
import firebase from "react-native-firebase";
export default class ChatsScreen extends Component {
  state = {
    data: [],
    message: "",
    user: null
  };
  static navigationOptions = {
    title: "Chats"
  };
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(d => {
      this.setState({
        user: d
      });
    });
    firebase
      .database()
      .ref("test")
      .on("value", d => {
        let map = d.val();
        this.setState({
          data: _.chain(d.val())
            .keys()
            .map(_key => {
              return { _key, ...map[_key] };
            })
            .value()
        });
      });
  }
  conversationHandler = () => {
    console.log("clicked");
  };

  send = () => {
    const { message } = this.state;
    firebase
      .database()
      .ref("test")
      .push({
        from: {
          uid: this.state.user.uid
        },
        content: message,
        sentAt: firebase.database.ServerValue.TIMESTAMP
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.data)}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter message"
          onChangeText={message => {
            this.setState({ message });
          }}
        />

        <TouchableOpacity style={styles.button} onPress={this.send}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingLeft: 15
  },
  button: {
    backgroundColor: "orange",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 17
  }
});

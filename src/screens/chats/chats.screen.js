import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    TextInput,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';

import firebase from 'react-native-firebase';
export default class ChatsScreen extends Component {
    state = {
        data: '',
        message: ''
    };
    static navigationOptions = {
        title: 'Chats'
    };

    conversationHandler = () => {
        console.log('clicked');
    };

    send = () => {
        const { message } = this.state;

        alert(message);
    };

    render() {
        firebase
            .database()
            .ref('test')
            .on('value', d =>
                this.setState({
                    data: d.val()
                })
            );

        return (
            <View style={styles.container}>
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
        justifyContent: 'center',
        padding: 10
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingLeft: 15
    },
    button: {
        backgroundColor: 'orange',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 17
    }
});

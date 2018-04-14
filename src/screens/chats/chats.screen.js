import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    SectionList
} from 'react-native';

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
import moment from 'moment';
import lodash from 'lodash';
import firebase from 'react-native-firebase';

const extractKey = ({ id }) => id;

export default class ChatsScreen extends Component {
    state = {
        data: [],
        message: '',
        user: null
    };

    static navigationOptions = {
        title: 'Chats'
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
            .ref('test')
            .orderByChild('startAt')
            .limitToLast(100)
            .on('value', d => {
                let map = d.val();
                this.setState({
                    data: _.chain(d.val())
                        .keys()
                        .map(_key => {
                            return { _key, ...map[_key] };
                        })
                        .reverse()
                        .value()
                });
            });
    }

    conversationHandler = () => {
        console.log('clicked');
    };

    send = () => {
        const { message } = this.state;
        firebase
            .database()
            .ref('test')
            .push({
                content: message,
                sentAt: firebase.database.ServerValue.TIMESTAMP
            });
    };

    renderList = () => {
        const { data } = this.state;
        return data.map(item => {
            return this.renderItem(item);
        });
    };

    renderItem = item => {
        return (
            // <View style={styles.row}>
            //     <Text>{item.content}</Text>
            //     <Text>{_.property('from.name')(item)}</Text>
            // </View>

            <View>
                <ListItem avatar key={item._key}>
                    <Left>
                        <Thumbnail
                            source={{ uri: _.property('from.profile')(item) }}
                        />
                    </Left>
                    <Body>
                        <Text>{_.property('from.name')(item)}</Text>
                        <Text note>{item.content}</Text>
                    </Body>
                    <Right>
                        <Text style={styles.sentAt} fromNow>
                            {moment(_.property('sentAt')(item)).fromNow()}
                        </Text>
                    </Right>
                </ListItem>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Container>
                        <Content>
                            <List>{this.renderList()}</List>
                        </Content>
                    </Container>
                </ScrollView>
                <View>
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
    },
    row: {
        height: 30,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    sentAt: {
        fontSize: 11
    }
});

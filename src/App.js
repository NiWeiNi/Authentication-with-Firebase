import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDj_-WpRWznkQA8oDuBndT6i6FYFxKW2_U",
            authDomain: "auth-2b654.firebaseapp.com",
            databaseURL: "https://auth-2b654.firebaseio.com",
            projectId: "auth-2b654",
            storageBucket: "auth-2b654.appspot.com",
            messagingSenderId: "650993468331"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Auth" />
                <Text>App</Text>
            </View>
        );
    }
}

export default App;
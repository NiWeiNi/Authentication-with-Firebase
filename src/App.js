import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDj_-WpRWznkQA8oDuBndT6i6FYFxKW2_U",
            authDomain: "auth-2b654.firebaseapp.com",
            databaseURL: "https://auth-2b654.firebaseio.com",
            projectId: "auth-2b654",
            storageBucket: "auth-2b654.appspot.com",
            messagingSenderId: "650993468331"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.centerSpinner}>
                        <Spinner size="large" />
                    </View>
                );
        } 
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    centerSpinner: {
        alignSelf: 'center'
    }
}

export default App;
import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '' };

    onButtonPress(){
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='email'
                        onChangeText={email => this.setState({ email })}
                        placeholder='user@google.com'
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='password'
                        onChangeText={password => this.setState({ password })}
                        placeholder='password'
                        secureTextEntry='true'
                        value={this.state.password}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
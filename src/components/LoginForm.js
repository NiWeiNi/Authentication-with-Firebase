import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress(){
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication Failed'});
                    });
            });
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
                        secureTextEntry={true}
                        value={this.state.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
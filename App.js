import React from 'react';
import {Button, StyleSheet, View, Image, Text, TextInput} from 'react-native';
import User from './App/Domain/User';
import UserRepo from './App/Infrastructure/UserRepository';
// import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends React.Component {

    constructor(){
        super();

        this.state = {
            softwareCode: null,
            userInfo: new User(),
            isLoading : false
        };
    }

    login() {
        this.setState({
            softwareCode : 'htxO8Z',
            isLoading: true
        });

        UserRepo.getUserFromApi(this.state.softwareCode, (user) => {
            this.setState({
                userInfo : user,
                isLoading: false
            });
        });
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<Spinner visible={this.state.isLoading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />*/}
                <Image source={require('./assets/images/logo.png')} style={{
                    alignSelf: 'center',
                    width: 250,
                    margin: 10,
                    resizeMode: 'contain'
                }}/>

                <TextInput
                    style={{
                        borderColor: 'gray',
                        borderWidth: 1,
                        margin: 30,
                        width: 300,
                        fontSize: 18,
                        padding: 15,
                        textAlign: 'center'
                    }}
                    onChangeText={(text) => this.setState({softwareCode : text})}
                    value={this.state.softwareCode}
                    placeholder={'Please enter your software code'}
                />

                <Button
                    title="Login to VisLog Portal"
                    accessibilityLabel="Login to VisLog Portal"
                    onPress={this.login.bind(this)}
                    style={{
                        width: '100%',
                        margin: 10,
                        fontSize : 24
                    }}
                />
                <Text style={styles.footer}>{JSON.stringify(this.state.userInfo)}</Text>
                <Text style={styles.footer}>2018 &copy; All rights reserved. NETVAI UG, Kiel Germany</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        marginTop: 40
    }
});

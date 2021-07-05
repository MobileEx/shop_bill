import React from 'react';
import {Alert, AsyncStorage, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Chevron } from 'react-native-shapes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Toast from 'react-native-tiny-toast';
import axios from 'axios';
import BASE_URL from '../../service/api';
import { buyerlogin, merchantlogin } from '../../service/auth'
import styles from '../../css/Styles';

const textStyles = function(myColor, myfontSize, mylineHeight) {
    return {
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: myfontSize,
        lineHeight: mylineHeight,
        color: myColor,
    }
};

export default class LoginScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            role: this.props.navigation.state.params ? this.props.navigation.state.params.role : 'buyer'
        };
        this._login = this._login.bind(this);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='' style={styles.wrapper}>
                <SafeAreaView style={styles.container}>
                    <SafeAreaView style={styles.head}>
                        <View style={styles.normalFillCircle} />
                            <Image source={require('../../assets/login.png')} style={styles.loginIcon} />
                        <View style={styles.largeFillCircle} />
                    </SafeAreaView>
                    <ScrollView style={styles.body}>
                        <View style={styles.pt4}>
                            <TextField
                                inputContainerStyle={{marginBottom: -10}}
                                label='Email'
                                tintColor='#6699FF'
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email }) }
                            />
                            <TextField
                                inputContainerStyle={{marginBottom: -10}}
                                label='Password'
                                tintColor='#6699FF'
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password }) }
                            />
                            <View style={styles.leftText}>
                                <TouchableOpacity activeOpacity = { 0.5 } onPress={this._forgot}>
                                    <Text style={textStyles('#6699FF', 14, 20)}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.login}>
                            <LinearGradient
                                colors={['#6699FF', '#6e45e2']}
                                start={{ x: 0.7, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.linearGradient}>
                                <TouchableOpacity activeOpacity = { 0.5 }
                                    style={styles.gradientButton}
                                    onPress={this._login}>
                                    <Text style={textStyles('#FFFFFF', 20, 27)}>Log in</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <View style={styles.footer}>
                            <View style={styles.column}>
                                <Text style={textStyles('#000000', 14, 20)}>Don't have account?</Text>
                            </View>
                            <TouchableOpacity activeOpacity = { 0.5 }
                                style={styles.column}
                                onPress={this._register}>
                                <Text style={textStyles('#6699FF', 14, 20)}>Create a new account</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }

    _login = async () => {
        Toast.showLoading('Loading...');
        // if(this.state.email == '') {
        //     Alert.alert('Enter your Email');
        //     return Toast.hide();
        // } else if(this.state.password == '') {
        //     Alert.alert('Enter your Password');
        //     return Toast.hide();
        // } else {
            // const res = await axios.post(BASE_URL + 'login', {
            //     email: this.state.email,
            //     password: this.state.password
            // })
            // .then(response => {
                Toast.hide();
                // if (response.data.success.token && response.data.success.id) {
                    // AsyncStorage.setItem('userToken', response.data.success.token);
                    // AsyncStorage.setItem('userId', JSON.stringify(response.data.success.id));
                    if (this.state.role === 'merchant') {
                        this.props.navigation.navigate('Merchant');
                    } else {
                        this.props.navigation.navigate('Buyer');
                    }
                // } else {
                //     Alert.alert(response.data.error);
                // }
            // })
            // .catch(error => {
            //     Toast.hide();
            //     throw error;
            // });
        // }
    }

    _forgot = async () => {
        this.props.navigation.navigate('SendCode');
    }
    _register = async () => {
        this.props.navigation.navigate('Register');
    }
}

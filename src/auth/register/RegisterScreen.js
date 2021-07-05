import React from 'react'
import {Alert, AsyncStorage, KeyboardAvoidingView, Platform, ScrollView, Text, View} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Chevron } from 'react-native-shapes';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-tiny-toast';
import axios from 'axios';
import BASE_URL from '../../service/api';
import styles from '../../css/Styles';

export default class RegisterScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            labelName: 'Name',
            name: '',
            email:'',
            phone: '',
            password:'',
            cpassword: '',
            account_type: ''
        };
        this._create = this._create.bind(this);
    }

    render() {
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
        return (
            <KeyboardAvoidingView behavior='' style={styles.wrapper}>
                <ScrollView style={styles.container}>
                    <View style={styles.centerAlign}>
                        <Text style={textStyles('#000000', 28, 37)}>Create Account</Text>
                    </View>
                    <View style={styles.body}>
                        <TextField
                            inputContainerStyle={{marginTop: -10, marginBottom: -10}}
                            label={this.state.labelName}
                            tintColor='#6699FF'
                            textContentType='name'
                            keyboardType='default'
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <TextField
                            inputContainerStyle={{marginTop: -10, marginBottom: -10}}
                            label='Email'
                            tintColor='#6699FF'
                            textContentType='emailAddress'
                            keyboardType='email-address'
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <TextField
                            inputContainerStyle={{marginTop: -10, marginBottom: -10}}
                            label='Phone Number'
                            tintColor='#6699FF'
                            textContentType='telephoneNumber'
                            keyboardType='phone-pad'
                            value={this.state.phone}
                            onChangeText={(phone) => this.setState({ phone })}
                        />
                        <TextField
                            inputContainerStyle={{marginTop: -10, marginBottom: -10}}
                            label='Password'
                            tintColor='#6699FF'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                        />
                        <TextField
                            inputContainerStyle={{marginTop: -10, marginBottom: -10}}
                            label='Confirm Password'
                            tintColor='#6699FF'
                            secureTextEntry={true}
                            value={this.state.cpassword}
                            onChangeText={(cpassword) => this.setState({ cpassword })}
                        />
                        <View style={styles.pt2}>
                            <Text style={textStyles('#6D6D6D', 14, 19)}>Account Type</Text>
                            <RNPickerSelect
                                placeholder={{}}
                                value={this.state.account_type}
                                onValueChange={(value) => this.setState({ account_type: value, labelName: value === 'buyer' ? 'Name (first name & last name)' : 'Name'})}
                                items={[
                                    { label: 'Merchant', value: 'merchant' },
                                    { label: 'Buyer', value: 'buyer' },
                                ]}
                                style={{
                                    inputAndroid: {
                                        backgroundColor: 'transparent',
                                    },
                                    iconContainer: {
                                        top: 15,
                                        right: 15,
                                    },
                                }}
                                useNativeAndroidPickerStyle={false}
                                textInputProps={{ underlineColorAndroid: '#6699FF' }}
                                Icon={() => {
                                    return <Chevron size={2} color="gray" />;
                                }}
                            />
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
                                onPress={this._create}>
                                <Text style={textStyles('#FFFFFF', 20, 27)}>Register</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.column}>
                            <Text style={textStyles('#000000')}>Already have an account?</Text>
                        </View>
                        <TouchableOpacity activeOpacity = { 0.5 }
                            style={styles.column}
                            onPress={this._login}>
                            <Text style={textStyles('#6699FF')}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
    _create = async () => {
        Toast.showLoading('Proceeding...');
        if(this.state.name == '') {
            Alert.alert('Enter your name');
            return Toast.hide();
        } else if(this.state.email == '') {
            Alert.alert('Enter your email');
            return Toast.hide();
        } else if(this.state.phone == '') {
            Alert.alert('Enter your phone');
            return Toast.hide();
        } else if(this.state.password == '') {
            Alert.alert('Enter your password');
            return Toast.hide();
        } else if(this.state.cpassword == '') {
            Alert.alert('Enter your confirm password');
            return Toast.hide();
        } else if(this.state.password != this.state.cpassword) {
            Alert.alert('Passwords do not match!');
            return Toast.hide();
        }
        else {
            const res = await axios.post(BASE_URL + 'create', {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
                password_confirmation: this.state.cpassword,
                account_type: this.state.account_type,
            })
            .then(response => {
                Toast.hide();
                if (response.data.success.token && response.data.success.id) {
                    AsyncStorage.setItem('userToken', response.data.success.token);
                    AsyncStorage.setItem('userId', JSON.stringify(response.data.success.id));
                    if (this.state.account_type === 'merchant') {
                        this.props.navigation.navigate('Merchant');
                    } else {
                        this.props.navigation.navigate('Buyer');
                    }
                } else {
                    Alert.alert(response.data.errors);
                }
            })
            .catch(error => {
                Toast.hide();
                throw error;
            });
        }
    }
    _login = async () => {
        this.props.navigation.navigate('LoginOption');
    }
}
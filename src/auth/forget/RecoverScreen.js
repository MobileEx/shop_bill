import React from 'react'
import {Alert, AsyncStorage, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextField} from 'react-native-material-textfield';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-tiny-toast';
import axios from 'axios';
import ForgetHeaderComponent from '../../utils/ForgetHeaderComponent';
import BASE_URL from '../../service/api';
import styles from '../../css/Styles';

export default class RecoverScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state={npassword: '', cpassword: '', id: ''}
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
                <SafeAreaView style={styles.container}>
                    <ForgetHeaderComponent></ForgetHeaderComponent>
                    <ScrollView style={styles.body}>
                        <View style={styles.headerTitle}>
                            <Text style={textStyles('#000000', 14, 20)}>Enter new password</Text>
                        </View>
                        <TextField
                            label='New password'
                            tintColor='#6699FF'
                            secureTextEntry={true}
                            value={this.state.npassword}
                            onChangeText={(npassword) => this.setState({ npassword }) }
                        />
                        <TextField
                            label='Confirm new Password'
                            tintColor='#6699FF'
                            secureTextEntry={true}
                            value={this.state.cpassword}
                            onChangeText={(cpassword) => this.setState({ cpassword }) }
                        />
                        <View style={styles.confirm}>
                            <LinearGradient
                                colors={['#6699FF', '#6e45e2']}
                                start={{ x: 0.7, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.linearGradient}>
                                <TouchableOpacity activeOpacity = { 0.5 }
                                    style={styles.gradientButton}
                                    onPress={this._confirm}>
                                    <Text style={textStyles('#FFFFFF', 20, 27)}>Confirm</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
    _confirm = async () => {
        Toast.showLoading('Proceeding...');
        if(this.state.npassword == '') {
            Alert.alert('Enter your New Password');
            return Toast.hide();
        } else if(this.state.cpassword == '') {
            Alert.alert('Enter your Confirm Password');
            return Toast.hide();
        } else {
            const res = await axios.post(BASE_URL + 'confirm-password', {
                email: this.state.email,
                password: this.state.password,
                id: this.state.id
            })
            .then(response => {
                Toast.hide();
                if (response.data.success.account_type) {
                    Alert.alert('Your password was successfully reset!');
                    this.props.navigation.navigate('Login', {role: response.data.success.account_type})
                } else {
                    Toast.hide();
                    Alert.alert(response.data.message);
                }
            })
            .catch(error => {
                Toast.hide();
                throw error;
            });
        }
    }
    _confirm = async () => {
        this.props.navigation.navigate('Forgot');
    }
}

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

export default class SendCodeScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state={email: ''}
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
                            <Text style={textStyles('#000000', 14, 20)}>Send a password reset code</Text>
                        </View>
                        <TextField
                            label='Email'
                            tintColor='#6699FF'
                            textContentType='emailAddress'
                            keyboardType='email-address'
                            value={this.state.email}
                            onChangeText={ (email) => this.setState({ email }) }
                        />
                        <View style={styles.pt5}>
                            <LinearGradient
                                colors={['#6699FF', '#6e45e2']}
                                start={{ x: 0.7, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.linearGradient}>
                                <TouchableOpacity activeOpacity = { 0.5 }
                                    style={styles.gradientButton}
                                    onPress={this._send_code}>
                                    <Text style={textStyles('#FFFFFF', 20, 27)}>Send code</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
    _send_code = async () => {
        Toast.showLoading('Loading...');
        if(this.state.email == '') {
            Alert.alert('Enter your Email');
            return Toast.hide();
        } else {
            const res = await axios.post(BASE_URL + 'forgot-password', {
                email: this.state.email
            })
            .then(response => {
                Toast.hide();
                // if (response.data.message == 'success') {
                    AsyncStorage.setItem('userEmail', this.state.email);
                    this.props.navigation.navigate('Reset');
                // } else {
                //     Toast.hide();
                //     Alert.alert(response.data.message);
                // }
            })
            .catch(error => {
                Toast.hide();
                throw error;
            });
        }
    }
}

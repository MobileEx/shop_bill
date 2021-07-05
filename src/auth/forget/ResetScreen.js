import React from 'react';
import {Alert, AsyncStorage, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-tiny-toast';
import axios from 'axios';
import ForgetHeaderComponent from '../../utils/ForgetHeaderComponent';
import BASE_URL from '../../service/api';
import styles from '../../css/Styles';

export default class ResetScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state={email: '', passcode: ''}
    }

    async componentDidMount(){
        var email =  AsyncStorage.getItem('userEmail');
        email.then((e)=>{
            this.setState({
                email: e
            });
        });
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
                            label='Passcode'
                            tintColor='#6699FF'
                            secureTextEntry={true}
                            value={this.state.passcode}
                            onChangeText={ (passcode) => this.setState({ passcode }) }
                        />
                        <View style={styles.leftText}>
                            <View style={styles.column}>
                                <Text style={textStyles('#000000')}>Passcode not received?</Text>
                            </View>
                            <TouchableOpacity activeOpacity = { 0.5 }
                                style={styles.column}
                                onPress={this._resendcode}>
                                <Text style={textStyles('#6699FF')}>Resend code</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pt3}>
                            <LinearGradient
                                colors={['#6699FF', '#6e45e2']}
                                start={{ x: 0.7, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.linearGradient}>
                                <TouchableOpacity activeOpacity = { 0.5 }
                                    style={styles.gradientButton}
                                    onPress={this._reset}>
                                    <Text style={textStyles('#FFFFFF', 20, 27)}>Reset</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
    _reset = async () => {
        Toast.showLoading('Loading...');
        if(this.state.passcode == '') {
            Alert.alert('Enter your Passcode');
            return Toast.hide();
        } else {
            const res = await axios.post(BASE_URL + 'reset-password', {
                email: this.state.email,
                passcode: this.state.passcode
            })
            .then(response => {
                Toast.hide();
                if (response.data.success.id) {
                    AsyncStorage.setItem('userId', JSON.stringify(response.data.success.id));
                    this.props.navigation.navigate('Recover');
                } else {
                    Toast.hide();
                    Alert.alert(response.data.error);
                }
            })
            .catch(error => {
                Toast.hide();
                throw error;
            });
        }
    }
    _resendcode = async () => {
        console.log(this.state.email);
        const res = await axios.post(BASE_URL + 'forgot-password', {
            email: this.state.email
        })
        .then(response => {
            Alert.alert('Have successfully resent the passcode to your mail inbox');
        })
        .catch(error => {
            throw error;
        });
        // this.props.navigation.navigate('Recover');
    }
}

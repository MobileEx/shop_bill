import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import LogoHeader from '../utils/LogoHeader';
import styles from '../css/Styles';

export default class LoginOptionScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const textStyles = function(myColor) {
            return {
                fontFamily: 'Futura',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 20,
                lineHeight: 27,
                color: myColor,
            }
        };
        return (
            <View style={styles.container}>
                <LogoHeader />
                <View style={styles.content}>
                    <View style={styles.welcome}>
                        <Text style={textStyles('#000000')}>
                            Welcome to ShoppersBill!
                        </Text>
                    </View>
                    <View style={styles.pt2}>
                        <LinearGradient
                            colors={['#6699FF', '#6e45e2']}
                            start={{ x: 0.7, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.linearGradient}>
                            <TouchableHighlight underlayColor='#FFFFFF'
                                style={styles.borderButton}
                                onPress={this._loginBuyer}>
                                <Text style={textStyles('#6699FF')}>Log in as buyer</Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    <View style={styles.pt2}>
                        <LinearGradient
                            colors={['#6699FF', '#6e45e2']}
                            start={{ x: 0.7, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.linearGradient}>
                            <TouchableHighlight underlayColor='#FFFFFF'
                                style={styles.borderButton}
                                onPress={this._loginMerchant}>
                                <Text style={textStyles('#6699FF')}>Log in as merchant</Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        );
    }
    _loginBuyer = async () => {
        this.props.navigation.navigate('Login', {role: 'buyer'});
    }
    _loginMerchant = async () => {
        this.props.navigation.navigate('Login', {role: 'merchant'});
    }
}

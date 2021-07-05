import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import LogoHeader from '../utils/LogoHeader';
import styles from '../css/Styles';
// import textStyles from '../../css/fontStyle';

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

export default class AuthScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
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
                                onPress={this._login}>
                                <Text style={textStyles('#6699FF')}>Log in</Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    <View style={styles.pt2}>
                        <LinearGradient
                            colors={['#6699FF', '#6e45e2']}
                            start={{ x: 0.7, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.linearGradient}>
                            <TouchableOpacity activeOpacity = { 0.5 }
                                style={styles.gradientButton}
                                onPress={this._register}>
                                <Text style={textStyles('#FFFFFF')}>Register for free</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
    _login = () => {
        this.props.navigation.navigate('LoginOption');
    }
    _register = () => {
        this.props.navigation.navigate('Register');
    }
}
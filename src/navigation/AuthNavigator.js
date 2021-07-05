import React from 'react';
import {Image, SafeAreaView} from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import AuthScreen from '../auth/AuthScreen';
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

class PrimaryScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.splash}>
                <Image source={require('../assets/shoppersbill.png')} />
            </SafeAreaView>
        );
    };
}

export default class AuthNavigator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true, isLoggedIn: false};
    }
    performTimeConsumingTask = async() => {
        return new Promise(resolve =>
            setTimeout(() => { resolve('result') }, 1000)
        );
    }
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
        this.setState({isLoading: false});
        }
    }

    render() {
        if (this.state.isLoading) {
            return <PrimaryScreen />;
        }
        return <AuthScreen navigation={this.props.navigation} />;
    }
}
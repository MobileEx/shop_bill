import React from 'react'
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native-elements';
import styles from '../css/Styles';


export default class LogoHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logoIcon: require('../assets/logo.png') };
    }
    
    render() {
        return (
            <SafeAreaView style={styles.head}>
                <Image style={styles.logoIcon} source={this.state.logoIcon} resizeMode="contain" />
            </SafeAreaView>
        );
    }
}
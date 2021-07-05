import React from 'react'
import { SafeAreaView, View } from 'react-native';
import { Image } from 'react-native-elements';
import styles from '../css/Styles';


export default class ForgetHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { forgetIcon: require('../assets/forget.png') };
    }
    
    render() {
        return (
            <SafeAreaView style={styles.head}>
                <View style={styles.normalFillCircle} />
                <View style={styles.normalBorderCircle}>
                    <Image source={this.state.forgetIcon}style={styles.forgetIcon} />
                </View>
                <View style={styles.largeFillCircle} />
            </SafeAreaView>
        );
    }
}
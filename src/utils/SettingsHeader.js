import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { Avatar, Icon, Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import styles from '../css/Styles';

const textStyles = {
    fontFamily: 'Futura',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 20,
    color: '#FFFFFF',
    paddingTop: 15
};

export default class SettingsHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userImage: require('../assets/logo.png'), pageName: 'Settings' };
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.settingHeader}>
                    <Text style={textStyles}>{this.state.pageName}</Text>
                    <View style={styles.avatarContainer}>
                        <Avatar size={wp(31)} rounded source={this.state.userImage} />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
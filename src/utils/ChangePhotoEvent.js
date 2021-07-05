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

export default class ChangePhotoEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            userImage: require('../assets/scan.png') ,
            pageName: ''
        };
    }

    // update = (e) => {
    //     this.setState({pageTitle: this.props.pageTitle});
    // };
    render() {
        return (
            <SafeAreaView>
                <View style={styles.settingHeader}>
                    <Text style={textStyles}>{this.state.pageName}</Text>
                    <View style={styles.avatarContainer}>
                        <TouchableOpacity onPress={() => this._changePhoto}>
                            <Avatar size={wp(31)} rounded source={this.state.userImage} activeOpacity={0.7} showEditButton
                                // onEditPress={() => console.log("dfsdfsd!")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
    _goback = async () => {
        this.props.navigation.goBack();
    }
    _logout = async () => {
        // try {
            this.props.navigation.navigate('LoginOption');
        //     await firebase.auth().signOut();
        //     navigate('Auth');
        // } catch (e) {
        //     console.log(e);
        // }
    }
    _changePhoto = async () => {
        // this.props.navigation.goBack();
    }
}
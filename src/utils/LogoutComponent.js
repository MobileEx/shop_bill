import React from 'react'
import { Alert, AsyncStorage, SafeAreaView, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import axios from 'axios';

import BASE_URL from '../service/api';
import LoginScreen from '../auth/login/LoginScreen';


const textStyles = function(myColor, myfontSize, mylineHeight ) {
    return {
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: myfontSize,
        lineHeight: mylineHeight,
        color: myColor,
    }
};

export default class LogoutComponent extends React.Component {

    static propTypes = {
        color: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = { color: this.props.color ? this.props.color : '#000000' };
        this._logout = this._logout.bind(this);
    }
    
    render() {
        if (this.state.color === '#000000') {
            return (
                <TouchableOpacity
                    style={{flexDirection: 'row', alignSelf: 'flex-end'}}
                    onPress={this._logout}>
                    <SafeAreaView style={{ flexDirection: 'column', borderRadius: 20, borderWidth: 1, borderColor: '#000000' }}>
                        <Icon name={'arrow-back'} size={14} color={'#000000'} style={{flexDirection: 'column'}}/>
                    </SafeAreaView>
                    <Text style={textStyles('#000000', 14, 16)}>  Logout</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    style={{flexDirection: 'row', alignSelf: 'flex-end', paddingRight: 15}}
                    onPress={this._logout}>
                    <SafeAreaView style={{ flexDirection: 'column', borderRadius: 20, borderWidth: 1, borderColor: '#FFFFFF' }}>
                        <Icon name={'arrow-back'} size={14} color={'#FFFFFF'} style={{flexDirection: 'column'}}/>
                    </SafeAreaView>
                    <Text style={textStyles('#FFFFFF', 14, 16)}>  Logout</Text>
                </TouchableOpacity>
            );
        }
    }

    _logout = async () => {
        const res = await axios.post(BASE_URL + 'logout', {
        })
        .then(response => {
            this.setState({spinner: false});
            if (response.data.message && response.data.message === 'Logged out!') {
                AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
                this.props.navigation.navigate('Auth');
            } else {
                Alert.alert('Error', 'Something wrong');
            }
        })
        .catch(error => {
            throw error;
        });
    }
}
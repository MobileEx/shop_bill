import React from 'react';
import { AsyncStorage, Alert, KeyboardAvoidingView, Modal, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { TextField } from 'react-native-material-textfield';
import { ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import ChangePhotoEvent from '../../../utils/ChangePhotoEvent';
import styles from '../../../css/Styles';
import axios from "axios";

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

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [], first_name: '', last_name: '', email:'', phone: '', name: '' };
        this._bootstrap();
    }

    _bootstrap = async () => {
        const userName = await AsyncStorage.getItem('userName');
        this.setState({name: userName});
    }

    async componentDidMount() {
        this.setState({ name: 'Jane Doe' });
    }

    render() {
        const { navigation } = this.props;  
        const pageTitle = navigation.getParam('pageTitle'); 
        return (
            <KeyboardAvoidingView behavior='' style={styles.wrapper}>
                <SafeAreaView style={styles.container}>
                    <ChangePhotoEvent pageName={pageTitle}></ChangePhotoEvent>
                    <View style={styles.settingBody}>
                        <View style={styles.centerAlign}>
                            <Text style={textStyles('#000000', 18, 20)}>{pageTitle}</Text>
                        </View>
                        <ScrollView>
                            <TextField
                                inputContainerStyle={{marginTop: -5}}
                                label='First Name'
                                tintColor='#6699FF'
                                textContentType='name'
                                keyboardType='default'
                                value={this.state.first_name}
                                onChangeText={(first_name) => this.setState({ first_name })}
                            />
                            <TextField
                                inputContainerStyle={{marginTop: -5}}
                                label='Last Name'
                                tintColor='#6699FF'
                                textContentType='name'
                                keyboardType='default'
                                value={this.state.last_name}
                                onChangeText={(last_name) => this.setState({ last_name })}
                            />
                            <TextField
                                inputContainerStyle={{marginTop: -5}}
                                label='Email'
                                tintColor='#6699FF'
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })}
                            />
                            <TextField
                                inputContainerStyle={{marginTop: -5}}
                                label='Phone Number'
                                tintColor='#6699FF'
                                textContentType='telephoneNumber'
                                keyboardType='phone-pad'
                                value={this.state.phone}
                                onChangeText={(phone) => this.setState({ phone })}
                            />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}
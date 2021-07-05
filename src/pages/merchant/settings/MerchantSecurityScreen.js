import React from 'react';
import { Alert, KeyboardAvoidingView, Modal, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { TextField } from 'react-native-material-textfield';
import { ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import SettingsHeader from '../../../utils/SettingsHeader';
import styles from '../../../css/Styles';
import axios from "axios";

const textStyles = function(myColor, myfontSize, mylineHeight, myfontWeight) {
    return {
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontWeight: myfontWeight,
        fontSize: myfontSize,
        lineHeight: mylineHeight,
        color: myColor,
    }
};

export default class MerchantSecurityScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [], oldpassword: '', newpassword: '', c_newpassword: '' };
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
        setTimeout(
            () => { resolve('result') },
            500
        )
        );
    }
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
        this.setState({ name: 'Jane Doe' });
        }
    }

    render() {
        const { navigation } = this.props;  
        const pageTitle = navigation.getParam('pageTitle'); 
        return (
            <SafeAreaView style={styles.container}>
                <SettingsHeader pageName={pageTitle}></SettingsHeader>
                <View style={styles.settingBody}>
                    <View style={styles.centerAlign}>
                        <Text style={textStyles('#000000', 18, 20, 'normal')}>{pageTitle}</Text>
                    </View>
                    <ScrollView>
                        <TextField
                            inputContainerStyle={{marginTop: -5}}
                            label='Password'
                            tintColor='#6699FF'
                            secureTextEntry={true}
                            value={this.state.oldpassword}
                            onChangeText={(oldpassword) => this.setState({ oldpassword })}
                        />
                        <TextField
                            inputContainerStyle={{marginTop: -5}}
                            label='New Password'
                            tintColor='#6699FF'
                            secureTextEntry={true}
                            value={this.state.newpassword}
                            onChangeText={(newpassword) => this.setState({ newpassword })}
                        />
                        <TextField
                            inputContainerStyle={{marginTop: -5}}
                            label='Confirm New Password'
                            tintColor='#6699FF'
                            secureTextEntry={true}
                            value={this.state.c_newpassword}
                            onChangeText={(c_newpassword) => this.setState({ c_newpassword })}
                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
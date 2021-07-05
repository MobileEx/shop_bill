import React from 'react';
import { Alert, KeyboardAvoidingView, Modal, Platform, SafeAreaView, Text, TextInput, View } from "react-native";
import { ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import ChangePhotoEvent from '../../../utils/ChangePhotoEvent';
import styles from '../../../css/Styles';
import axios from "axios";

const textStyles = function(myColor, myfontSize, mylineHeight, myfontWeight) {
    return {
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: myfontSize,
        lineHeight: mylineHeight,
        color: myColor,
    }
};

export default class BuyerNotificationScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { list: [] };
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
                <ChangePhotoEvent pageName={pageTitle}></ChangePhotoEvent>
                <View style={styles.settingBody}>
                    <View style={styles.centerAlign}>
                        <Text style={textStyles('#000000', 18, 20)}>{pageTitle}</Text>
                    </View>
                    <View style={styles.textFieldContainer}>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
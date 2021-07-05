import React from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Modal, Platform, SafeAreaView, Text, View } from "react-native";
import { SearchBar, ListItem } from 'react-native-elements'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import SettingsHeader from '../../utils/SettingsHeader';
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
const list = [
    {
        name: 'Business Information',
        routePath: 'Business'
    },
    {
        name: 'Login and Security',
        routePath: 'Security'
    },
    {
        name: 'Bank Details',
        routePath: 'BankDetails'
    },
    {
        name: 'Notifications',
        routePath: 'Notifications'
    },
];

export default class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [], name: '' };
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
        this.setState({ list: list });
        if (data !== null) {
        this.setState({ name: 'myBusiness Name' });
        }
    }

    renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity = { 0.5 }
            onPress={ () => this.props.navigation.navigate(item.routePath, {pageTitle: item.name}) }>
            <ListItem style={styles.pb1}
                containerStyle={styles.settingOption}
                title={item.name}
                avatartContainerStyle={styles.arrowIcon}
                chevron
                chevronColor={textStyles('#000000', 16, 18, 'normal')}
            />
        </TouchableOpacity>
        
    );
    
    keyExtractor = (item, index) => index.toString();
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SettingsHeader></SettingsHeader>
                <View style={styles.cardStyle}>
                    <View style={styles.profileName}>
                        <Text style={textStyles('#000000', 18, 20, 'bold')}>{this.state.name}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <SafeAreaView>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.list}
                            renderItem={this.renderItem}
                        />
                    </SafeAreaView>
                    <View style={styles.mt2}>
                        <LinearGradient
                            colors={['#6699FF', '#6e45e2']}
                            start={{ x: 0.7, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.helpButton}>
                            <TouchableHighlight underlayColor='#FFFFFF'
                                style={styles.helpborderButton}
                                onPress={ () => this.props.navigation.navigate('Auth') }>
                                <Text style={textStyles('#6699FF', 14, 16, 'normal')}>Help & Support</Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
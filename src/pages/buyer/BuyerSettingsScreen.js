import React from 'react';
import { Alert, AsyncStorage, FlatList, KeyboardAvoidingView, Modal, Platform, SafeAreaView, ScrollView, Text, View } from "react-native";
import { SearchBar, ListItem } from 'react-native-elements'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import SettingsHeader from '../../utils/SettingsHeader';
import styles from '../../css/Styles';
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
        name: 'Personal Information',
        routePath: 'Profile'
    },
    {
        name: 'Login and Security',
        routePath: 'Security'
    },
    {
        name: 'Bill Payment',
        routePath: 'Payment'
    },
    {
        name: 'Notifications',
        routePath: 'Notifications'
    },
];

export default class BuyerSettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [], name: '' };
        this._bootstrap();
    }

    _bootstrap = async () => {
        const userName = await AsyncStorage.getItem('userName');
        this.setState({name: "UserName"});
        // this.setState({name: userName});
    }

    async componentDidMount() {
        const role = this.props.navigation.getParam('role');
        this.setState({ list: list });
        
    }

    renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity = { 0.5 }
            onPress={ () => this.props.navigation.navigate(item.routePath, {pageTitle: item.name}) }>
            <ListItem
                containerStyle={styles.itemContainer}
                title={item.name}
                rightAvatar={{source: require('../../assets/arrow_forward.png'), size: 18}}
                titleStyle={{fontSize: 18}}
                chevronColor='#000000'
            />
        </TouchableOpacity>
        
    );
    
    keyExtractor = (item, index) => index.toString();
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SettingsHeader />
                <View style={styles.settingBody}>
                    <View style={styles.centerAlign}>
                        <Text style={textStyles('#000000', 18, 20, 'bold')}>{this.state.name}</Text>
                    </View>
                    <SafeAreaView>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.list}
                            renderItem={this.renderItem}
                        />
                    </SafeAreaView>
                    <View style={styles.mt3}>
                        <LinearGradient
                            colors={['#6699FF', '#6e45e2']}
                            start={{ x: 0.7, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.helpButton}>
                            <TouchableHighlight underlayColor='#FFFFFF'
                                style={styles.helpborderButton}
                                onPress={ () => this.props.navigation.push() }>
                                <Text style={textStyles('#6699FF', 14, 16, 'normal')}>Help & Support</Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
import React from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Modal, Platform, SafeAreaView, Text, View } from "react-native";
import { SearchBar, ListItem } from 'react-native-elements'
import LogoutComponent from '../../utils/LogoutComponent';
import styles from '../../css/Styles';
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

export default class InvoicesScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { list: [], search: '' };
    }

    componentDidMount() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
            this.setState({ list: response.data.results });
        });
    }

    renderItem = ({ item }) => (
        <ListItem style={styles.pb1}
            containerStyle={styles.boxWithShadow}
            title={item.name}
            subtitle={"Status: " + item.status}
            leftAvatar={{ source: { uri: item.image } }}
            onPress={() =>
                Alert.alert(
                    item.name,
                    `species: ${item.species}, \n status: ${item.status} \n location ${
                        item.location.name
                    }`
                )
            }
        />
    );
    keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <LogoutComponent />
                    <View style={styles.pt2}>
                        <Text style={textStyles('#000000', 18, 20)}>Invoices</Text>
                    </View>
                </View>
                <View style={styles.pt2}>
                    <SearchBar
                        containerStyle={styles.searchbarStyle}
                        inputStyle={styles.searchInputStyle}
                        lightTheme
                        onChangeText={this.state.search}
                        onClearText={this.state.search}
                        icon={{ type: 'font-awesome', name: 'search' }}
                        placeholder='Search for invoice' />
                </View>
                <View style={styles.body}>
                    <View style={styles.column}>
                        <Text style={styles.recentline}></Text>
                    </View>
                    <View style={styles.recentText}>
                        <Text style={textStyles('#6D6D6D', 18, 20)}>Recent</Text>
                    </View>
                    <SafeAreaView>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.list}
                            renderItem={this.renderItem}
                        />
                    </SafeAreaView>
                </View>
            </SafeAreaView>
        );
    }
}
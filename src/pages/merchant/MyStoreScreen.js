import React from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Modal, Platform, SafeAreaView, Text, View } from "react-native";
import { Button, ListItem, SearchBar } from 'react-native-elements'
import LogoutComponent from '../../utils/LogoutComponent';
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

export default class MyStoreScreen extends React.Component {
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
            <KeyboardAvoidingView behavior='' style={styles.wrapper}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <LogoutComponent />
                        {/* <View style={styles.pageTitle}>
                            <Text style={textStyles('#000000', 18, 20)}>My Store</Text>
                        </View> */}
                    </View>
                    <View style={styles.pt2}>
                        <SearchBar
                            containerStyle={styles.searchbarStyle}
                            inputStyle={styles.searchInputStyle}
                            lightTheme
                            // onChangeText={this.state.search}
                            onClearText={this.state.search}
                            icon={{ type: 'font-awesome', name: 'search' }}
                            placeholder='Search for invoice' />
                    </View>
                    <View style={styles.storeContent}>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Button
                                buttonStyle={styles.addproductButton}
                                titleStyle={textStyles('#FFFFFF', 12, 14, 'bold')}
                                title="Add product"
                            />
                        </View>
                        <SafeAreaView style={styles.mt1}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.list}
                                renderItem={this.renderItem}
                            />
                        </SafeAreaView>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}
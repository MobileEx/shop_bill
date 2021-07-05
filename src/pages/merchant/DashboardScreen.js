import React from 'react';
import { View, Text, FlatList, SafeAreaView, Alert } from "react-native";
import { Icon, Card, CardItem, List, ListItem } from 'react-native-elements'
import LogoutComponent from '../../utils/LogoutComponent';
import styles from '../../css/Styles';
import axios from "axios";
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      name: 'Invoices Issued',
      invoice_img: require('../../assets/invoice.png'),
      subtitle: '312'
    },
    {
      name: 'Amount Received',
      invoice_img: require('../../assets/card.png'),
      subtitle: '₦345,340.00'
    },
];

export default class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { list: [] };
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
                        <Text style={textStyles('#000000', 18, 20, 'normal')}>My Business Name</Text>
                    </View>
                </View>
                <Card containerStyle={styles.cardStyle}>
                    {
                        list.map((l, i) => {
                        return (
                            <ListItem
                                style={styles.cardItem}
                                containerStyle={{ backgroundColor: '#6699FF', borderRadius: 10 }}
                                titleStyle={textStyles('#FFFFFF', 18, 20, 'normal')}
                                subtitleStyle={textStyles('#FFFFFF', 24, 30, 'bold')}
                                key={i}
                                title={l.name}
                                subtitle={l.subtitle}
                                rightAvatar={{ source: l.invoice_img }}
                                roundAvatar={false}
                            />
                        );
                        })
                    }
                </Card>
                <View style={styles.dashboardContent}>
                    <View style={styles.column}>
                        <View style={styles.recentline}></View>
                    </View>
                    <View style={styles.recentText}>
                        <Text style={textStyles('#6D6D6D', 18, 20, 'normal')}>Recent</Text>
                    </View>
                    <SafeAreaView style={{backgroundColor: 'transparent'}}>
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
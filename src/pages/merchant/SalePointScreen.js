import React from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Modal, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { Badge, Button, Card, Icon, ListItem, SearchBar, withBadge } from 'react-native-elements';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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

const customtextStyles = function(myWidth) {
    return {
        zIndex: 2,
        paddingLeft: 5,
        left: 15,
        top: 7,
        width: myWidth,
        height: 12,
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 10,
        lineHeight: 12,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start'
    }
};

export default class SalePointScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false, cartValue: 0, description: '',  price: 0, amount: 0, search: '' };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _close = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    };

    // componentDidMount() {
    //     axios.get("https://rickandmortyapi.com/api/character").then(response => {
    //         this.setState({ list: response.data.results });
    //     });
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <LogoutComponent />
                    {/* <View style={styles.pageTitle}>
                        <Text style={textStyles('#000000', 18, 20)}>Point of Sale</Text>
                    </View> */}
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
                    <View style={{ paddingBottom: 5 }}>
                        <View style={styles.leftAlign, { top: 20 }}>
                            <Text style={textStyles('#6699FF', 12, 20, 'normal')}>Total</Text>
                        </View>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Text style={textStyles('#6699FF', 18, 20, 'normal')}>₦345,340.00</Text>
                        </View>
                    </View>
                    <View style={styles.cartStyle}>
                        <View style={{alignSelf: 'flex-start'}}>
                            <Text style={textStyles('#000000', 18, 20, 'bold')}>Cart</Text>
                        </View>
                    </View>
                    <Card containerStyle={styles.cartBox}>
                        <View style={styles.column}>
                            <Text style={textStyles('#000000', 20, 28, 'bold')}>HP Spectre laptop...</Text>
                            <Text style={textStyles('#000000', 14, 20, 'normal')}>₦172,670.00</Text>
                        </View>
                        <View style={styles.column}>
                            <Badge 
                                badgeStyle={styles.badgeStyle}
                                textStyle={textStyles('#6D6D6D', 12, 14, 'normal')}
                                value={'X ' + this.state.cartValue} />
                        </View>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Text style={textStyles('#6D6D6D', 18, 20, 'normal')}>₦345,340.00</Text>
                        </View>
                    </Card>
                    <View style={styles.cartStyle}>
                        <View style={{alignSelf: 'flex-end', alignItems: 'flex-end'}}>
                            <Text style={textStyles('#000000', 12, 20, 'normal')}><Text style={textStyles('#000000', 12, 20, '700')}>Sub-total: </Text> ₦345,340.00</Text>
                            <Text style={textStyles('#000000', 12, 20, 'normal')}><Text style={textStyles('#000000', 12, 20, '700')}>VAT: </Text> ₦18,500.00</Text>
                        </View>
                    </View>
                    <View>
                        <LinearGradient
                            colors={['#6699FF', '#6e45e2']}
                            start={{ x: 0.7, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.proceedButton}>
                            <TouchableHighlight underlayColor='#FFFFFF'
                                style={styles.proceedborderButton}
                                onPress={this._proceed}>
                                <Text style={textStyles('#6699FF', 20, 27, 'normal')}>Proceed</Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    <View style={{alignSelf: 'flex-end', alignItems: 'flex-end'}}>
                        <TouchableOpacity activeOpacity = { 0.5 }
                            onPress={this._add}>
                            <Badge 
                                badgeStyle={styles.plusButton} 
                                overlap='circle'
                                textStyle={textStyles('#FFFFFF', 40, 60, 'normal')}
                                value='+' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.modalBody}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}>
                        <View style={styles.modalContent}>
                            <View style={styles.row}>
                                <Text style={styles.additemText}>Add Item</Text>
                                <View style={styles.additemLine} />
                                <View style={styles.rightAlign}>
                                    <TouchableHighlight underlayColor='#FFFFFF'
                                            style={{alignSelf: 'flex-end'}}
                                            onPress={this._close}>
                                        <Icon name={'close'} size={15} />
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <ScrollView style={styles.mt2}>
                                <View>
                                    <Text style={customtextStyles(70)}>Description</Text>
                                    <TextInput style={styles.textInput}
                                        placeholder="Compaque wireless mouse"
                                        onChangeText={(description) => this.setState({description})}  
                                    />
                                </View>
                                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                                    <View>
                                        <Text style={customtextStyles(35)}>Price</Text>
                                        <TextInput style={styles.customInput}
                                            placeholder="₦0.00"  
                                            onChangeText={(price) => this.setState({price})}  
                                        />
                                    </View>
                                    <View style={{marginLeft: 40}}>
                                        <Text style={customtextStyles(55)}>Quantity</Text>
                                        <TextInput style={styles.customInput} 
                                            placeholder="10"  
                                            onChangeText={(amount) => this.setState({amount})}  
                                        />
                                    </View>
                                    
                                </View>
                            </ScrollView>
                            <View style={styles.mt2}>
                                <LinearGradient
                                    colors={['#6699FF', '#6e45e2']}
                                    start={{ x: 0.7, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.cartlinearGradient}>
                                    <TouchableOpacity activeOpacity = { 0.5 }
                                        style={styles.addCartButton}
                                        onPress={this._addCart}>
                                        <Text style={textStyles('#FFFFFF', 15, 20, 'normal')}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </Modal>
                </View>
            </SafeAreaView>
        );
    }
    _add = () => {
        this.setModalVisible(true);
    }
    _addCart = () => {
        this.setState({
            cartValue: this.state.cartValue + 1
        });
    }
    _proceed = () => {
        this.setState({
            cartValue: this.state.cartValue + 1
        });
    }
}
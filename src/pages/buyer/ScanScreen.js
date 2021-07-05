import React from 'react';
import { AppRegistry, Linking, Platform, PermissionsAndroid, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import { BarcodeMask } from 'react-native-barcode-mask';

import LogoutComponent from '../../utils/LogoutComponent';
import styles from '../../css/Styles'

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

export default class ScanScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            QR_Code_Value: '',
            Start_Scanner: false,
        };
    }
    onSuccess(e) {
        Linking
        .openURL(e.data)
        .catch(err => console.error('An error occured', err));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <LogoutComponent />
                    <View style={styles.pageTitle}>
                        <Text style={textStyles('#000000', 18, 20, 'normal')}>Scan</Text>
                    </View>
                </View>
                <View style={styles.QRMainContainer}>
                    <QRCodeScanner
                        onRead={this.onSuccess.bind(this)}
                        bottomContent={
                            <View style={styles.QR_Content}>
                                <TouchableOpacity activeOpacity = { 0.5 }
                                    style={styles.capture}
                                    onPress={this.open_QR_Code_Scanner}>
                                    <Text style={textStyles('#FFF', 14, 16, 'normal')}>Open QR Scanner</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                    
                        {/* <BarcodeMask width={300} height={100} /> */}
                        {/* <BarcodeMask edgeColor={'#62B1F6'} showAnimatedLine={false}/> */}
                        {/* <BarcodeMask width={100} height={300} showAnimatedLine={false} transparency={0.8}/> */}
                        {/* <BarcodeMask width={300} height={100} edgeBorderWidth={1} /> */}
                    {/* </RNCamera> */}
                    
                </View>
            </SafeAreaView>
        );
    }
    open_QR_Code_Scanner = async() => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };
}
AppRegistry.registerComponent('default', () => ScanScreen);

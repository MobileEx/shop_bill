import { StyleSheet, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        height: hp(100),
        width: wp(100),
        backgroundColor: '#FFFFFF',
        alignSelf: 'stretch',
    },
    leftAlign: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rightAlign: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    centerAlign: {
        alignSelf: 'center',
    },
    head: {
        height: hp('25%'), // 25% of height device screen
        flexDirection: 'row',
        backgroundColor: '#6699FF',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        width: wp('70%'),  // 70% of width device screen
        height: hp('8%'), // 8% of height device screen
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        marginTop: 30,
        marginBottom: 60,
        alignSelf: 'center',
    },
    splash: {
        flex: 1,
        height: wp(100),
        width: wp(100),
        backgroundColor: '#6699FF',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoIcon: {
        marginBottom: 15,
        height: wp(30),
        width: wp(30),
        opacity: 0
    },
    pt1: {paddingTop: 10},
    pt2: {paddingTop: 20},
    pt3: {paddingTop: 30},
    pt4: {paddingTop: 40},
    pt5: {paddingTop: 50},
    pb1: {paddingBottom: 10},
    pb2: {paddingBottom: 20},
    pb3: {paddingBottom: 30},
    pb4: {paddingBottom: 40},
    pb5: {paddingBottom: 50},
    mt1: {marginTop: 10},
    mt2: {marginTop: 20},
    mt3: {marginTop: 30},
    mt4: {marginTop: 40},
    mt5: {marginTop: 50},
    mb1: {marginBottom: 10},
    mb2: {marginBottom: 20},
    mb3: {marginBottom: 30},
    mb4: {marginBottom: 40},
    mb5: {marginBottom: 50},
    gradientButton: {
        width: wp('70%'),  // 70% of width device screen
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    borderButton: {
        width: wp('69%'),  // 69% of width device screen
        height: hp('7.5%'), // 7.5% of height device screen
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    normalFillCircle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: wp(28),
        height: wp(28),
        borderRadius: wp(28)/2,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    }, 
    largeFillCircle: {
        position: 'absolute',
        bottom: 35,
        right: -25,
        height: wp(34),
        width: wp(34),
        borderRadius: wp(34)/2,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        opacity: 1
    }, 
    loginIcon: {
        marginBottom: 15,
        height: wp(31),
        width: wp(31),
    },
    login: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    column: {
        flexDirection: 'column',
    }, 
    body: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    header: {
        paddingTop: hp(5),
        paddingLeft: 15,
        paddingRight: 15,
    },
    searchbarStyle: {
        padding: 0,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
    }, 
    searchInputStyle: {
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 18,
        color: '#C4C4C4',
        padding: 0,
    },
    spinnerTextStyle: {
        textAlign: 'center'
    },
    recentText: {
        paddingBottom: 15,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    recentline: {
        width: (Platform.OS) === 'ios' ? wp('75%') : wp('70%'),
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },

    /* Forget Styles */
    forgetIcon: {
        marginBottom: 15,
        width: wp(31),
        height: wp(31),
        opacity: 0
    },
    leftText: {
        flexDirection: 'row',
        paddingTop: 15,
        alignSelf: 'flex-end'
    },
    confirm: {
        paddingTop: 60,
        alignSelf: 'center'
    },

    /* Settings Styles */
    settingHeader: {
        height: Platform.OS === 'ios' ? 140 : 110,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#6699FF',
    },
    settingBody: {
        padding: 15,
        marginTop: wp(38)/2,
    },
    avatarContainer: {
        top: Platform.OS === 'ios' ? 30 : 0,
        width: wp(38),
        height: wp(38),
        borderRadius: wp(38)/2,
        borderWidth: 1,
        borderColor: '#6699FF',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    helpButton: {
        width: wp(40),   // 35% of width device screen
        height: hp(6),   // 80% of height device screen
        borderRadius: wp(30)/2,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    helpborderButton: {
        width: wp(39),     // 34% of width device screen
        height: hp(5.5),   // 5.5% of height device screen
        borderRadius: wp(28)/2,
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addCartButton: {
        width: wp(35),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    itemContainer: {
        padding: 0,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    navbarIcon: {
        width: wp(8),
        height: wp(8),
    },

    //--------------  Merchant Styles -------------------------

    row: {
        flexDirection: 'row',
    }, 
    bottomNavIcon: {
        width: 110,
        height: 110,
        backgroundColor: 'red'
        // opacity: 0
    },
    logout: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    logoutText: {
        flexDirection: 'column',
        paddingLeft: 10,
    },
    boxWithShadow: {
        margin: 1,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.15,
        shadowRadius: 2.5,
        elevation: 5,
        borderRadius: 5
    },
    tabBoxWithShadow: {
        marginTop: 3,
        borderTopWidth:1,
        borderWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 15},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
        borderTopColor:'#D3D3D3',
        borderRadius: 5
    },

    /* Dashboard Styles */
    dashboardContent: {
        width: wp(100),
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        backgroundColor: '#F1F6FF',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
    },
    headerTitle: {
        paddingTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardStyle: {
        backgroundColor: 'transparent',
        padding: 0,
        borderWidth: 0,
        alignSelf: 'stretch',
    },
    cardItem: {
        paddingBottom: 15,
        marginBottom: 0
    },

    /* Point of Sale Styles */
    cartStyle: {
        paddingTop: 20,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderTopColor: '#DADADA',
        alignSelf: 'stretch',
    },
    cartBox: {
        margin: 0,
        borderWidth: 0,
        borderTopColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5
    },
    badgeStyle: {
        backgroundColor: '#D0E0FF',
        alignSelf: 'flex-end',
        bottom: 45,
        padding: 2
    },
    plusButton: {
        backgroundColor: '#6699FF',
        width: wp(15),
        height: wp(15),
        borderRadius: wp(15)/2
    },
    proceedButton: {
        width: wp(50),
        height: hp(8),
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    proceedborderButton: {
        width: wp(49),
        height: hp(7.5),
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBody: {
        width: wp(100),
        height: hp(100),
        opacity: 0.8,
        alignSelf: 'auto',
        alignItems: 'stretch',
    },
    modalContent: {
        margin: hp(20),
        padding: 15,
        position: 'absolute',
        width: wp(95),
        height: (Platform.OS) === 'ios' ? hp(35) : hp(45),
        shadowColor: '#000',
        borderTopColor: '#000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        alignItems: 'stretch',
    },
    cartlinearGradient: {
        width: wp(35),
        height: hp(7),
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addCartButton: {
        width: wp(35),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    additemText: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    additemLine: {
        flex: 3,
        marginRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        padding: 15,
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 20,
        color: '#000000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    customInput: {
        zIndex: 1,
        width: wp(38),
        padding: 15,
        flexDirection: 'column',
        fontFamily: 'Futura',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 20,
        color: '#000000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },

    /* My Store Styles */
    addproductButton: {
        width: wp(30),
        height: hp(6),
        borderRadius: wp(20)/2,
        backgroundColor: '#6699FF',
    },
    storeContent: {
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
    },

    // ---------------------- Buyer Styles -------------------------------

    /* Scan Styles */
    QRMainContainer: {
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    QR_Content: {
        flex: 0,
        width: wp(50),
        height: wp(50),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    QR_text: {
        color: '#000',
        fontSize: 19,
        padding: 8,
        marginTop: 12
    },
    qrButton: {
        backgroundColor: '#2979FF',
        alignItems: 'center',
        padding: 12,
        width: 300,
        marginTop: 14
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
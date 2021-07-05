import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

/** Authentication */
import LoginOptionScreen from './src/auth/LoginOptionScreen';
import RecoverScreen from './src/auth/forget/RecoverScreen';
import ResetScreen from './src/auth/forget/ResetScreen';
import SendCodeScreen from './src/auth/forget/SendCodeScreen';
import LoginScreen from './src/auth/login/LoginScreen';
import RegisterScreen from './src/auth/register/RegisterScreen';
import AuthNavigator from './src/navigation/AuthNavigator';

/** Buyer Screen */
import InvoicesScreen from './src/pages/buyer/InvoicesScreen';
import ScanScreen from './src/pages/buyer/ScanScreen';
import BuyerSettingsScreen from './src/pages/buyer/BuyerSettingsScreen';
import ProfileScreen from './src/pages/buyer/settings/ProfileScreen';
import BuyerSecurityScreen from './src/pages/buyer/settings/BuyerSecurityScreen';
import PaymentScreen from './src/pages/buyer/settings/PaymentScreen';
import BuyerNotificationScreen from './src/pages/buyer/settings/BuyerNotificationScreen';


/** Merchant Screen */
import DashboardScreen from './src/pages/merchant/DashboardScreen';
import SalePointScreen from './src/pages/merchant/SalePointScreen';
import MyStoreScreen from './src/pages/merchant/MyStoreScreen';
import MerchantSettingsScreen from './src/pages/merchant/MerchantSettingsScreen';
import BusinessScreen from './src/pages/merchant/settings/BusinessScreen';
import MerchantSecurityScreen from './src/pages/merchant/settings/MerchantSecurityScreen';
import BankDetailScreen from './src/pages/merchant/settings/BankDetailScreen';
import MerchantNotificationScreen from './src/pages/merchant/settings/MerchantNotificationScreen';

import LogoutComponent from './src/utils/LogoutComponent';
import styles from './src/css/Styles';

/** Authentication Stack Navigator */
const AuthStack = createStackNavigator(
  {
    Landing: {
      screen: AuthNavigator,
    },
    LoginOption: {
      screen: LoginOptionScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    SendCode: {
      screen: SendCodeScreen,
    },
    Reset: {
      screen: ResetScreen,
    },
    Recover: {
      screen: RecoverScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    initialRouteName: 'Landing',
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      let tintcolor;
      let backgroundcolor;
      if (routeName === 'Register') {
        tintcolor = '#6699FF';
        backgroundcolor = '#FFFFFF';
      } else if (
        routeName === 'LoginOption' ||
        routeName === 'Login' ||
        routeName === 'SendCode' ||
        routeName === 'Reset' ||
        routeName === 'Recover'
      ) {
        tintcolor = '#FFFFFF';
        backgroundcolor = '#6699FF';
      } else if (routeName === 'Landing') {
        tintcolor = '#6699FF';
        backgroundcolor = '#6699FF';
      }
      return {
        title: null,
        headerTintColor: tintcolor,
        headerStyle: {
          backgroundColor: backgroundcolor,
          elevation: 0,
        },
        ...TransitionPresets.SlideFromRightIOS,
      };
    },
  },
);

/** Buyer Settings Stack Navigator */
const BuyerSettings = createStackNavigator(
    {
        //Defination of Navigaton from Settings Screen
        Settings: { screen: (props) => <BuyerSettingsScreen {...props} role="Buyer" /> },
        Profile: { screen: ProfileScreen,  },
        Security: { screen: BuyerSecurityScreen },
        Payment: { screen: PaymentScreen },
        Notifications: { screen: BuyerNotificationScreen },
    },
    {
        initialRouteName: 'Settings',
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            let tintcolor;
            let backgroundcolor;
            if (routeName === 'Settings') {
                tintcolor = '#6699FF';
                backgroundcolor = '#6699FF';
                
            } else {
                tintcolor = '#FFFFFF';
                backgroundcolor = '#6699FF';
            }
            return {
                headerTitle: () => null,
                headerTintColor: tintcolor,
                headerStyle: {
                    backgroundColor: backgroundcolor,
                    elevation: 0 
                },
                headerRight: () => <LogoutComponent color='#FFFFFF' />,
                ...TransitionPresets.SlideFromRightIOS,
            }
        },
    }
);

/** Buyer Tab Navigator */
const BuyerTabNavigator = createBottomTabNavigator(
    {
        Invoices: { screen: InvoicesScreen },
        Scan: { screen: ScanScreen },
        Settings: { screen: BuyerSettings },
    },
    {
        
        initialRouteName: 'Invoices',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Invoices') {
                    return (
                        <Image
                            source={
                                focused
                                ? require('./src/assets/books-active.png')
                                : require('./src/assets/books.png')
                            }
                            style={styles.navbarIcon}
                        />
                    );
                } else if (routeName === 'Scan') {
                    return (
                        <Image
                            source={
                                focused
                                ? require('./src/assets/scan-active.png')
                                : require('./src/assets/scan.png')
                            }
                            style={styles.navbarIcon}
                        />
                    );
                } else if (routeName === 'Settings') {
                    return (
                        <Image
                            source={
                                focused
                                ? require('./src/assets/setting-active.png')
                                : require('./src/assets/setting.png')
                            }
                            style={styles.navbarIcon}
                        />
                    );
                }
            },
        }),
        tabBarOptions: {
            style: {
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
            indicatorStyle: {
                backgroundColor: '#D3D3D3',
            },
        },
        animationEnabled: true,
        swipeEnabled: false
    }
);

/** Merchant Settings Stack Navigator */
const MerchantSettings = createStackNavigator(
    {
        //Defination of Navigaton from setting Screen
        Settings: { screen: MerchantSettingsScreen },
        Business: { screen: BusinessScreen },
        Security: { screen: MerchantSecurityScreen },
        BankDetails: { screen: BankDetailScreen },
        Notifications: { screen: MerchantNotificationScreen },
        LoginOption: { screen: LoginOptionScreen },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            let tintcolor;
            let backgroundcolor;
            if (routeName === 'Settings') {
                tintcolor = '#6699FF';
                backgroundcolor = '#6699FF';
                
            } else {
                tintcolor = '#FFFFFF';
                backgroundcolor = '#6699FF';
            }
            return {
                headerTitle: () => null,
                headerTintColor: tintcolor,
                headerStyle: {
                    backgroundColor: backgroundcolor,
                    elevation: 0 
                },
                headerRight: () => <LogoutComponent color='#FFFFFF' />,
                ...TransitionPresets.SlideFromRightIOS,
            }
        },
    }
);

/** Merchant Tab Navigator */
const MerchantTabNavigator = createBottomTabNavigator(
    {
        Dashboard: { screen: DashboardScreen },
        SalePoint: {
            screen: SalePointScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Point of Sale',
            }),
        },
        MyStore: {
            screen: MyStoreScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'My Store',
            }),
        },
        Settings: { screen: MerchantSettings },
    },
    {
        headerMode: 'none',
        initialRouteName: 'Dashboard',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Dashboard') {
                    return (
                        <Image
                            source={
                                focused
                                ? require('./src/assets/books-active.png')
                                : require('./src/assets/books.png')
                            }
                            style={styles.navbarIcon}
                        />
                    );
                } else if (routeName === 'SalePoint') {
                    return (
                        <Image
                            source={
                                focused
                                ? require('./src/assets/sale-active.png')
                                : require('./src/assets/sale.png')
                            }
                            style={styles.navbarIcon}
                        />
                    );
                } else if (routeName === 'MyStore') {
                    return (
                        <Image
                            source={
                                focused
                                ? require('./src/assets/mystore-active.png')
                                : require('./src/assets/mystore.png')
                            }
                            style={styles.navbarIcon}
                        />
                    );
                } else if (routeName === 'Settings') {
                    return (
                        <Image
                            source={
                                focused
                                ? require('./src/assets/setting-active.png')
                                : require('./src/assets/setting.png')
                            }
                            style={styles.navbarIcon}
                        />
                    );
                }
            },
        }),
        tabBarOptions: {
            style: {
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
            indicatorStyle: {
                backgroundColor: '#D3D3D3',
            },
        },
        animationEnabled: true,
        swipeEnabled: true
    }
);

const AppNavigator = createSwitchNavigator({
  Auth: {
    screen: AuthStack,
  },
  Buyer: {
    screen: BuyerTabNavigator,
  },
  Merchant: {
    screen: MerchantTabNavigator,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 1500),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({isLoading: false});
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <SafeAreaView style={styles.splash}>
          <Image source={require('./src/assets/splash.png')} />
        </SafeAreaView>
      );
    }
    return <AppContainer navigation={this.props.navigation} />;
  }
}

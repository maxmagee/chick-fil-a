import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import colors from './colors';

import IntroScreen from '../screens/IntroScreen';
import FindScreen from '../screens/FindScreen';
import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomeScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyCardScreen from '../screens/MyCardScreen';

export const MainTabNavigator = createBottomTabNavigator(
  {
    Find: {
      screen: FindScreen
    },
    Menu: {
      screen: MenuScreen
    },
    Home: {
      screen: HomeScreen
    },
    MyOrder: {
      screen: MyOrderScreen,
      navigationOptions: {
        tabBarLabel: 'My Order'
      }
    },
    MyCard: {
      screen: MyCardScreen,
      navigationOptions: {
        tabBarLabel: 'My Card'
      }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: colors.red,
      activeBackgroundColor: colors.white,
      inactiveTintColor: colors.darkGray,
      inactiveBackgroundColor: colors.white,
      labelStyle: {
        fontSize: 14,
        fontFamily: 'Arial'
      }
    },
    navigationOptions: ({ navigation }) => ({
      //eslint-disable-next-line no-unused-vars
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Find':
            return <Ionicons name="md-pin" size={30} color={tintColor} />;
          case 'Menu':
            return <Ionicons name="ios-restaurant" size={30} color={tintColor} />;
          case 'Home':
            return <Ionicons name="ios-home" size={30} color={tintColor} />;
          case 'MyOrder':
            return <SimpleLineIcons name="bag" size={30} color={tintColor} />;
          case 'MyCard':
            return <SimpleLineIcons name="credit-card" size={30} color={tintColor} />;
          default:
            break;
        }
      }
    })
  }
);

export const IntroSwitchNavigator = createSwitchNavigator(
  {
    Intro: {
      screen: IntroScreen
    },
    MainTabs: {
      screen: MainTabNavigator
    }
  },
  {
    initialRouteName: 'Intro'
  }
);

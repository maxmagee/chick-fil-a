import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import colors from '../colors';

import { HomeScreen, FindScreen, MenuScreen, MyCardScreen, MyOrderScreen } from '../../screens';

const MainTabNavigator = createBottomTabNavigator(
  {
    Find: {
      screen: FindScreen,
      navigationOptions: {
        tabBarLabel: 'Find',
        tabBarIcon: ({ tintColor }) => <Ionicons name="md-pin" size={30} color={tintColor} />
      }
    },
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-restaurant" size={30} color={tintColor} />
        )
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor} />
      }
    },
    MyOrder: {
      screen: MyOrderScreen,
      navigationOptions: {
        tabBarLabel: 'My Order',
        tabBarIcon: ({ tintColor }) => <SimpleLineIcons name="bag" size={30} color={tintColor} />
      }
    },
    MyCard: {
      screen: MyCardScreen,
      navigationOptions: {
        tabBarLabel: 'My Card',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="credit-card" size={30} color={tintColor} />
        )
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
    }
  }
);

export default MainTabNavigator;

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import IntroStackNavigator from './IntroStackNavigator';
import MainTabNavigator from './MainTabNavigator';
import SignupStackNavigator from './SignupStackNavigator';

const ModalStackNavigator = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator },
    SignupStackNavigator: { screen: SignupStackNavigator },
    IntroStackNavigator: { screen: IntroStackNavigator }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

const RootNavigator = createSwitchNavigator({
  IntroStackNavigator,
  ModalStackNavigator
});

export default RootNavigator;

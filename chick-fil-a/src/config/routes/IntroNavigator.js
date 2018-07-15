import { createSwitchNavigator } from 'react-navigation';

import { IntroScreen } from '../../screens';
import MainTabNavigator from '../routes/MainTabNavigator';

const IntroNavigator = createSwitchNavigator({
  Intro: IntroScreen,
  MainTabs: MainTabNavigator
});

export default IntroNavigator;

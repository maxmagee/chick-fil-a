import { createStackNavigator } from 'react-navigation';

import { IntroScreen } from '../../screens';

const IntroStackNavigator = createStackNavigator({
  Intro: {
    screen: IntroScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default IntroStackNavigator;

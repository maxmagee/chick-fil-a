import { createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, navigationHeaderTitle } from '../globalStyles';
import { HomeScreen, HelpScreen, OptionsScreen, QAScreen } from '../../screens';

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerBackTitle: 'Home'
    })
  },
  Options: {
    screen: OptionsScreen,
    navigationOptions: () => ({
      title: 'Chick-fil-A One',
      headerTitleStyle: styles.headerTitle,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.blue
      }
    })
  },
  Help: {
    screen: HelpScreen,
    navigationOptions: () => ({
      title: 'Get Help',
      headerTitleStyle: styles.headerTitle,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.red
      }
    })
  },
  QA: {
    screen: QAScreen,
    navigationOptions: () => ({
      title: 'QA',
      headerTitleStyle: styles.headerTitle,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.white
      }
    })
  }
});

const styles = EStyleSheet.create({
  headerTitle: {
    fontFamily: navigationHeaderTitle.fontFamily,
    fontSize: navigationHeaderTitle.fontSize,
    fontWeight: navigationHeaderTitle.fontWeight
  }
});

export default HomeStackNavigator;

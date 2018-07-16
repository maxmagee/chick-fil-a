import { createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, navigationHeaderTitle } from '../globalStyles';
import { HomeScreen, OptionsScreen } from '../../screens';

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

import { createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, navigationHeaderTitle } from '../globalStyles';

import { HomeScreen } from '../../screens';
import {
  GiveFeedbackContactFormScreen,
  GiveFeedbackFormScreen,
  GiveFeedbackListScreen,
  HelpScreen,
  LegalScreen,
  LicenseScreen,
  NotificationScreen,
  OptionsScreen,
  PrivacyScreen,
  QAScreen
} from '../../screens/about';

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerBackTitle: 'Home',
        header: null
      })
    },
    Options: {
      screen: OptionsScreen,
      navigationOptions: () => ({
        title: 'Chick-fil-A One',
        headerBackTitle: 'Back',
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
        headerTitleStyle: styles.headerTitle,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.red
        }
      })
    },
    Legal: {
      screen: LegalScreen,
      navigationOptions: () => ({
        title: 'Legal',
        headerTitleStyle: styles.headerTitle,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.red
        }
      })
    },
    Notifications: {
      screen: NotificationScreen,
      navigationOptions: () => ({
        title: 'Notifications',
        headerTitleStyle: styles.headerTitle,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.red
        }
      })
    },
    Privacy: {
      screen: PrivacyScreen,
      navigationOptions: () => ({
        title: 'Privacy',
        headerTitleStyle: styles.headerTitle,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.red
        }
      })
    },
    FeedbackList: {
      screen: GiveFeedbackListScreen,
      navigationOptions: () => ({
        title: 'Give Feedback',
        headerBackTitle: 'Back',
        headerTintColor: colors.red,
        headerStyle: {
          backgroundColor: colors.white
        },
        headerTitleStyle: [styles.headerTitle, { color: colors.darkGray }],
        headerBackTitleStyle: {
          color: colors.red
        }
      })
    },
    FeedbackForm: {
      screen: GiveFeedbackFormScreen,
      navigationOptions: () => ({
        title: 'Give Feedback',
        headerTintColor: colors.red,
        headerStyle: {
          backgroundColor: colors.white
        },
        headerTitleStyle: [styles.headerTitle, { color: colors.darkGray }],
        headerBackTitleStyle: {
          color: colors.red
        }
      })
    },
    FeedbackContactForm: {
      screen: GiveFeedbackContactFormScreen,
      navigationOptions: () => ({
        title: 'Give Feedback',
        headerTintColor: colors.red,
        headerStyle: {
          backgroundColor: colors.white
        },
        headerTitleStyle: [styles.headerTitle, { color: colors.darkGray }],
        headerBackTitleStyle: {
          color: colors.red
        }
      })
    },
    Licenses: {
      screen: LicenseScreen,
      navigationOptions: () => ({
        title: 'Licenses',
        headerTitleStyle: styles.headerTitle,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.red
        }
      })
    }
  },
  {
    headerMode: 'screen'
  }
);

const styles = EStyleSheet.create({
  headerTitle: {
    fontFamily: navigationHeaderTitle.fontFamily,
    fontSize: navigationHeaderTitle.fontSize,
    fontWeight: navigationHeaderTitle.fontWeight
  }
});

export default HomeStackNavigator;

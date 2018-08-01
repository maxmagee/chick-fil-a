import EStyleSheet from 'react-native-extended-stylesheet';

import colors from './config/colors';

import RootNavigator from './config/routes/RootNavigator';

EStyleSheet.build({
  $darkGray: colors.darkGray,
  $green: colors.green,
  $lightGray: colors.lightGray,
  $red: colors.red
  // DEBUG ONLY BELOW
  // $outline: 1
});

export default RootNavigator;

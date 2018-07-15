import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import colors from './config/colors';

import { IntroSwitchNavigator } from './config/routes';

EStyleSheet.build({
  $darkGray: colors.darkGray,
  $green: colors.green,
  $lightGray: colors.lightGray,
  $red: colors.red
  // DEBUG ONLY BELOW
  // $outline: 1
});

export default () => <IntroSwitchNavigator />;

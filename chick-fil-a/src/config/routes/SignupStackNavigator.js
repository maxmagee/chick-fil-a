import { createStackNavigator } from 'react-navigation';

import { SignUpMethodScreen } from '../../screens/authentication';

const SignupStackNavigator = createStackNavigator({
  Signup: {
    screen: SignUpMethodScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default SignupStackNavigator;

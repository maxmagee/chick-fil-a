import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class SignUpMethodScreen extends Component {
  handleCancel = () => {
    this.props.navigation.navigate('MainTabNavigator');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign up screen</Text>
        <Button title="Cancel" onPress={this.handleCancel} />
      </View>
    );
  }
}

export default SignUpMethodScreen;

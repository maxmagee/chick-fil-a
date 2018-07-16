import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class HomeScreen extends Component {
  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleOptionsPress} title="Options" />
        <Text style={styles.text}>Home</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Arial'
  }
});

export default HomeScreen;

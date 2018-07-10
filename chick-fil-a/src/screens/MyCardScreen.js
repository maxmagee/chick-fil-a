import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class MyCardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My Card</Text>
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

export default MyCardScreen;

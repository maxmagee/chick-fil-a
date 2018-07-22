import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, heading } from '../config/globalStyles';

class GiveFeedbackForm extends Component {
  static navigationOptions = {
    tabBarVisisble: false
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.titleContainer}>
          <View style={styles.titleContainerInner}>
            <Text style={styles.titleText}>
              Share a story or let us know how we can improve your experience.
            </Text>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <Input
            multiline
            placeholder="Tap here to enter comments."
            placeholderTextColor={colors.lightGray}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  titleContainer: {
    height: 70,
    width: 275,
    padding: 10,
    alignSelf: 'center'
  },
  titleContainerInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontFamily: heading.fontFamily,
    fontSize: heading.fontSize,
    fontWeight: heading.fontWeight,
    textAlign: 'center',
    color: colors.darkGray
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    paddingBottom: 30
  },
  inputContainerStyle: {
    height: '100%',
    backgroundColor: colors.white,
    borderColor: colors.darkGray,
    borderWidth: 1,
    padding: 10
  },
  inputStyle: {
    height: '100%',
    backgroundColor: colors.white,
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'normal',
    color: colors.darkGray,
    marginLeft: 0,
    paddingTop: 0
  }
});

export default GiveFeedbackForm;

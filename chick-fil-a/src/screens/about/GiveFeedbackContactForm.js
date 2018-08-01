import React, { Component } from 'react';
import { Button, KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Hoshi } from 'react-native-textinput-effects';

import {
  colors,
  heading,
  headerRightButtonContainer,
  inputText,
  paragraphText
} from '../../config/globalStyles';

class GiveFeedbackContactForm extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: navigation.getParam('getHeaderRight')
  });

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: ''
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ getHeaderRight: this.renderHeaderRight(false) });
  }

  handleHeaderRightPress = () => {
    this.props.navigation.navigate('Options');
  };

  updateHeader = () => {
    // Simple validation of having something in each field.
    const { firstName, lastName, emailAddress, phoneNumber } = this.state;
    const enableSend = firstName && lastName && emailAddress && phoneNumber;

    this.props.navigation.setParams({
      getHeaderRight: this.renderHeaderRight(enableSend)
    });
  };

  renderHeaderRight = enabled => (
    <View style={headerRightButtonContainer}>
      <Button
        color={colors.red}
        title="Send"
        disabled={!enabled}
        onPress={this.handleHeaderRightPress}
      />
    </View>
  );

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.upperContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.titleContainerInner}>
              <Text style={styles.titleText}>Please provide your contact information.</Text>
            </View>
          </View>
          <View style={styles.requiredContainer}>
            <Text style={styles.requiredText}>All fields are required.</Text>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.inputRow}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: '50%', paddingRight: 10 }}>
                <Hoshi
                  label={'First Name'}
                  autoCorrect={false}
                  autoCapitalize="words"
                  maxLength={35}
                  value={this.state.firstName}
                  onChangeText={newValue =>
                    this.setState({ firstName: newValue }, this.updateHeader)
                  }
                  labelStyle={styles.inputLabel}
                  inputStyle={styles.input}
                  borderColor={colors.white}
                  backgroundColor={colors.white}
                />
              </View>
              <View style={{ width: '50%', paddingLeft: 10 }}>
                <Hoshi
                  label={'Last Name'}
                  autoCorrect={false}
                  autoCapitalize="words"
                  maxLength={35}
                  value={this.state.lastName}
                  onChangeText={newValue =>
                    this.setState({ lastName: newValue }, this.updateHeader)
                  }
                  labelStyle={styles.inputLabel}
                  inputStyle={styles.input}
                  borderColor={colors.white}
                  backgroundColor={colors.white}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputRow}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: '100%' }}>
                <Hoshi
                  label={'Email Address'}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={this.state.emailAddress}
                  onChangeText={newValue =>
                    this.setState({ emailAddress: newValue }, this.updateHeader)
                  }
                  labelStyle={styles.inputLabel}
                  inputStyle={styles.input}
                  borderColor={colors.white}
                  backgroundColor={colors.white}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputRow}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: '100%' }}>
                <Hoshi
                  label={'Phone Numer'}
                  keyboardType="numeric"
                  maxLength={10}
                  value={this.state.phoneNumber}
                  onChangeText={newValue =>
                    this.setState({ phoneNumber: newValue }, this.updateHeader)
                  }
                  labelStyle={styles.inputLabel}
                  inputStyle={styles.input}
                  borderColor={colors.white}
                  backgroundColor={colors.white}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = EStyleSheet.create({
  $paddingOffset: -16, // input library has a 16 padding built in that I want to offset

  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 25
  },
  upperContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
    paddingBottom: 5
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
  requiredContainer: {
    backgroundColor: colors.white
  },
  requiredText: {
    fontFamily: paragraphText.fontFamily,
    fontSize: paragraphText.fontSize,
    fontWeight: paragraphText.fontWeight,
    color: colors.lightGray
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  inputRow: {
    width: '100%',
    height: 65,
    marginBottom: 5
  },
  inputLabel: {
    color: colors.red,
    fontSize: 14,
    fontFamily: 'Arial',
    marginLeft: '$paddingOffset'
  },
  input: {
    fontFamily: inputText.fontFamily,
    fontSize: inputText.fontSize,
    fontWeight: inputText.fontWeight,
    color: colors.darkGray,
    marginLeft: '$paddingOffset'
  }
});

export default GiveFeedbackContactForm;

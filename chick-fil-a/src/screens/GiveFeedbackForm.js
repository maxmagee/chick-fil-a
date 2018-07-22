import React, { Component } from 'react';
import { Alert, Button, KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, heading, headerRightButtonContainer } from '../config/globalStyles';

class GiveFeedbackForm extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: navigation.getParam('getHeaderRight')
  });

  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ getHeaderRight: this.renderHeaderRight() });
  }

  goToNext = () => {
    Alert.alert(
      `We're Sorry!`,
      `Submitting a feedback form is not supported yet. Please check again later.`
    );
  };

  updateComment = newValue => {
    this.setState({
      comment: newValue
    });
  };

  renderHeaderRight = () => {
    return (
      <View style={headerRightButtonContainer}>
        <Button
          ref={this.headerRightButtonRef}
          color={colors.red}
          title="Next"
          dialbled={false}
          onPress={this.goToNext}
        />
      </View>
    );
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
            value={this.state.comment}
            onChangeText={this.updateComment}
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

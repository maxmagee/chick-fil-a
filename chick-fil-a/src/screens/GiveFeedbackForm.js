import React, { Component } from 'react';
import { Button, KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, heading, headerRightButtonContainer, inputText } from '../config/globalStyles';

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
    this.props.navigation.setParams({ getHeaderRight: this.renderHeaderRight(false) });
  }

  handleHeaderRightPress = () => {
    this.props.navigation.navigate('FeedbackContactForm');
  };

  updateComment = newValue => {
    this.setState({ comment: newValue.trim() }, this.updateHeader);
  };

  updateHeader = () => {
    const enableRightButton = this.state.comment.length > 4;
    this.props.navigation.setParams({
      getHeaderRight: this.renderHeaderRight(enableRightButton)
    });
  };

  renderHeaderRight = enabled => (
    <View style={headerRightButtonContainer}>
      <Button
        color={colors.red}
        title="Next"
        disabled={!enabled}
        onPress={this.handleHeaderRightPress}
      />
    </View>
  );

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
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
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
  inputContainer: {
    height: '100%',
    backgroundColor: colors.white,
    borderColor: colors.darkGray,
    borderWidth: 1,
    padding: 10
  },
  input: {
    height: '100%',
    backgroundColor: colors.white,
    fontFamily: inputText.fontFamily,
    fontSize: inputText.fontSize,
    fontWeight: inputText.fontWeight,
    color: inputText.color,
    marginLeft: 0,
    paddingTop: 0
  }
});

export default GiveFeedbackForm;

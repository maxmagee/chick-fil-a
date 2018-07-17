import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import questions from '../data/questions';

import { CollapsingPanel } from '../components/CollapsingPanel';

class QAScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  });

  renderItems = () => {
    const category = this.props.navigation.getParam('category', 'none');
    const categoryQuestions = questions[category];

    return categoryQuestions.map((item, index) => (
      <CollapsingPanel key={index} title={item.question}>
        <Text>{item.answer}</Text>
      </CollapsingPanel>
    ));
  };

  render() {
    return <ScrollView style={{ flex: 1 }}>{this.renderItems()}</ScrollView>;
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F9',
    paddingTop: 30
  }
});

export default QAScreen;

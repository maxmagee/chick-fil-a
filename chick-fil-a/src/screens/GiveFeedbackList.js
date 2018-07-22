import React, { Component } from 'react';
import { Alert, StatusBar, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, heading, listItemTitle } from '../config/globalStyles';

class GiveFeedbackList extends Component {
  handleItemPress = () => {
    Alert.alert(
      `We're Sorry!`,
      `Feedback for a store location is not available yet. Check again later.`
    );
  };

  openFeedbackForm = () => {
    this.props.navigation.navigate('FeedbackForm');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.titleContainer}>
          <View style={styles.titleContainerInner}>
            <Text style={styles.titleText}>What would you like to give us feedback on?</Text>
          </View>
        </View>
        <ListItem
          title="A Chick-fil-A Restaurant"
          titleStyle={listItemTitle}
          onPress={this.handleItemPress}
          chevron
          topDivider
          bottomDivider
        />
        <ListItem
          title="The Chick-fil-A App"
          titleStyle={listItemTitle}
          onPress={this.openFeedbackForm}
          chevron
          bottomDivider
        />
        <ListItem
          title="Other"
          titleStyle={listItemTitle}
          onPress={this.openFeedbackForm}
          chevron
          bottomDivider
        />
      </View>
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
    width: 230,
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
  }
});

export default GiveFeedbackList;

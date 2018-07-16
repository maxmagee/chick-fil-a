import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import colors from '../config/colors';

class OptionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipsEnabled: false
    };
  }

  handleItemPress = () => {
    alert('item pressed');
  };

  toggleTipsEnabled = () => {
    this.setState(prevState => {
      return { tipsEnabled: !prevState.tipsEnabled };
    });
  };

  renderListItems = () => {
    return [
      {
        title: 'Get Help',
        onPress: () => {
          this.props.navigation.navigate('Help');
        }
      },
      { title: 'Give Feedback', onPress: this.handleItemPress },
      { title: 'Chick-fil-A One Intro', onPress: this.handleItemPress },
      { title: 'Privacy', onPress: this.handleItemPress },
      { title: 'Legal Information', onPress: this.handleItemPress },
      { title: 'Notifications', onPress: this.handleItemPress },
      { title: 'Licenses', onPress: this.handleItemPress },
      { title: 'Privacy', onPress: this.handleItemPress },
      {
        title: 'Enable Tips',
        switch: { onValueChange: this.toggleTipsEnabled, value: this.state.tipsEnabled }
      }
    ].map((item, index) => (
      <ListItem
        key={index}
        title={item.title}
        titleStyle={styles.listItemTitle}
        onPress={item.onPress}
        chevron={!item.switch}
        bottomDivider
        switch={item.switch}
      />
    ));
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
          {this.renderListItems()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = EStyleSheet.create({
  listItemTitle: {
    color: '$darkGray',
    fontSize: 17
  }
});

export default OptionsScreen;

import React, { Component } from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, Text, Switch, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem } from 'react-native-elements';

import { colors, heading, heading2, microText } from '../../config/globalStyles';

class NotificationScreen extends Component {
  toggle = () => {
    Alert.alert(
      `We're Sorry!`,
      `We're having trouble saving your preferences. Please try again later.`
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.titleContainer}>
          <View style={styles.titleContainerInner}>
            <Text style={styles.titleText}>
              Manage push notifications for treats, mobile orders, and app-related announcements.
            </Text>
          </View>
        </View>
        <View style={styles.staticContainer}>
          <View style={styles.staticContainerInner}>
            <Text style={styles.staticContainerText}>Turn off all push notifications</Text>
            <Switch style={styles.switchButton} value onValueChange={this.toggle} />
          </View>
        </View>
        <ScrollView>
          <ListItem
            title="Send me notifications about treats"
            subtitle="Includes notifications whenever a new treat has been earned, whenever a treat is about to expire, and when Cow Calendar treats are available to use." //eslint-disable-line max-len
            containerStyle={styles.listItemContainer}
            titleStyle={styles.itemTitleText}
            subtitleStyle={styles.itemText}
            switch={{
              onValueChange: this.toggle,
              value: true
            }}
          />
          <ListItem
            title="Send me notifications about mobile orders"
            subtitle="Includes notifications whenever an order is ready and whenever you have checked in for a mobile order." //eslint-disable-line max-len
            containerStyle={styles.listItemContainer}
            titleStyle={styles.itemTitleText}
            subtitleStyle={styles.itemText}
            switch={{
              onValueChange: this.toggle,
              value: true
            }}
          />
          <ListItem
            title="Send me notifications about app-related announcements"
            subtitle="Be the first to know about new app features and promotions."
            containerStyle={styles.listItemContainer}
            titleStyle={styles.itemTitleText}
            subtitleStyle={styles.itemText}
            switch={{
              onValueChange: this.toggle,
              value: true
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  titleContainer: {
    height: 90,
    width: '100%',
    padding: 20
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
  staticContainer: {
    height: 65,
    backgroundColor: colors.systemGray,
    paddingHorizontal: 20
  },
  staticContainerInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  staticContainerText: {
    fontFamily: heading2.fontFamily,
    fontSize: heading2.fontSize,
    fontWeight: heading2.fontWeight,
    color: colors.darkGray
  },
  switchButton: {
    width: 50
  },
  listItemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderStyle: 'solid',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  itemTitleText: {
    fontFamily: heading2.fontFamily,
    fontSize: heading2.fontSize,
    fontWeight: heading2.fontWeight,
    color: colors.darkGray,
    marginBottom: 10
  },
  itemText: {
    fontFamily: microText.fontFamily,
    fontSize: microText.fontSize,
    fontWeight: microText.fontWeight,
    color: colors.darkGray
  }
});

export default NotificationScreen;

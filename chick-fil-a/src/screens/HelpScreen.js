import React, { Component } from 'react';
import { Alert, StatusBar, Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Input } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Ionicons } from '@expo/vector-icons';

import { colors, heading } from '../config/globalStyles';
import {
  Bag,
  Cow,
  DollarSign,
  Phone,
  PhoneWithHand,
  Treat,
  BagBanner,
  CowBanner,
  DollarSignBanner,
  PhoneBanner,
  PhoneWithHandBanner,
  TreatBanner
} from '../../assets/help';

import { HelpButton } from '../components/HelpButton';

class HelpScreen extends Component {
  search = () => {
    Alert.alert(`We're Sorry!`, `Searching isn't fully supported yet. Please check back later.`);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <View style={styles.searchContainer}>
            <View style={styles.searchContainerInner}>
              <Text style={styles.searchTextHeader}>Please let us know how we can assist you:</Text>
              <Input
                placeholder="Search"
                placeholderTextColor={colors.lightGray}
                leftIcon={<Ionicons name="ios-search-outline" size={25} color={colors.lightGray} />}
                inputStyle={styles.searchText}
                inputContainerStyle={styles.searchTextInputContainer}
                returnKeyType="search"
                autoCapitalize="none"
                selectTextOnFocus
                enablesReturnKeyAutomatically
                onSubmitEditing={this.search}
              />
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonRowContainer}>
                <HelpButton
                  onPress={() =>
                    this.props.navigation.navigate('QA', {
                      category: 'general',
                      title: 'General',
                      bannerImage: PhoneBanner
                    })
                  }
                  iconImage={Phone}
                  description="general app & account"
                />
                <HelpButton
                  onPress={() =>
                    this.props.navigation.navigate('QA', {
                      category: 'features',
                      title: 'Key Features',
                      bannerImage: PhoneWithHandBanner
                    })
                  }
                  iconImage={PhoneWithHand}
                  description="accessing key features"
                />
              </View>
              <View style={styles.buttonRowContainer}>
                <HelpButton
                  onPress={() =>
                    this.props.navigation.navigate('QA', {
                      category: 'card',
                      title: 'My Card',
                      bannerImage: DollarSignBanner
                    })
                  }
                  iconImage={DollarSign}
                  description="Chick-fil-A One Card"
                  textContainerWidth={105}
                />
                <HelpButton
                  onPress={() =>
                    this.props.navigation.navigate('QA', {
                      category: 'ordering',
                      title: 'Ordering',
                      bannerImage: BagBanner
                    })
                  }
                  iconImage={Bag}
                  description="mobile ordering"
                  textContainerWidth={115}
                />
              </View>
              <View style={styles.buttonRowContainer}>
                <HelpButton
                  onPress={() =>
                    this.props.navigation.navigate('QA', {
                      category: 'treats',
                      title: 'Treats',
                      bannerImage: TreatBanner
                    })
                  }
                  iconImage={Treat}
                  description="treats"
                />
                <HelpButton
                  onPress={() =>
                    this.props.navigation.navigate('QA', {
                      category: 'calendar',
                      title: 'Calendar',
                      bannerImage: CowBanner
                    })
                  }
                  iconImage={Cow}
                  description="cow calendar"
                  textContainerWidth={115}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = EStyleSheet.create({
  searchContainer: {
    height: 110,
    width: '100%'
  },
  searchContainerInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.systemGray,
    paddingVertical: 10
  },
  searchTextHeader: {
    fontFamily: heading.fontFamily,
    fontSize: heading.fontSize,
    fontWeight: heading.fontWeight,
    color: colors.darkGray
  },
  searchTextInputContainer: {
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderColor: colors.darkGray,
    borderWidth: 1
  },
  searchText: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'normal',
    color: colors.darkGray
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 55
  },
  buttonContainer: {
    backgroundColor: colors.white,
    height: 460,
    width: '100%'
  },
  buttonRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 112
  }
});

export default HelpScreen;

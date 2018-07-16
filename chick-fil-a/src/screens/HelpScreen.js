import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../config/globalStyles';
import { Bag, Cow, DollarSign, Phone, PhoneWithHand, Treat } from '../../assets/help';

import { HelpButton } from '../components/HelpButton';

class HelpScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRowContainer}>
            <HelpButton
              onPress={() => this.props.navigation.navigate('QA')}
              iconImage={Phone}
              description="general app & account"
            />
            <HelpButton
              onPress={() => alert('pressed')}
              iconImage={PhoneWithHand}
              description="accessing key features"
            />
          </View>
          <View style={styles.buttonRowContainer}>
            <HelpButton
              onPress={() => alert('pressed')}
              iconImage={DollarSign}
              description="Chick-fil-A One Card"
              textContainerWidth={105}
            />
            <HelpButton
              onPress={() => alert('pressed')}
              iconImage={Bag}
              description="mobile ordering"
              textContainerWidth={115}
            />
          </View>
          <View style={styles.buttonRowContainer}>
            <HelpButton onPress={() => alert('pressed')} iconImage={Treat} description="treats" />
            <HelpButton
              onPress={() => alert('pressed')}
              iconImage={Cow}
              description="cow calendar"
              textContainerWidth={115}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
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

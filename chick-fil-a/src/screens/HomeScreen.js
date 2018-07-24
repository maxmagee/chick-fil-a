import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'react-native-elements';
import { Constants } from 'expo';

import Background from '../../assets/home/chick-fil-a.jpg';
import { colors, heading } from '../config/globalStyles';

class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      timeSensitiveGreeting: 'greetings'
    };
  }

  componentDidMount() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 0 && currentHour <= 4) {
      this.setState({
        timeSensitiveGreeting: 'good evening'
      });
    } else if (currentHour >= 5 && currentHour <= 11) {
      this.setState({
        timeSensitiveGreeting: 'good morning'
      });
    } else if (currentHour >= 12 && currentHour <= 17) {
      this.setState({
        timeSensitiveGreeting: 'good afternoon'
      });
    } else {
      this.setState({
        timeSensitiveGreeting: 'good evening'
      });
    }
  }
  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <View style={styles.titleContainerInner}>
          <Text style={[styles.titleText, { fontSize: 30, fontWeight: '100' }]}>
            {this.state.timeSensitiveGreeting}
          </Text>
          <Text style={styles.titleText}>IT'S OUR PLEASURE TO SERVE YOU</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={Background} style={{ width: '100%', height: '100%' }}>
          <View style={styles.optionsContainer}>
            <View style={styles.optionsContainerInner}>
              <TouchableOpacity onPress={this.handleOptionsPress}>
                <Icon name="gear" type="evilicon" color={colors.white} size={35} />
              </TouchableOpacity>
            </View>
          </View>
          {this.renderTitle()}
        </ImageBackground>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  optionsContainer: {
    width: '100%',
    height: 30,
    backgroundColor: 'transparent',
    marginTop: Constants.statusBarHeight
  },
  optionsContainerInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 15
  },
  titleContainer: {
    height: 70,
    width: 300,
    alignSelf: 'center'
  },
  titleContainerInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titleText: {
    fontFamily: heading.fontFamily,
    fontSize: heading.fontSize,
    fontWeight: heading.fontWeight,
    textAlign: 'center',
    color: colors.white
  }
});

export default HomeScreen;

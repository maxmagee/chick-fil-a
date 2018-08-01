import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  ImageBackground,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Icon } from 'react-native-elements';
import { Constants } from 'expo';

import Background from '../../assets/home/chick-fil-a.jpg';
import { colors, heading, heading2 } from '../config/globalStyles';

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

  handleLogIn = () => {
    Alert.alert(`We're Sorry!`, `Logging in is not supported yet. Please check again later.`);
  };

  handleSignUp = () => {
    this.props.navigation.navigate('Signup');
  };

  handleAbout = () => {
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
        <View style={styles.fixed}>
          <ImageBackground source={Background} style={styles.imageBackground}>
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[{ alignSelf: 'center', backgroundColor: 'transparent', width: '100%' }]}
        >
          <View style={[styles.cardContainer, styles.loginCard]}>
            <View style={styles.buttonContainer}>
              <Button
                title="Log in"
                titleStyle={styles.loginCardButtonText}
                buttonStyle={styles.loginCardButton}
                onPress={this.handleLogIn}
              />
              <Button
                title="Sign up"
                titleStyle={styles.loginCardButtonText}
                buttonStyle={styles.loginCardButton}
                onPress={this.handleSignUp}
              />
            </View>
            <View style={styles.loginCardTextContainer}>
              <TouchableOpacity onPress={this.handleAbout}>
                <Text style={styles.loginCardButtonText}>About Chick-fil-A One</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.hiddenCard, { marginVertical: 0 }]} />
          <View style={styles.hiddenCard} />
          <View style={styles.hiddenCard} />
          <View style={styles.hiddenCard} />
          <View style={[styles.hiddenCard, { marginVertical: 50 }]} />
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 10
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  imageBackground: {
    width: '100%',
    height: '100%'
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
  },
  cardContainer: {
    width: '100%',
    borderRadius: 5
  },
  loginCard: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 115,
    backgroundColor: colors.red,
    marginTop: 600
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15
  },
  loginCardTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginCardButton: {
    backgroundColor: colors.red,
    width: 160,
    height: 35,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5
  },
  loginCardButtonText: {
    fontFamily: heading2.fontFamily,
    fontSize: heading2.fontSize,
    fontWeight: heading2.fontWeight,
    color: colors.white
  },
  hiddenCard: {
    width: '100%',
    height: 50,
    marginVertical: 20,
    backgroundColor: 'transparent'
  }
});

export default HomeScreen;

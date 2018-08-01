import React, { Component } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import questions from '../../data/questions';
import { colors, paragraphText } from '../../config/globalStyles';

import { CollapsingPanel } from '../../components/CollapsingPanel';

class QAScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  });

  renderItems = () => {
    const category = this.props.navigation.getParam('category', 'none');
    const categoryQuestions = questions[category];

    return categoryQuestions.map((item, index) => (
      <CollapsingPanel key={index} title={item.question} text={item.answer} />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={this.props.navigation.getParam('bannerImage')}
              resizeMode="contain"
            />
          </View>
          {this.renderItems()}
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerItemContainer}>
            <View style={styles.footerItemLeft}>
              <Text style={styles.footerText}>still need help? </Text>
            </View>
            <View style={styles.footerItemRight}>
              <TouchableOpacity>
                <Text style={[styles.footerText, { color: colors.red }]}>contact us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  imageContainer: {
    height: 88,
    backgroundColor: colors.white,
    position: 'relative'
  },
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  footer: {
    height: 70,
    width: '100%',
    backgroundColor: colors.systemGray
  },
  footerItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerItemLeft: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  footerItemRight: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  footerText: {
    fontFamily: paragraphText.fontFamily,
    fontSize: paragraphText.fontSize,
    fontWeight: 'bold',
    color: colors.darkGray
  }
});

export default QAScreen;

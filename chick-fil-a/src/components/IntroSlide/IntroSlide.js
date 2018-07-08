import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Text, View } from 'react-native';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const IntroSlide = ({ backgroundColor, text }) => (
  <View style={[styles.container, { backgroundColor, width: screenWidth }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

IntroSlide.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string
};

export default IntroSlide;

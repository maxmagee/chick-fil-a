import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StatusBar, Text, View } from 'react-native';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const IntroSlide = ({ activePageNumber, backgroundColor, pageNumber, statusBarStyle, text }) => {
  if (pageNumber === activePageNumber) {
    StatusBar.setBarStyle(statusBarStyle);
  }

  return (
    <View style={[styles.container, { backgroundColor, width: screenWidth }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

IntroSlide.propTypes = {
  activePageNumber: PropTypes.number,
  backgroundColor: PropTypes.string,
  pageNumber: PropTypes.number,
  statusBarContent: PropTypes.string,
  text: PropTypes.string
};

export default IntroSlide;

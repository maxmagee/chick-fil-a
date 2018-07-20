import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';

import styles from './styles';

const PrivacySection = ({ image, headerText, paragraphText }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={image} resizeMode="contain" />
    </View>
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
    <View style={styles.paragraphContainer}>
      <Text style={styles.paragraphText}>{paragraphText}</Text>
    </View>
  </View>
);

PrivacySection.propTypes = {
  image: PropTypes.number,
  headerText: PropTypes.string,
  paragraphText: PropTypes.string
};

export default PrivacySection;

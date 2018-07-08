import React from 'react';
import PropTypes from 'prop-types';
import { Image, StatusBar, Text, View } from 'react-native';
import styles from './styles';

const IntroSlide = ({
  activePageNumber,
  backgroundColor,
  image,
  pageNumber,
  statusBarStyle,
  text,
  textContainerWidth
}) => {
  if (pageNumber === activePageNumber) {
    StatusBar.setBarStyle(statusBarStyle);
  }

  const imageWidth = Image.resolveAssetSource(image).width;
  const imageHeight = Image.resolveAssetSource(image).height;

  return (
    <View style={styles.container}>
      <View style={[styles.upperContainer, { backgroundColor }]}>
        <Image source={image} width={imageWidth} height={imageHeight} />
      </View>
      <View style={styles.lowerContainer}>
        <View style={[styles.textContainer, { width: textContainerWidth }]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

IntroSlide.propTypes = {
  activePageNumber: PropTypes.number,
  backgroundColor: PropTypes.string,
  pageNumber: PropTypes.number,
  statusBarContent: PropTypes.string,
  text: PropTypes.string,
  textContainerWidth: PropTypes.number,
  image: PropTypes.number
};

export default IntroSlide;

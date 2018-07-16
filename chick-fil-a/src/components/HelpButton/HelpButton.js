import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const HelpButton = ({ onPress, iconImage, description, textContainerWidth }) => {
  const textContainerStyles = [styles.textContainer];

  if (textContainerWidth) {
    textContainerStyles.push({ width: textContainerWidth });
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.groupedItemContainer}>
        <View style={styles.imageWithTextContainer}>
          <Image style={styles.image} source={iconImage} />
          <View style={textContainerStyles}>
            <Text style={styles.text}>{description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

HelpButton.propTypes = {
  onPress: PropTypes.func,
  iconImage: PropTypes.number,
  description: PropTypes.string,
  textContainerWidth: PropTypes.number
};

export default HelpButton;

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const PageIndicator = ({
  totalPages,
  selectedPage,
  containerBackgroundColor,
  indicatorBaseColor,
  indicatorHighlightColor
}) => {
  const renderIndicators = () => {
    const indicators = [];

    for (let i = 1; i <= totalPages; i++) {
      let indicatorBackgroundColor = indicatorBaseColor;
      if (i === selectedPage) {
        indicatorBackgroundColor = indicatorHighlightColor;
      }
      indicators.push(
        <View key={i} style={[styles.indicator, { backgroundColor: indicatorBackgroundColor }]} />
      );
    }

    return indicators;
  };

  return (
    <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      {renderIndicators()}
    </View>
  );
};

PageIndicator.propTypes = {
  totalPages: PropTypes.number,
  selectedPage: PropTypes.number,
  containerBackgroundColor: PropTypes.string,
  indicatorBaseColor: PropTypes.string,
  indicatorHighlightColor: PropTypes.string
};

export default PageIndicator;

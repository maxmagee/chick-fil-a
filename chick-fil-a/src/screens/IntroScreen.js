import React, { Component } from 'react';
import { Dimensions, ScrollView } from 'react-native';

import colors from '../config/colors';

import { IntroSlide } from '../components/IntroSlide';

class IntroScreen extends Component {
  constructor(props) {
    super(props);
    this.slideWidth = Dimensions.get('window').width;
    this.state = {
      page: 1
    };
  }

  handlePageChange = evt => {
    const offset = evt.nativeEvent.contentOffset;
    const page = Math.round(offset.x / this.slideWidth) + 1;

    if (this.state.page !== page) {
      this.setState({ page });
    }
  };

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={this.handlePageChange}
      >
        <IntroSlide backgroundColor="#FFFDFF" text="Screen 1" />
        <IntroSlide backgroundColor={colors.primaryRed} text="Screen 2" />
        <IntroSlide backgroundColor={colors.green} text="Screen 3" />
      </ScrollView>
    );
  }
}

export default IntroScreen;

import React, { Component } from 'react';
import { Dimensions, ScrollView } from 'react-native';

import colors from '../config/colors';

import { IntroSlide } from '../components/IntroSlide';

class IntroScreen extends Component {
  constructor(props) {
    super(props);
    this.slideWidth = Dimensions.get('window').width;
    this.state = {
      pageNumber: 1,
      statusBarStyle: 'default'
    };
  }

  handlePageChange = evt => {
    const offset = evt.nativeEvent.contentOffset;
    const pageNumber = Math.round(offset.x / this.slideWidth) + 1;

    if (this.state.pageNumber !== pageNumber) {
      this.setState({ pageNumber });
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
        <IntroSlide
          pageNumber={1}
          activePageNumber={this.state.pageNumber}
          backgroundColor="#FFFDFF"
          text="Quickly order and pay for your meal, just the way you like it."
          textContainerWidth={265}
          statusBarStyle="dark-content"
        />
        <IntroSlide
          pageNumber={2}
          activePageNumber={this.state.pageNumber}
          backgroundColor={colors.red}
          text="Scan your card at the register to earn treats or pay using Chick-fil-A One."
          textContainerWidth={265}
          statusBarStyle="light-content"
        />
        <IntroSlide
          pageNumber={3}
          activePageNumber={this.state.pageNumber}
          backgroundColor={colors.green}
          text="Earn treats by placing mobile orders or scanning at the register."
          textContainerWidth={300}
          statusBarStyle="light-content"
        />
      </ScrollView>
    );
  }
}

export default IntroScreen;

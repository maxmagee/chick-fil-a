import React, { Component } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import colors from '../config/colors';
import introImage1 from '../../assets/Intro_1.png';
import introImage2 from '../../assets/Intro_2.png';
import introImage3 from '../../assets/Intro_3.png';

import { IntroSlide, styles as introSlideStyles } from '../components/IntroSlide';
import { PageIndicator } from '../components/PageIndicator';

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

  handleGetStartedPress = () => {
    // TODO: Modify this action
    console.log('Get Started Pressed');
  };

  renderGetStartedButton = () => (
    <Button
      title="Get Started!"
      titleStyle={{
        fontSize: 18,
        fontFamily: 'Times New Roman'
      }}
      buttonStyle={{
        backgroundColor: colors.green,
        width: 240,
        height: 42,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 5
      }}
      onPress={this.handleGetStartedPress}
    />
  );

  render() {
    return (
      //eslint-disable-next-line
      <View style={{ flex: 1, backgroundColor: introSlideStyles._lowerContainer.backgroundColor }}>
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
            image={introImage1}
          />
          <IntroSlide
            pageNumber={2}
            activePageNumber={this.state.pageNumber}
            backgroundColor={colors.red}
            text="Scan your card at the register to earn treats or pay using Chick-fil-A One."
            textContainerWidth={265}
            statusBarStyle="light-content"
            image={introImage2}
          />
          <IntroSlide
            pageNumber={3}
            activePageNumber={this.state.pageNumber}
            backgroundColor={colors.green}
            text="Earn treats by placing mobile orders or scanning at the register."
            textContainerWidth={300}
            statusBarStyle="light-content"
            image={introImage3}
            button={this.renderGetStartedButton()}
          />
        </ScrollView>
        <View style={styles.pageIndicatorContainer}>
          <PageIndicator
            totalPages={3}
            selectedPage={this.state.pageNumber}
            containerBackgroundColor="#FAF6FB"
            indicatorBaseColor={colors.lightGray}
            indicatorHighlightColor={colors.darkGray}
          />
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  pageIndicatorContainer: {
    height: 30,
    position: 'relative',
    top: -25,
    backgroundColor: 'orange',
    alignSelf: 'center'
  }
});

export default IntroScreen;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class CollapsingPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  setMaxHeight = event => {
    if (this.state.maxHeight === undefined) {
      this.setState({
        maxHeight: event.nativeEvent.layout.height
      });
    }
  };

  setMinHeight = event => {
    if (this.state.minHeight === undefined) {
      this.setState({
        minHeight: event.nativeEvent.layout.height,
        animation: new Animated.Value(event.nativeEvent.layout.height)
      });
    }
  };

  toggle = () => {
    const initialValue = this.state.expanded
      ? this.state.maxHeight + this.state.minHeight
      : this.state.minHeight;

    const finalValue = this.state.expanded
      ? this.state.minHeight
      : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);

    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  };

  render() {
    return (
      <Animated.View style={[styles.container, { height: this.state.animation }]}>
        <TouchableOpacity onPress={this.toggle}>
          <View style={styles.titleContainer} onLayout={this.setMinHeight}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.body} onLayout={this.setMaxHeight}>
          <TouchableOpacity onPress={this.toggle}>
            <Text style={styles.bodyText}>{this.props.text}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

CollapsingPanel.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default CollapsingPanel;

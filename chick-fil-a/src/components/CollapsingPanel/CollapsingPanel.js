import React, { Component } from 'react';
import { Animated, Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

class CollapsingPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      expanded: false
    };
  }

  _setMaxHeight(event) {
    if (this.state.maxHeight === undefined) {
      this.setState({
        maxHeight: event.nativeEvent.layout.height
      });
    }
  }

  _setMinHeight(event) {
    if (this.state.minHeight === undefined) {
      this.setState({
        minHeight: event.nativeEvent.layout.height,
        animation: new Animated.Value(event.nativeEvent.layout.height)
      });
    }
  }

  toggle() {
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
    }).start(); //Step 5
  }

  render() {
    return (
      <Animated.View style={[styles.container, { height: this.state.animation }]}>
        <View style={styles.titleContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <View
              style={{ flex: 1, backgroundColor: 'orange' }}
              onLayout={this._setMinHeight.bind(this)}
            >
              <Text style={styles.title}>{this.state.title}</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}
export default CollapsingPanel;

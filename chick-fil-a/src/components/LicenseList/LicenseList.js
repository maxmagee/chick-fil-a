import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { LicenseListItem } from '../LicenseListItem';

import styles from './styles';

class LicenseList extends Component {
  renderItem = ({ item }) => <LicenseListItem {...item} />;

  render() {
    const { licenses } = this.props;

    return (
      <FlatList
        style={styles.list}
        keyExtractor={({ key }) => key}
        data={licenses}
        renderItem={this.renderItem}
      />
    );
  }
}

export default LicenseList;

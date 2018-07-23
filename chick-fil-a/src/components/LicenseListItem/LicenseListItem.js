import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Linking, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Version can be specified in package.json

import styles from './styles';

class LicenseListItem extends Component {
  render() {
    const {
      image,
      userUrl,
      username,
      name,
      version,
      licenses,
      repository,
      licenseUrl
    } = this.props;

    let title = name;
    if (username) {
      if (title.toLowerCase() !== username.toLowerCase()) {
        title += ` by ${username}`;
      }
    }

    return (
      <View>
        <View style={styles.cardShadow}>
          <View style={styles.card}>
            {image && (
              <TouchableOpacity onPress={() => Linking.openURL(userUrl)}>
                <Image source={{ uri: image }} style={styles.image} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              underlayColor={'#eeeeee'}
              onPress={() => Linking.openURL(repository)}
              style={styles.item}
            >
              <View style={{ maxWidth: '90%' }}>
                <Text style={styles.name}>{title}</Text>
                <Link style={styles.text} url={licenseUrl}>
                  {licenses}
                </Link>
                <Link style={styles.text}>{version}</Link>
              </View>
              <FontAwesome
                style={{ alignSelf: 'center' }}
                color={'#34495e'}
                size={16}
                name={'chevron-right'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const Link = ({ url, style, children }) => (
  <Text style={style} numberOfLines={1} onPress={() => url && Linking.openURL(url)}>
    {children}
  </Text>
);

export default LicenseListItem;

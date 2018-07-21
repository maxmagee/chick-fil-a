import React, { Component } from 'react';
import { Text, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, paragraphText, privacyParagraphText } from '../config/globalStyles';
import sectionsData from '../data/privacy';
import {
  biometrics,
  email,
  gps,
  password,
  payment,
  phone,
  photos,
  security,
  unique,
  user,
  video
} from '../../assets/privacy';

import { PrivacySection } from '../components/PrivacySection';

class PrivacyScreen extends Component {
  redirectToLegal = () => {
    this.props.navigation.navigate('Legal');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>short-form privacy notice</Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraphText}>
            Chick-fil-A, Inc. (“Chick-fil-A” or “we”) and/or third parties access or collect the
            following types of information about you when you use this Application (“App”). You
            either enter this information into the App or aggree to its collection/accessing
            automatically by the App. We may share the information collected/accessed with third
            parties. If you do not concent to our access, collection, sharing, or transmission of
            the data as indicated below, please do not use this App.
          </Text>
        </View>
        <PrivacySection
          image={unique}
          headerText="Unique Identifiers"
          paragraphText={sectionsData.unique}
        />
        <PrivacySection
          image={gps}
          headerText="Geo-Location (GPS, Wi-Fi, or user-entered)"
          paragraphText={sectionsData.location}
        />
        <PrivacySection
          image={phone}
          headerText="Mobile Phone Number"
          paragraphText={sectionsData.mobile}
        />
        <PrivacySection
          image={email}
          headerText="Email Address"
          paragraphText={sectionsData.email}
        />
        <PrivacySection image={user} headerText="User's Name" paragraphText={sectionsData.user} />
        <PrivacySection
          image={payment}
          headerText="Financial & Payment Information"
          paragraphText={sectionsData.financial}
        />
        <PrivacySection
          image={password}
          headerText="Passwords"
          paragraphText={sectionsData.password}
        />
        <PrivacySection
          image={biometrics}
          headerText="Biometrics"
          paragraphText={sectionsData.biometrics}
        />
        <PrivacySection image={video} headerText="Videos" paragraphText={sectionsData.videos} />
        <PrivacySection image={photos} headerText="Photos" paragraphText={sectionsData.photos} />
        <PrivacySection
          image={security}
          headerText="Security"
          paragraphText={sectionsData.security}
        />
        <View style={[styles.paragraphContainer, { marginTop: 40 }]}>
          <Text style={[paragraphText, { color: colors.red }]}>
            Further information about the third parties we share or transmit your information with:
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={[styles.paragraphText, { textAlign: 'left' }]}>
            <Text style={{ color: colors.red }}>"Ad Networks"</Text> are companies that display ads
            to you in applications.
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={[styles.paragraphText, { textAlign: 'left' }]}>
            <Text style={{ color: colors.red }}>"Consumer Data Resellers"</Text> are companies that
            sell consumer information to other companies for many purposes, including offering
            products and services that may interest you.
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={[styles.paragraphText, { textAlign: 'left' }]}>
            <Text style={{ color: colors.red }}>"Data Analytics Providers"</Text> are companies that
            collect and analyze the information we collect about you.
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={[styles.paragraphText, { textAlign: 'left' }]}>
            <Text style={{ color: colors.red, fontWeight: 'bold' }}>
              "Chick-fil-A Franchised Operators and Licensees"
            </Text>{' '}
            are independent third parties and may own, operator, or maintain a website, mobile
            application, social media page, or other online service for his, her, or its franchised
            or licensed restaurant business.
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={[styles.paragraphText, { textAlign: 'left' }]}>
            <Text style={{ color: colors.red }}>"Operating Systems and Platforms"</Text> are
            companies that develop the software on your device and the locations where the apps may
            be sold or downloaded (e.g., Google Play and Apple's App store).
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={[styles.paragraphText, { textAlign: 'left' }]}>
            <Text style={{ color: colors.red }}>"Social Networks"</Text> are companies that connect
            individuals around common interests and facilitate sharing (e.g., Facebook).
          </Text>
        </View>
        <View style={[styles.paragraphContainer, { marginBottom: 100 }]}>
          <Text style={[styles.paragraphText, { textAlign: 'left', fontStyle: 'italic' }]}>
            By using this Chick-fil-A App, I agree that Chick-fil-A may collect the information
            above and share it with third parties pursuant to{' '}
            <TouchableOpacity onPress={this.redirectToLegal}>
              <Text style={[styles.linkText, { fontStyle: 'italic' }]}>
                Chick-fil-A's Privacy Policy
              </Text>
            </TouchableOpacity>
            {' and '}
            <TouchableOpacity onPress={this.redirectToLegal}>
              <Text style={[styles.linkText, { fontStyle: 'italic' }]}>Terms of Use</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  },
  headerTextContainer: {
    width: '100%',
    marginBottom: 10
  },
  headerText: {
    fontFamily: 'Arial',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.red
  },
  paragraphContainer: {
    marginVertical: 10
  },
  paragraphText: {
    fontFamily: privacyParagraphText.fontFamily,
    fontSize: privacyParagraphText.fontSize,
    fontWeight: privacyParagraphText.fontWeight,
    lineHeight: privacyParagraphText.lineHeight,
    color: colors.darkGray,
    textAlign: 'center'
  },
  linkText: {
    color: colors.red,
    fontWeight: 'bold'
  }
});

export default PrivacyScreen;

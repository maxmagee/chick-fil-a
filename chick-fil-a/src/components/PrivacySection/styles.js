import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, privacyParagraphText } from '../../config/globalStyles';

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: 62,
    backgroundColor: colors.white,
    position: 'relative',
    marginVertical: 10
  },
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  headerTextContainer: {
    width: '100%'
  },
  headerText: {
    fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: 'normal',
    color: colors.red,
    textAlign: 'center'
  },
  paragraphContainer: {
    flex: 1,
    marginVertical: 10
  },
  paragraphText: {
    fontFamily: privacyParagraphText.fontFamily,
    fontSize: privacyParagraphText.fontSize,
    fontWeight: privacyParagraphText.fontWeight,
    lineHeight: privacyParagraphText.lineHeight,
    color: colors.darkGray,
    textAlign: 'center'
  }
});

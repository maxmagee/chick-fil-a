import EStyleSheet from 'react-native-extended-stylesheet';
import { colors, paragraphText } from '../../config/globalStyles';

export default EStyleSheet.create({
  groupedItemContainer: {
    width: 115,
    height: 155
  },
  imageWithTextContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    width: 78,
    height: 78
  },
  textContainer: {
    width: 85
  },
  text: {
    fontFamily: paragraphText.fontFamily,
    fontSize: paragraphText.fontSize,
    fontWeight: paragraphText.fontWeight,
    color: colors.red,
    textAlign: 'center'
  }
});

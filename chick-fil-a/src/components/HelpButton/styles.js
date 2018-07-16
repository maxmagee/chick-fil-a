import EStyleSheet from 'react-native-extended-stylesheet';
import { colors, paragraphText } from '../../config/globalStyles';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 78,
    height: 78
  },
  textContainer: {
    width: 92
  },
  text: {
    fontFamily: paragraphText.fontFamily,
    fontSize: paragraphText.fontSize,
    fontWeight: paragraphText.fontWeight,
    color: colors.red,
    textAlign: 'center'
  }
});

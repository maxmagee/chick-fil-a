import EStyleSheet from 'react-native-extended-stylesheet';
import { colors, heading } from '../../config/globalStyles';

export default EStyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 10,
    overflow: 'hidden'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    padding: 10,
    color: colors.red,
    fontFamily: heading.fontFamily,
    fontSize: heading.fontSize,
    fontWeight: heading.fontWeight,
    textAlign: 'center'
  },
  body: {
    padding: 10,
    paddingTop: 0
  }
});

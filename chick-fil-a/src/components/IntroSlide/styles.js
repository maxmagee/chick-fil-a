import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth
  },
  upperContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lowerContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6F7F8'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  text: {
    color: '$darkGray',
    fontSize: 21,
    fontFamily: 'Times New Roman',
    lineHeight: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 20
  }
});

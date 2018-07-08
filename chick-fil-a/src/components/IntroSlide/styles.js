import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    padding: 15,
    color: 'orange',
    textAlign: 'center'
  },
  containerSub: {
    backgroundColor: 'green'
  }
});

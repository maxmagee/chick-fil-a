import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  indicator: {
    height: 10,
    width: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: 'black'
  }
});

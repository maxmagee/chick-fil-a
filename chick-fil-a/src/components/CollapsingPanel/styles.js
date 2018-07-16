import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold'
  },
  button: { flex: 1 },
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 10,
    paddingTop: 0
  }
});

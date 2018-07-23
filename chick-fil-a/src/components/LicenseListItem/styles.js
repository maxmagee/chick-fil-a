import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  card: {
    borderRadius: 4,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  cardShadow: {
    marginHorizontal: 12,
    marginVertical: 6,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    maxWidth: '100%',
    flexWrap: 'wrap'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  image: {
    aspectRatio: 1,
    width: 96,
    borderRadius: 0
  },

  text: {
    color: '#34495e',
    marginTop: 3
  }
});

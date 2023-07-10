import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  renderContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 240,
    borderRadius: 20,
    backgroundColor: Colors.light.tabBackground,
    //backgroundColor: 'green',
    // padding: 10,
    //marginHorizontal: 5,
  },
  middleContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  imageContianer: {
    alignSelf: 'center',
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    width: '100%',
    //backgroundColor: 'purple',
    //justifyContent: 'space-around',
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textAlbum: {
    fontSize: 16,
    marginRight: 16,
  },
  textId: {
    fontSize: 16,
  },
  textTitle: {
    fontSize: 18,
  },
});

export default styles;

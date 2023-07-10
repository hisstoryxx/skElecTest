import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  middleContainer: {
    display: 'flex',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageContianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: Colors.light.imageBackground,
  },
  itemImage: {
    // width: '70%',
    // height: '70%',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    width: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    //backgroundColor: 'purple',
    //justifyContent: 'space-around',
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textAlbum: {
    fontSize: 16,
  },
  textId: {
    fontSize: 16,
  },
  textTitle: {
    fontSize: 20,
  },
});

export default styles;

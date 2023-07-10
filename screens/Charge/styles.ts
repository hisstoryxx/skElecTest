import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  renderContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 20,
    backgroundColor: Colors.light.tabBackground,
    padding: 10,
    marginVertical: 5,
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
    fontSize: 20,
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  paddingContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.light.text,
  },
  listContainer: {
    display: 'flex',
    flex: 6,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.light.tint,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  paddingContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    display: 'flex',
    flex: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  renderContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 5,
  },
  imageContianer: {
    alignSelf: 'center',
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
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
    backgroundColor: 'red',
  },
});

export default styles;

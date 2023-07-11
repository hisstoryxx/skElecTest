import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: Colors.light.imageBackground,
    justifyContent: 'center',
  },
  navigatorBar: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    backgroundColor: Colors.light.background,
  },
  barContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginLeft: 12,
    zIndex: 100,
  },
  imageStyle: {
    tintColor: '#323232',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  barTitleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 48,
  },
  barTitleText: {
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#323232',
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
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

  middleContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '70%',
    height: '70%',
  },
  contentContainer: {
    padding: 20,
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textAlbum: {
    fontSize: 16,
    letterSpacing: 1.5,
  },
  textId: {
    fontSize: 16,
    letterSpacing: 1.5,
  },
  textTitle: {
    fontSize: 20,
    lineHeight: 30,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;

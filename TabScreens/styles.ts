import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',

    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'red',
  },
});

export default styles;

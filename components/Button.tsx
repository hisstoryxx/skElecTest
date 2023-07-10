import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Pressable, Text} from 'react-native';
import Colors from '../constants/Colors';

const Button = ({title, bottom, vertical}) => {
  const navigation = useNavigation();

  const goNext = () => {
    if (vertical) {
      navigation.navigate('충전소');
    } else {
      navigation.navigate('나');
    }
  };
  return (
    <>
      <Pressable
        onPress={goNext}
        style={{
          position: 'absolute',
          backgroundColor: Colors.light.tint,
          bottom: Number(`${bottom}`),
          width: '90%',
          alignSelf: 'center',
          padding: 20,
          borderRadius: 100,
          alignItems: 'center',
        }}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Button;

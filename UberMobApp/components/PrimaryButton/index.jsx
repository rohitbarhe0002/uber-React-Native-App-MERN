import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {ThemeContext} from '../../modules/utils/actions';
import styles from './style';

export default function PrimaryButton(props) {
  const {ButtonText, onPress} = props;
  // const {theme} = useContext(ThemeContext);,

  return (
    <>
      <TouchableOpacity onPress={() => onPress()}>
        {/* <LinearGradient
          style={styles.Button}
          start={{x: 3, y: 0.7}}
          end={{x: 3, y: 0}}
           colors={['#fff','red']}
         > */}
          <Text style={styles.buttonText}>{ButtonText}</Text>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    </>
  );
}

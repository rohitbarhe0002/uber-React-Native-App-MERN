import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default function PrimaryButton(props) {
  const {ButtonText, onPress} = props;
 

  return (
    <>
      <TouchableOpacity onPress={() => onPress()}>
          <Text style={styles.buttonText}>{ButtonText}</Text>
      </TouchableOpacity>
    </>
  );
}

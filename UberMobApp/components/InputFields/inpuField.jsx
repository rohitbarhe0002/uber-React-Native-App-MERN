import React, {useContext} from 'react';
import {TextInput} from 'react-native';
// import {ThemeContext} from '../../modules/utils/actions';

export default function InputField(props) {
  // const {theme} = useContext(ThemeContext);

  const {
    placeholder,
    style,
    onChangeText,
    value,
    autoCapitalize,
    keyboardType,
    autoCorrect,
    secureTextEntry,
  } = props;

  return (
    <TextInput
      value={value}
      style={style}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={'#ccc'}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      autoCorrect={autoCorrect}
      secureTextEntry={secureTextEntry}
    />
  );
}

import { View, Text,Image } from 'react-native'
import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputFields/inpuField';
import styles from './style'
const SignIn = () => {
  return (
    <KeyboardAwareScrollView
    enableOnAndroid={true}
    keyboardShouldPersistTaps="handled">
      <View style={{alignSelf: 'center', marginTop: 20}}>
          <Image
            style={{height: 300, width: 300}}
            source={require('../../assets/images/Prizedly_logo.png')}
          />
        </View>
        <InputField
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          autoCorrect={false}
          placeholder={'Enter your Email'}
          onChangeText={e => onChangEmail(e)}
          value={''}
          style={styles.input}
        />
         <View style={styles.iconInputField}>
          <InputField
            placeholder={'Enter your Password'}
            onChangeText={e => onChangPassword(e)}
            value={''}
            secureTextEntry={true}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.input}
          />
     
        </View>
        
    </KeyboardAwareScrollView>
  )
}

export default SignIn;
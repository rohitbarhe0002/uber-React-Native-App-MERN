import {
    TouchableOpacity,
    View,
    Text,
    Image,
  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import InputField from '../../components/InputFields/inpuField';
import React from 'react'
import styles from './style'
import PrimaryButton from '../../components/PrimaryButton';

const SignUp = () => {
  return (
    <KeyboardAwareScrollView
    enableOnAndroid={true}
    keyboardShouldPersistTaps="handled">
    <Spinner visible={true} />
    <View style={styles.container}>
      <View style={{alignSelf: 'center', marginTop: 20}}>
        <Image
          style={{height: 300, width: 300}}
          source={require('../../assets/images/Prizedly_logo.png')}
        />
      </View>
      <InputField
        autoCapitalize={'words'}
        autoCorrect={false}
        placeholder={'Your name'}
        onChangeText={e => onChangName(e)}
        value={''}
        style={styles.input}
      />
      <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Email'}
        onChangeText={e => onChangEmail(e)}
        value={''}
        style={styles.input}
      />
      <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Password'}
        onChangeText={e => onChangPassword(e)}
        value={''}
        style={styles.input}
        secureTextEntry={true}
      />
      <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Confirm password'}
        onChangeText={e => onChangConfirmPassword(e)}
        value={''}
        style={styles.input}
        secureTextEntry={true}
      />
      <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Enter the invite code'}
        onChangeText={e => userInviteCode(e)}
        value={''}
        style={styles.input}
      />
      <View style={styles.ButtonSaparator} />
      <PrimaryButton
          onPress={() => SignUpHandler()}
          ButtonText={'Agree and Register'}
        />
      <View style={styles.registerNowView}>
        <Text style={styles.accountText}>
          Already have an sasaaccount?{' '}
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.registerNowText}>
            Login
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('OffersWebView', {
            url: 'https://prized.ly/terms/',
          })
        }
        style={styles.termsTextView}>
        <Text style={styles.termsText}>Terms & Conditions</Text>
      </TouchableOpacity>
      <View style={styles.bottomView} />
    </View>
  </KeyboardAwareScrollView>
  )
}

export default SignUp
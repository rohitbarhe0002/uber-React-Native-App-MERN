import {
    TouchableOpacity,
    View,
    Text,
    Image,
  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import InputField from '../../components/InputFields/inpuField';
import React,{useState} from 'react'
import styles from './style'
import PrimaryButton from '../../components/PrimaryButton';
import { AuthApi } from '../../apis/AuthApis/AuthorApi';

const SignUp = () => {
  const [userData,setUserData] = useState({
   username:'',
    email:'',
    address:'',
    city:'',
    phoneNumber:'',
    password:'',
    confirmPassword:''
  })

  const handleSignUp = () => {
    if(userData.password === userData.confirmPassword) {
const { confirmPassword, ...restUserData } = userData;
       AuthApi.SignUp(restUserData).then((res)=>{
       }).catch((errorInfo) => {
            console.log(errorInfo,">>>error");
        });
    }else {
      console.log("password is not matched")
    }
      }

  return (
    <KeyboardAwareScrollView
    enableOnAndroid={true}
    keyboardShouldPersistTaps="handled">
    {/* <Spinner visible={} /> */}
    <View style={styles.container}>
      <View style={{alignSelf: 'center', marginTop: 20}}>
        <Image
          style={{height: 200, width: 200}}
          source={require('../../assets/images/Prizedly_logo.png')}
        />
      </View>
      <InputField
        autoCapitalize={'words'}
        autoCorrect={false}
        placeholder={'Your name'}
        onChangeText={e => setUserData((user) => ({ ...user,username: e, }))}
        value={userData.name}
        style={styles.input}
      />
      <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Email'}
        onChangeText={e => setUserData((user) => ({ ...user,email: e, }))}
        value={userData.email}
        style={styles.input}
      />
       <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Address'}
        onChangeText={e => setUserData((user) => ({ ...user,address: e, }))}
        value={userData.address}
        style={styles.input}
      />
       <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'City'}
        onChangeText={e => setUserData((user) => ({ ...user,city: e, }))}
        value={userData.city}
        style={styles.input}
      />
       <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Phonenumber'}
        onChangeText={e => setUserData((user) => ({ ...user,phoneNumber: e, }))}
        value={userData.phoneNumber}
        style={styles.input}
      />
      <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Password'}
        onChangeText={e => setUserData((user) => ({ ...user,password: e, }))}
        value={userData.password}
        style={styles.input}
        secureTextEntry={true}
      />
      <InputField
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Confirm password'}
        onChangeText={e => setUserData((user) => ({ ...user,confirmPassword: e, }))}
        value={userData.confirmPassword}
        style={styles.input}
        secureTextEntry={true}
      />
      <View style={styles.ButtonSaparator} />
      <PrimaryButton
          onPress={() => handleSignUp()}
          ButtonText={'Agree and Register'}
        />
      <View style={styles.registerNowView}>
        <Text style={styles.accountText}>
          Already have an sasaaccount?{' '}
          <Text
            onPress={() => handleSignUp()}
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

export default SignUp;
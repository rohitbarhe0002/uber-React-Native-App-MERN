import { View, Text,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputFields/inpuField';
import styles from './style'
const SignIn = () => {
  const [userDetails,setUserDetails] = useState({userName:'',password:''})
  console.log(userDetails,"userDetails")
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
          onChangeText={e => setUserDetails((user) => ({ ...user,userName: e, }))}
          value={userDetails.name}
          style={styles.input}
        />
         <View style={styles.iconInputField}>
          <InputField
            placeholder={'Enter your Password'}
            onChangeText={e => setUserDetails((user) => ({ ...user,userName: e, }))}
            value={userDetails.password}
            secureTextEntry={true}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.input}
          />
     
        </View>

        <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=>console.log('')}
  >
    <Text 
   style={{width: '90%',marginLeft: 20,marginRight: 20,display: 'flex',justifyContent: 'center',backgroundColor:'#5446A7', alignItems:'center',textAlign:'center',padding: 15,color: '#fff',borderRadius: 10}}>Login</Text>
  </TouchableOpacity>

        
    </KeyboardAwareScrollView>
  ) 
}

export default SignIn;
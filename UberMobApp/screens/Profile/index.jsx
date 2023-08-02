import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, TextInput, Pressable } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = ({navigation}) => {
  const [userInfo,setUserInfo] = useState({username:'',address:'',city:''})
const [isEditable,setIsEditable] = useState(false)
const {userCredential, loading, openErrorModal,error} = useSelector(state => state.userAuthSlice);


useEffect(() => {
  if (userCredential) {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      username: userCredential.username,
      address: userCredential.address,
      city: userCredential.city,
    }));
  }
}, []);

const handleSignOut= () => {
  AsyncStorage.removeItem('userToken')
navigation.navigate('SignIn')
}
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:'data:image/jpeg;base64,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'}}
        style={styles.profileBackground}
        blurRadius={0}
      /> 
<Image
style={styles.profileImage}
source={{uri:'data:image/png;base64,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'}}
/>
<View style={styles.detailsContainer}>
<Text style={styles.inputFiledLabel}>Username:</Text>
           <TextInput
           onChangeText={(text)=>setUserInfo({...userInfo,username:text})}
           value={userInfo?.username}
           editable={isEditable}
           style={styles.inputFiled}
         />
    <Text style={styles.inputFiledLabel}>Email:</Text>
          <TextInput
           onChangeText={(text)=>setUserInfo({...userInfo,address:text})}
           value={userInfo?.address}
           editable={isEditable}
           style={styles.inputFiled}
         />

         <Text style={styles.inputFiledLabel}>City:</Text>
           <TextInput
           onChangeText={(text)=>setUserInfo({...userInfo,city:text})}
           value={userInfo?.city}
           editable={isEditable}
           style={styles.inputFiled}
         />

     </View>
     <View>
<View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20,alignContent:'center', }}>          
  <Pressable onPress={()=>setIsEditable(!isEditable)} style={{ width: 35,height:35, backgroundColor:'#5446A7',borderRadius:50,paddingTop:7,paddingLeft:6}}>
  <AntIcon name="edit" color="#fff" size={20} />
  </Pressable>

</View>

<View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20,alignContent:'flex-end', top:50}}>          
  <Pressable onPress={()=>handleSignOut()} style={{ width: 35,height:35, backgroundColor:'#5446A7',borderRadius:50,paddingTop:7,paddingLeft:7}}>
  <AntIcon name="logout" color="#fff" size={20} />
  </Pressable>

</View>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
flex:1,

  },
 profileBackground: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  profileImage:{
    width: '10%',
    height: 400,
    bottom: 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#fff',

  },
  detailsContainer: {
    padding:18,
    height:300,

  },
  inputFiledLabel:{
    marginTop:10,
    marginLeft:5,
    color:'#5446A7',
    fontSize:14,
    fontWeight:'500'
  },
  inputFiled:{
    border:0,
    borderBottomWidth:1,
    marginBottom: 5,
    borderRadius:15,
    borderColor:'#5446A7',
    color:'#000'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#333',
  },
});

export default Profile;

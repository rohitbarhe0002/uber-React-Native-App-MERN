import AsyncStorage from '@react-native-community/async-storage';

export default getUserToken = async () => {
  try {
    userToken = await AsyncStorage.getItem('@userToken_Key');
    console.log('checked');
    return userToken;
  } catch (error) {
    console.error('Error retrieving user token from AsyncStorage:', error);
  }
};

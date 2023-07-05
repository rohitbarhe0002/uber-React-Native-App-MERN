import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logo: {
      height: 150,
      width: 150,
      backgroundColor: '#fff',
      alignSelf: 'center',
      marginTop: '30%',
    },
    input: {
      height: 52,
      width: '90%',
      margin: 12,
      borderRadius: 8,
      backgroundColor: '#fff',
      padding: 10,
      alignSelf: 'center',
      fontFamily: 'Urbanist',
    },
    inputSaparator: {
      marginTop: '10%',
    },
    iconInputField: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    svgIcon: {
      position: 'absolute',
      right: 30,
    },
    forgotView: {
      alignSelf: 'flex-end',
      right: 20,
    },
    forgotText: {
      color: '',
      fontWeight: '600',
      lineHeight: 17,
      fontSize: 14,
    },
    ButtonSaparator: {
      marginTop: '5%',
    },
    socialLogin: {
      width: '25%',
      height: 56,
      borderRadius: 8,
      borderColor:'#5446A7',
      borderWidth: 1,
      justifyContent: 'center',
    },
    SocialView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: '7%',
    },
    bottomSocialLogin: {
      width: 105,
      height: 56,
      borderRadius: 8,
      borderColor: '#fff',
      borderWidth: 1,
      marginRight: 20,
      justifyContent: 'center',
    },
    socialSvgIcon: {
      alignSelf: 'center',
    },
    bottomSocialView: {
      flexDirection: 'row',
      marginTop: '5%',
      alignSelf: 'center',
    },
    registerNowView: {
      alignSelf: 'center',
      marginTop: '10%',
    },
    accountText: {
      color: '#5446A7',
      fontWeight: '500',
      fontSize: 15,
      fontFamily: 'Urbanist',
    },
    registerNowText: {
      color: '#5446A7',
      fontWeight: '700',
      fontSize: 15,
    },
    termsText: {
      color: '#5446A7',
      fontWeight: '600',
      fontSize: 15,
      letterSpacing: 0.6,
      fontFamily: 'Urbanist',
    },
    termsTextView: {
      alignSelf: 'center',
      marginTop: '5%',
    },
    bottomView: {
      marginTop: 20,
    },
  });
export default styles;

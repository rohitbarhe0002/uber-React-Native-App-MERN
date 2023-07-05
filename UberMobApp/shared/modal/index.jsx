import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Button, TextInput,} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";

import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ModalView = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('Approved');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
         <Text onPress={()=>setModalVisible(!modalVisible)} style={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end',left:'50%',paddingBottom:0,fontWeight:'bold',backgroundColor:'red'}}
        
         >
         <AntIcon name="close" color="#000" size={18} />
         </Text>
          <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
   >
    
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{width:'100%'}}>
           <Text style={{ marginBottom: 5,marginLeft:5,color:'#000',fontSize:14 }}>Name</Text>
           <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={{borderColor:'#ccc',borderWidth:1,marginBottom: 15,borderRadius:15}}
         />
           <Text style={{ marginBottom: 5,marginLeft:5,color:'#000',fontSize:14 }}>Delivery Address</Text>
           <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={{borderColor:'#ccc',borderWidth:1,marginBottom: 15,borderRadius:15}}
           label="Email"
         />
           <Text style={{ marginBottom: 5,marginLeft:5,color:'#000',fontSize:14 }}>Price</Text>
           <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={{borderColor:'#ccc',borderWidth:1,marginBottom: 15,borderRadius:15}}
           label="Email"
         />
       <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
  <RadioButton
    value="first"
    status={checked === 'Approved' ? 'checked' : 'unchecked'}
    onPress={() => setChecked('Approved')}
  />
  <Text style={{ width: 40 }}>Approved</Text>

  <RadioButton
    value="second"
    status={checked === 'Pending' ? 'checked' : 'unchecked'}
    onPress={() => setChecked('Pending')}
  />
  <Text style={{ width: 40 }}>Pending</Text>
  <RadioButton
    value="second"
    status={checked === 'Declined' ? 'checked' : 'unchecked'}
    onPress={() => setChecked('Declined')}
  />
  <Text style={{ width: 40 }}>Declined</Text>
</View>

     <View style={{borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleSubmit()}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
         </View>
       </View>
     )}
   </Formik>  
          </View>
        </View>
      </Modal>
  
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    boxsizing:'border-box',

  },
  modalView: {
    width:'80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    boxsizing:'borderox',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
  padding:8,
    width:150,
   
   
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#5446A7',
    color: '#2196F3',
    
    borderRadius: 50,
    marginTop: 10,
    display:'flex',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize:16
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalView;
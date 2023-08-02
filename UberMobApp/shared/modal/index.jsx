import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
  TextInput,
} from 'react-native';


//@ts-ignore
import AntIcon from "react-native-vector-icons/AntDesign";
import {RadioButton} from 'react-native-paper';
import {Formik} from 'formik';
import {OrdersApi} from '../../apis/orderApis/orderApi';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { toggleModal } from '../../redux/slices/modalSlice';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const ModalView = ({itemId, handleOnSubmit}) => {
  const {isOpen} = useSelector(state => state.orderModalSlice);
  const formikRef = React.useRef(null);
  const [checked, setChecked] = React.useState('Accepted');
  const dispatch  = useDispatch()

  useEffect(() => {
    let filterdData;
    if (isOpen && itemId) {
      OrdersApi.getById(itemId).then(order => {
        formikRef.current.setValues({
          price: order.price.toString(),
          deliveryAddress: order.deliveryAddress,
        });
        setChecked(order?.status);
      });

      return () => {
        formikRef?.current?.resetForm(); // Reset the Formik form to initial values
        setChecked('Accepted'); // Reset the radio button to default value
      };
    
    }
  }, [isOpen]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          dispatch(toggleModal(!isOpen))
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => dispatch(toggleModal(!isOpen))}
              style={{
                alignSelf: 'flex-end', // Align the Pressable component to the right
              }}>
              <Text
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#5446A7',
                  borderRadius: 30,
                  paddingTop: 7,
                  paddingLeft: 7,
                  justifyContent: 'flex-end',
                  display: 'flex',
                  alignContent: 'flex-end',
                  fontWeight: '600',
                }}>
                <AntIcon name="close" color="#fff" size={15} />
              </Text>
            </Pressable>
            <Formik
              initialValues={{name: '', deliveryAddress: '', price: ''}}
              innerRef={formikRef}
              onSubmit={values => {
                let userInfo = {
                  orderID: Math.random(99999999) + 1,
                  deliveryAddress: values.deliveryAddress,
                  price: values.price,
                  status: checked,
                };
                handleOnSubmit(userInfo);
              }}>
              {({handleChange, handleBlur, handleSubmit, values}) => (
                <View style={{width: '100%'}}>
                  <Text
                    style={{
                      marginBottom: 5,
                      marginLeft: 5,
                      color: '#000',
                      fontSize: 14,
                    }}>
                    Name
                  </Text>
                  <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      marginBottom: 15,
                      borderRadius: 15,
                    }}
                  />
                  <Text
                    style={{
                      marginBottom: 5,
                      marginLeft: 5,
                      color: '#000',
                      fontSize: 14,
                    }}>
                    Delivery Address
                  </Text>
                  <TextInput
                    onChangeText={handleChange('deliveryAddress')}
                    onBlur={handleBlur('deliveryAddress')}
                    value={values.deliveryAddress}
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      marginBottom: 15,
                      borderRadius: 15,
                    }}
                    label="deliveryAddress"
                  />
                  <Text
                    style={{
                      marginBottom: 5,
                      marginLeft: 5,
                      color: '#000',
                      fontSize: 14,
                    }}>
                    Price
                  </Text>
                  <TextInput
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    value={values.price}
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      marginBottom: 15,
                      borderRadius: 15,
                    }}
                    label="price"
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    <RadioButton
                      value="first"
                      status={checked === 'Accepted' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('Accepted')}
                    />
                    <Text style={{width: 40}}>Accepted</Text>

                    <RadioButton
                      value="second"
                      status={checked === 'Pending' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('Pending')}
                    />
                    <Text style={{width: 40}}>Pending</Text>
                    <RadioButton
                      value="second"
                      status={checked === 'Declined' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('Declined')}
                    />
                    <Text style={{width: 40}}>Declined</Text>
                  </View>

                  <View
                    style={{
                      borderRadius: 10,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
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
    boxsizing: 'border-box',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    boxsizing: 'borderox',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 8,
    width: 150,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#5446A7',
    color: '#2196F3',

    borderRadius: 50,
    marginTop: 10,
    display: 'flex',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default ModalView;

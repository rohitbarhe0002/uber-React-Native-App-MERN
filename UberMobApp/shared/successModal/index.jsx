import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';


//@ts-ignore
import AntIcon from "react-native-vector-icons/AntDesign";
import {useDispatch} from 'react-redux';
import { toggleSuccessModal } from '../../redux/slices/usersOrdersSlice';

const SuccessModal = ({isSuccess,successMsg }) => {
  const dispatch  = useDispatch()
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSuccess}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          dispatch(toggleSuccessModal(!isSuccess))
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
              onPress={() =>dispatch(toggleSuccessModal(!isSuccess))}
              style={{
                alignSelf: 'flex-end',
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
           <Text>{successMsg}</Text>
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

export default SuccessModal;

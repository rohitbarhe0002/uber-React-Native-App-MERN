import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet} from 'react-native';
import ModalView from '../../shared/modal';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {createOrder, fetchAllOrder, removeOrder} from '../../redux/slices/usersOrdersSlice';
import { toggleModal } from '../../redux/slices/modalSlice';
import ErrorModal from '../../shared/errorModal';
import SuccessModal from '../../shared/successModal';
import { OrdersApi } from '../../apis/orderApis/orderApi';

function Order({navigation}) {
  const dispatch = useDispatch();
  const {userOrders, loading, openErrorModal,error,isSuccess,successMsg} = useSelector(state => state.usersOrderSlice);
  const {isOpen} = useSelector(state => state.orderModalSlice);
  const [customerOrderId, setCustomerOrderId] = useState(null);
console.log(userOrders,">>")
  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch]);


  const handleItemEdit = itemId => {
    setCustomerOrderId(itemId);
    dispatch(toggleModal(!isOpen))
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{alignItems:'center',justifyContent:'center',flex:1}} />;
  }


  const makeYourOrder = userData => {
    if (!customerOrderId) {
     dispatch(createOrder(userData))
     dispatch(toggleModal(!isOpen))
    } else {
      OrdersApi.updateOrder(customerOrderId,userData).then((res)=> {
      OrdersApi.getAllOrder().then((res)=> dispatch(fetchAllOrder()))
        dispatch(toggleModal(!isOpen))
        setCustomerOrderId('')
        navigation.navigate('menu')
      })
    }
  };


  const renderStatus = status => {
    if (status === 'Accepted') {
      return <Text style={{color: 'green'}}>{status}</Text>;
    }
    if (status === 'Pending') {
      return <Text style={{color: 'orange'}}>{status}</Text>;
    }
    if (status === 'Declined') {
      return <Text style={{color: 'red'}}>{status}</Text>;
    }
  };


  const renderMenuItemButton = () => (
    <View style={styles.customView}>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => dispatch(toggleModal(!isOpen))}>
        <AntIcon name="plus" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        maxHeight: '100%',
        position: 'relative',
        minWidth: '100vh',
        flexDirection: 'column',
      }}>
      <View
        style={{
          height: '90%',
          maxHeight: '90vh',
          minHeight: '90vh',
          overflow: 'scroll',
        }}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled">
          <DataTable.Header
            style={{backgroundColor: '#5446A7', borderRadius: 10, margin: 5}}>
            <DataTable.Title numeric>
              <Text style={styles.headerText}>Delivery Address</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={styles.headerText}>Price</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={styles.headerText}>Status</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              {' '}
              <Text style={styles.headerText}>Remove Action</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              {' '}
              <Text style={styles.headerText}>Edit Action</Text>
            </DataTable.Title>
          </DataTable.Header>

        { userOrders?.length > 0 ?  <DataTable style={{paddingLeft: 10}}>
            { 
              userOrders.map((item, indx) => (
                <DataTable.Row
                  key={indx}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginBottom: 10,
                    margin: 10,
                  }}>
                  <DataTable.Cell
                    style={{
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#000', fontSize: 16}}>
                      {item.deliveryAddress}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{color: '#000', fontSize: 16}}>
                      {item.price}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      width: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#000', fontSize: 16}}>
                      {renderStatus(item.status)}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      width: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 0,
                    }}>
                    <TouchableOpacity
                      onPress={() => dispatch(removeOrder(item.orderID))}>
                      <AntIcon name="delete" color="red" size={18} />
                    </TouchableOpacity>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      width: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 0,
                    }}>
                    <TouchableOpacity
                      onPress={() => handleItemEdit(item.orderID)}>
                      <AntIcon name="edit" color="blue" size={18} />
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
          </DataTable>:<Text style={{textAlign:'center'}}>no data is found</Text>}
        </KeyboardAwareScrollView>
      </View>
      <View>{renderMenuItemButton()}</View>

      <ModalView
        handleOnSubmit={makeYourOrder}
        itemId={customerOrderId}
        setItemId={setCustomerOrderId}
      />
      <ErrorModal errorMsg={error} isError={openErrorModal}/>
      <SuccessModal isSuccess={isSuccess} successMsg={successMsg}/>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    maxWidth: '10px',
  },
  customView: {
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  floatingButton: {
    width: 35,
    height: 35,
    backgroundColor: '#5446A7',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Order;

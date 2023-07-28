import React, {useEffect, useState} from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import orders from '../../assets/data/dashboard/orders.json'
import { DataTable } from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet} from 'react-native';
import ModalView from '../../shared/modal';
import AntIcon from "react-native-vector-icons/AntDesign";
import { OrdersApi } from '../../apis/orderApis/orderApi';
import { getAllOrder,removeOrders } from '../../redux/slices/usersSlice';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function Order() {
  const dispatch  = useDispatch()
  const { userOrders } = useSelector((state) => state.userSlice);

  const [items] = React.useState(orders);
  const [userOrder, setUserOrder] = useState([]);
  const [orderModal, setOrderModal] = useState(false);
  const [customerOrderId, setCustomerOrderId] = useState(null);
console.log(userOrders,">>>>")

  useEffect(()=>{
         OrdersApi.getAllOrder()
          .then((orders) => {
            setUserOrder(orders);
            dispatch(getAllOrder(orders))
          })
          .catch((err) => {
            console.log(err);
          });
  },[])
  

  const removeOrderdItems = (orderId) => {
    console.log(orderId,"orderID")
    OrdersApi.deleteOrders(orderId)
      .then((res) => {
        console.log(res,"res")
        OrdersApi.getAllOrder()
          .then((orders) => {
            setUserOrder(orders);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleItemEdit = (itemId) => {
    setOrderModal(!orderModal);
    setCustomerOrderId(itemId);
    // setOrderModal(!orderModal);
  };

  const makeYourOrder = (userData) => {
    if(!customerOrderId){

    
    console.log(userData,"from history")
    OrdersApi.createOrder(userData).then((res)=>{
    OrdersApi.getAllOrder().then((res)=>{
    setUserOrder(res)
   })
   console.log("come in if")
      setOrderModal(!orderModal);

    })
  }
  else{
    console.log("come in lese")
  let pos = userOrder && userOrder.findIndex((orderItm, i) => orderItm.orderID === customerOrderId);
  console.log(pos,"pos>>>>")
  if (pos !== -1) {
  // Existing user found in the list
  let updatedItem = { ...userOrder[pos], deliveryAddress:userData.deliveryAddress , price: userData.price, status: userData.status};
  let newData = [...userOrder];
  newData[pos] = updatedItem;
  console.log(newData[pos], "-----pos");
  setUserOrder(newData);
  setOrderModal(!orderModal)
      // setIsModalOpen(!isModalOpen)
// form.resetFields();
  }
  }
}
  

 
  const renderStatus = (status) => {
    if (status === 'Accepted') {
      return <Text style={{ color: 'green' }}>{status}</Text>;
    }
    if (status === 'Pending') {
      return <Text style={{ color: 'orange' }}>{status}</Text>;
    }
    if (status === 'Declined') {
      return <Text style={{ color: 'red' }}>{status}</Text>;
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Text>Order ID: {item.orderID}</Text>
        <Text>Delivery address: {item.deliveryAddress}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Status: {renderStatus(item.status)}</Text>
        <TouchableOpacity onPress={() => console.log("")}>
          <Text>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("")}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleEdit = () => {
    
  }

  const renderMenuItemButton = () => (
    <View style={styles.customView}>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={()=>setOrderModal(!orderModal)}
      >
        <AntIcon name="plus" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );

  const renderActionButtons = btnTxt => {
    console.log(btnTxt, 'btntxt');
    return (
  
    <Button
    title={btnTxt}
    color="red"
    onPress={() => Alert.alert('Simple Button pressed')}
  />
  )
  }
  return (
    <View style={{ flex: 1, maxHeight: '100%', position:'relative', minWidth:'100vh',flexDirection: 'column' }}>
   <View style={{height: '90%', maxHeight: '90vh', minHeight: '90vh', overflow: 'scroll',}}>
    <KeyboardAwareScrollView
    enableOnAndroid={true}
    keyboardShouldPersistTaps="handled">
       <DataTable.Header style={{backgroundColor: '#5446A7',borderRadius:10,margin:5}}>
        <DataTable.Title numeric><Text style={styles.headerText} >Delivery Address</Text></DataTable.Title>
        <DataTable.Title  numeric><Text style={styles.headerText} >Price</Text></DataTable.Title>
        <DataTable.Title  numeric><Text style={styles.headerText} >Status</Text></DataTable.Title>
        <DataTable.Title  numeric> <Text style={styles.headerText}>Remove Action</Text></DataTable.Title>
        <DataTable.Title numeric > <Text style={styles.headerText} >Edit Action</Text></DataTable.Title>
      </DataTable.Header>

  <DataTable style={{paddingLeft:10}} >
  {userOrders && userOrders.map((item, indx) => (
    <DataTable.Row
      key={indx}
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        margin:10
      }}
    >
      <DataTable.Cell
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Text style={{ color: '#000', fontSize: 16 }}>{item.deliveryAddress}</Text>
      </DataTable.Cell>
      <DataTable.Cell
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'center',
        }}

      >
        <Text numberOfLines={1} style={{ color: '#000', fontSize: 16 }}>{item.price}</Text>
      </DataTable.Cell>
      <DataTable.Cell
        style={{
          width: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#000', fontSize: 16 }}>{renderStatus(item.status)}</Text>

      </DataTable.Cell>
      <DataTable.Cell
        style={{
          width: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0
        }}
      >
    <TouchableOpacity onPress={()=>removeOrderdItems(item.orderID)}>
     <AntIcon name="delete" color="red" size={18}  />
     </TouchableOpacity>
      </DataTable.Cell>
      <DataTable.Cell
        style={{
          width: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0
        }}
      >
    <TouchableOpacity onPress={()=>handleItemEdit(item.orderID)}>
     <AntIcon name="edit" color="blue" size={18}  />
     </TouchableOpacity>
      </DataTable.Cell>
    </DataTable.Row>
  ))}
</DataTable>

    </KeyboardAwareScrollView>
    </View>
    <View>{renderMenuItemButton()}</View>

   
    <ModalView isOpen={orderModal} setIsOpen={setOrderModal} handleOnSubmit={makeYourOrder} handleOnEdit={handleEdit} itemId={customerOrderId} />
      </View>
  );

}


const styles =   StyleSheet.create({
  headerText:{
   color:'white',
   maxWidth:'10px'
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
   })

export default Order;

 
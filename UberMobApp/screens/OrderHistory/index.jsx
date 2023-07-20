import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import orders from '../../assets/data/dashboard/orders.json'
import { DataTable } from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet} from 'react-native';
import ModalView from '../../shared/modal';
import AntIcon from "react-native-vector-icons/AntDesign";
import { OrdersApi } from '../../apis/orderApis/orderApi';
import axios from 'axios';

// import ModalContent from '../../shared/MdalContent';
// import ModalView from '../../shared/Modal';
// import { OrdersApi } from '../../apis/orderApis/orderApi';

function Order() {
  const [items] = React.useState(orders);
  const [userOrder, setUserOrder] = useState([]);
  // const [orderModal, setOrderModal] = useState(false);
  // const [customerOrderId, setCustomerOrderId] = useState(null);

  const [data, setData] = useState([]);

  useEffect(()=>{
         OrdersApi.getAllOrder()
          .then((orders) => {
            setUserOrder(orders);
          })
          .catch((err) => {
            console.log(err);
          });
  },[])
  console.log(userOrder,"iam rendered")
  

  // const removeOrderdItems = (orderId) => {
  //   OrdersApi.deleteOrders(orderId)
  //     .then((res) => {
  //       OrdersApi.getAllOrder()
  //         .then((orders) => {
  //           setUserOrder(orders);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleItemEdit = (itemId) => {
  //   console.log(itemId, 'item id');
  //   setCustomerOrderId(itemId);
  //   setOrderModal(!orderModal);
  // };

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

  const renderMenuItemButton = () => (
    <Button title="Create Item" onPress={() => setOrderModal(!orderModal)} />
  );

  const renderActionButtons = (btnTxt) => {
console.log(btnTxt,"btntxt");
  return (

  
    <Button
    title={btnTxt}
    color="red"
    onPress={() => Alert.alert('Simple Button pressed')}
  />
  )
  }
  return (
  <View>
    <KeyboardAwareScrollView
    enableOnAndroid={true}
    keyboardShouldPersistTaps="handled">
       <DataTable.Header style={{backgroundColor: '#5446A7',borderRadius:10,margin:10}}>
        <DataTable.Title ><Text style={styles.headerText} >OrderID</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.headerText} >Delivery Address</Text></DataTable.Title>
        <DataTable.Title  numeric><Text style={styles.headerText} >Price</Text></DataTable.Title>
        <DataTable.Title  numeric><Text style={styles.headerText} >Status</Text></DataTable.Title>
        <DataTable.Title  numeric> <Text style={styles.headerText}>Remove Action</Text></DataTable.Title>
        <DataTable.Title numeric > <Text style={styles.headerText} >Edit Action</Text></DataTable.Title>
      </DataTable.Header>

  <DataTable style={{paddingLeft:10}} >
  {userOrder && userOrder.map((item, indx) => (
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
        <Text numberOfLines={1} style={{ color: '#000', fontSize: 16 }}>{item.orderID}</Text>
      </DataTable.Cell>
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
   <View>
   <AntIcon name="edit" color="#000" size={20} />
</View>
      </DataTable.Cell>
      <DataTable.Cell
        style={{
          width: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
     <View >
     <AntIcon name="delete" color="red" size={18} />
           </View>
      </DataTable.Cell>
    </DataTable.Row>
  ))}
</DataTable>
    </KeyboardAwareScrollView>
    <ModalView/>

    </View>
  );
}

export default Order;

const styles =   StyleSheet.create({
  headerText:{
   color:'white',
   maxWidth:'10px'
  }
   })
 
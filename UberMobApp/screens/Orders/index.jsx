





  // import { View, Text, ScrollView, Image, SafeAreaView} from 'react-native'
// import React from 'react'
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import AntIcon from "react-native-vector-icons/AntDesign";
// const OrderHistory = () => {
//   return (

//     <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
//     <View style={{ flex: 1}}>
 
//       <ScrollView style={{maxHeight:220,backgroundColor:'blue'}} horizontal showsHorizontalScrollIndicator={false}>
//         <View style={{ flexDirection: 'row', gap: 0, top: 20 , marginHorizontal:10}}>
//           <View style={{ width: 420}}>
//             <Image style={{ width: 370, height: 200, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />
//           </View>
//           <View style={{ width: 420 }}>
//             <Image style={{ width: 370, height: 200, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />

//           </View>
//           <View style={{ width: 420  }}>
//             <Image style={{ width: 370, height: 200, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />
//           </View>
//         </View>
//       </ScrollView>
//       <View>

     
//       <Text style={{marginVertical:15,alignItems:'center',fontWeight:'700',display:'flex',marginHorizontal:15,color:'#5446A7',top:15}}> Delicious Items</Text>
//       </View>
//   <View style={{ flexDirection: 'row', gap: 3,backgroundColor:'yello' }}>
//     <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3}}>
//       <View style={{ width: '50%', height: 200, justifyContent: 'center' }}>
//         <Image style={{ width: 170, height: 150, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />
//       </View>
//       <View style={{ width: '50%', height: 200, justifyContent: 'center' }}>
//         <Image style={{ width: 170, height: 150, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />
//       </View>
//     </View>
//   </View>
 
//   <View style={{ marginTop: 10, borderRadius: 20, maxHeight: 30, backgroundColor: '#5446A7', marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//   <Text style={{ marginHorizontal: 15, marginVertical: 5, fontWeight: '400', color: '#fff' }}>Apply your promo %</Text>
//   <AntIcon name="arrowright" color="#fff" size={20} style={{ marginRight: 15 }} />
// </View>

//   <View style={{ width: 420,alignItems:'center',justifyContent:'center',paddingRight:7,top:10,backgroundColor:'red'}}>
//             <Image style={{ width: 390, height: 150, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOXVLq8ZJ_HekzKpTfZm9p1zUzw3ui5mMSQ&usqp=CAU' }} />
//           </View>
//           <View style={{ width: 420,alignItems:'center',justifyContent:'center',paddingRight:7,top:10,backgroundColor:'red'}}>
//             <Image style={{ width: 390, height: 150, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOXVLq8ZJ_HekzKpTfZm9p1zUzw3ui5mMSQ&usqp=CAU' }} />
//           </View>
//     </View>
//     </SafeAreaView>
//     // </View>
    
//   )
// }

// export default OrderHistory;

import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import RestaurentMenus from '../../assets/data/user/restaurentsItem.json'

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const OrderHistory= ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={style.categoriesListContainer}
>
  {RestaurentMenus.map((category, index) => (
    <TouchableOpacity
      key={index}
      activeOpacity={0.8}
      onPress={() => setSelectedCategoryIndex(index)}
    >
      <View
        style={{
          backgroundColor: '#5446A7',
          ...style.categoryBtn,
        }}
      >
        <View style={style.categoryBtnImgCon}>
          <Image
            source={{uri:category.image}}
            style={{height: 35, width: 35, resizeMode: 'cover'}}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            marginLeft: 5,
            color: '#fff'
          }}
        >
         {category.name}
        </Text>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>

    );
  };
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={''}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: 0,elevation:12}}>
            <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'}} style={{height: 100, width: '98%',borderRadius:15,overflow:'hidden'}} />
          </View>
          <View style={{marginHorizontal: 20,marginTop:20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold',color:'#5446A7'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: '#ddddd', marginTop: 2}}>
           {food.description}
             
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {food.price}$
            </Text>
            <View style={style.addToCartBtn}>
            <AntIcon name="info" color="#fff" size={20} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{top:0}}>
      <View style={style.header}>
            <ScrollView style={{height:220}} horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', gap: 0, top: 10 , marginHorizontal:10}}>
          <View style={{ width: 420}}>
            <Image style={{ width: 370, height: 200, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />
          </View>
          <View style={{ width: 420 }}>
            <Image style={{ width: 370, height: 200, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />

          </View>
          <View style={{ width: 420  }}>
            <Image style={{ width: 370, height: 200, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />
          </View>
        </View>
      </ScrollView>
        
      </View>

<View>

       <Text style={{marginVertical:15,alignItems:'center',fontWeight:'700',display:'flex',marginHorizontal:15,color:'#5446A7',top:15}}> Delicious Items</Text>
       </View>

     <View style={{ flexDirection: 'row', justifyContent: 'center',gap:0}}>
       <View style={{ width: '50%', height: 200, justifyContent: 'center' }}>
         <Image style={{ width: 185, height: 150, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />
       </View>
       <View style={{ width: '50%', height: 200, justifyContent: 'center' }}>
         <Image style={{ width: 185, height: 150, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg' }} />
       </View>
     </View>
        <View style={{ marginTop: 10, borderRadius: 20, maxHeight: 30, backgroundColor: '#5446A7', marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
   <Text style={{ marginHorizontal: 15, marginVertical: 5, fontWeight: '400', color: '#fff' }}>Apply your promo %</Text>
   <AntIcon name="arrowright" color="#fff" size={20} style={{ marginRight: 15 }} />
 </View>
       <View style={{ width: '100%', height: 200, justifyContent: 'center',marginHorizontal:10,alignSelf:'center' }}>
         <Image style={{ width: '95%', height: 150, borderRadius: 30, overflow: 'hidden', alignSelf: 'center' }} source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOXVLq8ZJ_HekzKpTfZm9p1zUzw3ui5mMSQ&usqp=CAU' }} />
       </View>
           </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow:'hidden'
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 15,
    elevation:8,
    backgroundColor: '#f2f2f2',
    margin:100
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor:'#5446A7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderHistory;
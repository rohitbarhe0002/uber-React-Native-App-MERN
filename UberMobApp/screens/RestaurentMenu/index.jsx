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

const RestaurentMenu= ({navigation}) => {
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
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10,color:'#5446A7'}}>
              Ankush
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: '#cccc'}}>
            What do you want today
          </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('OrderHistory')}>
        <Image
          source={{uri:'https://images.pexels.com/photos/2315712/pexels-photo-2315712.jpeg?auto=compress&cs=tinysrgb&w=600'}}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
        <View style={style.sortBtn}>
            <AntIcon name="find" color="#5446A7" size={28} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <ScrollView style={{zIndex:1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={RestaurentMenus}
        renderItem={({item}) => <Card food={item} />}
      />
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

export default RestaurentMenu;
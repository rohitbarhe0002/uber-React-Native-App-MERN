import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import RestaurentMenu from '../../screens/RestaurentMenu';
import OrderHistory from '../../screens/OrderHistory';
import Orders from '../../screens/Orders';
import Profile from '../../screens/Profile';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const navigation = useNavigation(); // Use the useNavigation hook

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: Color(theme).primaryThemeColor,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          height: Platform.OS === 'android' ? '9%' : '10%',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          width: '100%',
          alignSelf: 'center',
          position: 'absolute',
        },
        tabBarHideOnKeyboard:true
      }}>
      <Tab.Screen
        name="Home"
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <AntIcon name="home" color={'#5446A7'} size={20} />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text
                style={{
                  color: '#5446A7',
                  fontSize: 10,
                  fontFamily: 'Urbanist',
                  marginBottom: 10,
                }}>
                Home
              </Text>
            ) : (
              <Text
                style={{
                  color: 'blue',
                  fontSize: 10,
                  fontFamily: 'Urbanist',
                  marginBottom: 10,
                }}>
                Home
              </Text>
            ),
        }}
        component={Orders}
      />
      <Tab.Screen
        name="Restaurent Menu"
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <AntIcon name="inbox" color={'#5446A7'} size={20} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                // color: Color(theme).bottomTabColor,
                fontSize: 10,
                fontFamily: 'Urbanist',
                marginBottom: 10,
              }}>
              Menu
            </Text>
          ),
        }}
        component={RestaurentMenu}
      />
      <Tab.Screen
        name="menu"
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <AntIcon name="menufold" color="#5446A7" size={20} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                // color: Color(theme).bottomTabColor,
                fontSize: 10,
                fontFamily: 'Urbanist',
                marginBottom: 10,
              }}>
              History
            </Text>
          ),
        }}
        component={OrderHistory}
      />

      <Tab.Screen
        name="OrderHistory"
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <AntIcon name="user" color="#5446A7" size={20} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                // color: Color(theme).bottomTabColor,
                fontSize: 10,
                fontFamily: 'Urbanist',
                marginBottom: 10,
              }}>
              Profile
            </Text>
          ),
        }}
        component={Profile}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default tabPress behavior
            e.preventDefault();

            // Navigate to the "Profile" screen with the back button
            navigation.navigate('OrderHistory', { screen: 'OrderHistory' });
          },
        })}
      />
    </Tab.Navigator>
  );
}

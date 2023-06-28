import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Platform} from 'react-native';
import RestaurentMenu from '../../screens/RestaurentMenu';
import OrderHistory from '../../screens/OrderHistory';
import Orders from '../../screens/Orders';
import Profile from '../../screens/Profile';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarStyle: {
        //   backgroundColor: Color(theme).primaryThemeColor,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          height: Platform.OS === 'android' ? '9%' : '10%',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          width: '100%',
          alignSelf: 'center',
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          unmountOnBlur: true,
        //   tabBarIcon: ({color}) => (
        //     <SvgXml
        //       style={{marginTop: Platform.OS === 'ios' ? 10 : 25}}
        //       height={24}
        //       width={24}
        //       xml={icon.homeIcon()}
        //     />
        //   ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{
                  color: 'red',
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
        //   tabBarIcon: ({color}) => (
        //     <SvgXml
        //       style={{marginTop: Platform.OS === 'ios' ? 10 : 25}}
        //       height={24}
        //       width={24}
        //       xml={icon.userIcon()}
        //     />
        //   ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{
                //   color: Color(theme).bottomTabColor,
                  fontSize: 10,
                  fontFamily: 'Urbanist',
                  marginBottom: 10,
                }}>
                Friends
              </Text>
            ) : (
              <Text
                style={{
                //   color: Color(theme).white,
                  fontSize: 10,
                  fontFamily: 'Urbanist',
                  marginBottom: 10,
                }}>
                Friends
              </Text>
            ),
        }}
        component={RestaurentMenu}
      />
      <Tab.Screen
        name="ProfileOutline"
        options={{
          tabBarLabel: 'Profile',
          unmountOnBlur: true,
          tabBarLabel: ({focused}) =>
          focused ? (
            <Text
              style={{
              //   color: Color(theme).bottomTabColor,
                fontSize: 10,
                fontFamily: 'Urbanist',
                marginBottom: 10,
              }}>
              Profile
            </Text>
          ) : (
            <Text
              style={{
              //   color: Color(theme).white,
                fontSize: 10,
                fontFamily: 'Urbanist',
                marginBottom: 10,
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({}) => (
            <View
              style={{
                position: 'absolute',
                bottom: 10, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: theme ? '#6F38C5' : '#FE7E07',
              }}>
              {/* <Image
                style={{
                  bottom: 0, // space from bottombar
                  height: 64,
                  width: 64,
                  borderRadius: 64,
                  justifyContent: 'center',
                  alignItems: 'center',
                //   backgroundColor: Color(theme).primaryThemeColor,
                }}
                // source={{uri: userProfileImg}}
              /> */}
            </View>
          ),
        }}
        component={Profile}
      />

      <Tab.Screen
        name="OrderHistory"
        options={{
          unmountOnBlur: true,
        //   tabBarIcon: ({color}) => (
        //     <SvgXml
        //       style={{marginTop: Platform.OS === 'ios' ? 10 : 25}}
        //       height={24}
        //       width={24}
        //       xml={icon.trophyIcon()}
        //     />
        //   ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{
                //   color: Color(theme).bottomTabColor,
                  fontSize: 10,
                  fontFamily: 'Urbanist',
                  marginBottom: 10,
                }}>
                Contest
              </Text>
            ) : (
              <Text
                style={{
                //   color: Color(theme).white,
                  fontSize: 10,
                  fontFamily: 'Urbanist',
                  marginBottom: 10,
                }}>
                Contest
              </Text>
            ),
        }}
        component={OrderHistory}
      />
    
    </Tab.Navigator>
  );
}

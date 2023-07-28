
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, ActivityIndicator } from 'react-native';
import SignIn from './screens/Signin/index';
import SignUp from './screens/SignUp/index';
import BottomTabs from './components/BottomTabs';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const Stack = createStackNavigator();
  const { userOrders } = useSelector((state:any) => state.userSlice);
  console.log( userOrders,"===========>testing");
  const dispatch = useDispatch();
  return (
    <>
    <NavigationContainer
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <Stack.Navigator
      initialRouteName='BottomTabs'
        screenOptions={{ gestureEnabled: false, animationEnabled: false }}>
<Stack.Screen name="SignUp"
          component={SignUp}
          options={{ headerShown: false }} />
        <Stack.Screen name="SignIn"
          component={SignIn}
          options={{ headerShown: false }} />
             <Stack.Screen name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

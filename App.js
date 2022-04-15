import React from 'react';
import {Dimensions,LogBox, SafeAreaView, ScrollView, Text, View,Animated} from 'react-native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import Splash from './screens/splash';
import Login from './screens/login';
import Home from './screens/home';
import Room from './screens/rooms';
import ChatroomListScreen from './screens/chatroomlist';
import OptionScreen from './includes/OptionScreen';
import Checkin  from './screens/checkin';
import ConnectScreen  from './screens/connect';
import UploadImageScreen from './screens/uploadimage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Dashboard  from './screens/dashboard'
// socket 
LogBox.ignoreAllLogs(true)

const Stack = createStackNavigator();
export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator
    headerMode="none"
    >
     <Stack.Screen
        name="splash"
        component={Splash}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
       <Stack.Screen
        name="checkin"
        component={Checkin}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
       <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
       <Stack.Screen
        name="connect_"
        component={ConnectScreen}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
         <Stack.Screen
        name="uploadimage"
        component={UploadImageScreen}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="chatlist"
        component={ChatroomListScreen}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import appstyle from "./app_style";
const PButton = ({children,onPress,ripple,style})=>{
    return <Pressable
    style={{overflow:"hidden",paddingVertical:5,paddingHorizontal:20,alignSelf:"center",backgroundColor:"#ccc",justifyContent:"center",alignItems:"center",borderRadius:5,margin:10,...style}}
    onPress={onPress}
    android_ripple={appstyle.ripple} >
    {children}
  </Pressable>
  }
  module.exports = {PButton}
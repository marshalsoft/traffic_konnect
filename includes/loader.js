
import React,{PureComponent} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  useEffect,
  useState,
  KeyboardAvoidingView,
  Keyboard,
  Modal,
  ActivityIndicator
} from 'react-native';
const Loader = ({show = false,message})=>{
                return <Modal 
                visible={show}
                transparent={true}
                >
                <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.5)"}}>
                <ActivityIndicator 
                   color="orange" 
                   size="large"
                />
                </View>
                </Modal>
            }

export default Loader

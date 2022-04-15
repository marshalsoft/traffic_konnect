import React from 'react';
import {Dimensions,LogBox,StatusBar, SafeAreaView, ScrollView, Text, View,Animated, ToastAndroid} from 'react-native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import Home from './home';
import Room from './rooms';
import OptionScreen from '../includes/OptionScreen';
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {WSUrl} from '../includes/func';
import WS from 'react-native-websocket';

const {width,height} = Dimensions.get("window")
const Dashboard = ({navigation,route,Reducer})=>{
    var sclVW = React.useRef(null);
    var wsck = React.useRef(null);
    var [scrIndex,setIndex] = React.useState(0);
    var [RoomParams,setRoomParams] = React.useState({});
    const [showOptions,SetShowOptions] = React.useState(false);
    const [WsConnecting,setWsConnecting] = React.useState(false);
    const [darkmode,setdarkMode] = React.useState(true);
  const [joinRoom,setjoinRoom] = React.useState(false);
    var color = "#292929";
    var activecolor = "#669C4D";
    var scrollX = new Animated.Value(0);
    const {chatroom} = Reducer;
    const theme = darkmode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}
    return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar 
        hidden
        />
      <View style={{flex:1,flexDirection:"column"}}>
      {joinRoom?<WS
          ref={wsck}
          url={WSUrl}
          onOpen={() => {
            console.log('Open!')
            wsck.current.send(JSON.stringify(RoomParams))
            sclVW.current.scrollTo({x:width,y:0,animate:true})
            alert(JSON.stringify(RoomParams))
          }}
      
          onMessage={(d)=>{
            console.log(d);
            alert(JSON.stringify(d.data))
          }}
          onError={(d)=>{
            alert(JSON.stringify("Disconnected"))
            setjoinRoom(false);
            sclVW.current.scrollTo({x:0,y:0,animate:true})
          }}
          onClose={(d)=>{
            // alert(JSON.stringify(d))
          }}
          // reconnect // Will try to reconnect onClose
        />:null}
        <ScrollView 
        ref={sclVW}
        horizontal
        style={{flex:1,width}}
        pagingEnabled={true}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: 
          scrollX } } }],
           {
            listener: (event) => {
            console.log(event.nativeEvent.contentOffset)
            setIndex(event.nativeEvent.contentOffset.x/width)
          }})}
          scrollEventThrottle={16}
        >
          <Home 
           navigation={navigation}
           route={route}
           connecting={WsConnecting}
           JoinROOM={(d)=>{
            setRoomParams(d)
            setjoinRoom(true);
            setWsConnecting(true);
            // alert(JSON.stringify(d))
           }}
          />
           <Room 
           navigation={navigation}
          onBack={()=>{
            sclVW.current.scrollTo({x:0,y:0,animate:true})
            setjoinRoom(false);
          }}
          
          />
        </ScrollView>
        <View style={{height:60,width,flexDirection:"row",position:"absolute",bottom:0,elevation:1,backgroundColor:theme.backgroundColor}}>
        <TouchableOpacity 
        onPress={()=>{
          sclVW.current.scrollTo({x:0,y:0,animate:true})
        }}
        style={{width:width/3,height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:5}}>
          <HomeIcon 
         color={scrIndex == 0?activecolor:theme.color}
         />
         <Text style={{fontSize:10,color:theme.color}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{
          if(chatroom !== "")
          {
          sclVW.current.scrollTo({x:width,y:0,animate:true})
          }else{
              ToastAndroid.show("You are not connected",ToastAndroid.SHORT)
          }
        }} style={{width:width/3,height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <RoomsIcon 
         color={scrIndex == 1?activecolor:theme.color}
          />
          <Text style={{fontSize:10,color:theme.color}}>Rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>SetShowOptions(true)}
        style={{width:width/3,height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <MoreIcon 
         color={scrIndex == 3?activecolor:theme.color}
         />
         <Text style={{fontSize:10,color:theme.color}}>More</Text>
        </TouchableOpacity>
        </View>
      </View>
      <OptionScreen
      visible={showOptions}
      onClose={()=>SetShowOptions(false)}
      rateApp={()=>{
        SetShowOptions(false);
      }}
      />
      </SafeAreaView>
    );
  }
const MatchProps = (state)=>{
    return state;
}
export default connect(MatchProps)(Dashboard)
  export const HomeIcon = ({color="#669C4D"}) =>{
    return (
      <Svg
        width={17}
        height={18}
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <Path d="M8.5 0l-8 6v12h16V6l-8-6z" fill={color} />
      </Svg>
    )
  }
  export const RoomsIcon = ({color = "#292929"})=> {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
  
      >
        <Path
          d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2v-2z"
          fill={color}
        />
      </Svg>
    )
  }
  export const MoreIcon = ({color = "#292929"})=> {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          fill={color}
        />
      </Svg>
    )
  }
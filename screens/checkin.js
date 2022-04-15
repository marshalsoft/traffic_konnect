import React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    Pressable
} from 'react-native';
const {width} = Dimensions.get("screen");
import mystyle from '../includes/app_style'
import {LogoG,BtnG,getTheme} from '../includes/SvgObj';
import {connect} from 'react-redux'
const CheckInScreen = ({navigation,Reducer})=>{
    const {darkmode} = Reducer;
    const theme = getTheme(darkmode);
    return (
        <View style={{flex:1,width,paddingBottom:40,justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:theme.backgroundColor}}>
        <View style={{flex:1,width,padding:40,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <Image source={require("../images/people.png")}
          style={{width:width-100,height:width-100}}
          resizeMode="contain"
          resizeMethod="resize"
           />
        <Text style={{width:width-130,fontSize:20,fontWeight:"bold",marginBottom:20,marginTop:50,textAlign:"center",color:theme.color}}>Get real-time traffic updates & connect with other commuters</Text>
        <Text style={{textAlign:"center",color:theme.color}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
        </View>
        <BtnG 
        onPress={()=>{
         navigation.navigate("connect_")
        }}
        text="Check-in"
         />
        </View>
    )
}

const mapDispatchToProps = ((state)=>{
    return state;
    })
    export default connect(mapDispatchToProps)(CheckInScreen)


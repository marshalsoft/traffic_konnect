import React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    Pressable
} from 'react-native';
const {width} = Dimensions.get("screen")
const Login = ({navigation})=>{

    return (
        <View style={{flex:1,padding:40,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <Image source={require("../images/people.png")}
          style={{width:width-100,height:width-100}}
          resizeMode="contain"
          resizeMethod="resize"
           />
        <Text style={{width:width-130,fontSize:20,fontWeight:"bold",marginBottom:20,marginTop:50,textAlign:"center"}}>Get real-time traffic updates & connect with other commuters</Text>
        <Text style={{textAlign:"center"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
        <Pressable 
        android_ripple="red"
        style={{padding:15,marginTop:100,backgroundColor:"black",width:"80%",justifyContent:"center",alignItems:"center",borderRadius:2}}>
            <Text style={{color:"white"}}>Check-In</Text>
        </Pressable>
        </View>
    )
}

export default Login


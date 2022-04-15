import React, { useState,useRef } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    Pressable,
    TextInput,
    Alert
} from 'react-native';
import mystyle from '../includes/app_style'
const {width} = Dimensions.get("screen");
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from '../includes/icons';
const mediaOption = {
     saveToPhotos:true,
     maxWidth: 200, 
     maxHeight: 200,
     mediaType:'photo',
     quality:1,
     cameraType:'front',
     selectionLimit:1,
     includeBase64:true
    }
     import {LogoG,BtnG,getTheme} from '../includes/SvgObj';
     import {connect} from 'react-redux';
import { color } from 'react-native-reanimated';

const UploadAvatarScreen =  ({navigation,Reducer,route})=>{
const {darkmode} = Reducer;
const theme = getTheme(darkmode);
const [avatar,setAvatar] = useState(null)
const {nickname } = route.params;
    return (
        <View style={{flex:1,backgroundColor:theme.backgroundColor,width,paddingBottom:40,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
     <View  style={{flexDirection:"column",flex:1,width,alignItems:"center"}}>
        <View style={{flex:1,width,padding:40,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Text style={{width:width-130,fontSize:20,fontWeight:"bold",marginBottom:20,marginTop:50,textAlign:"center",color:avatar == null?theme.color:"#408321"}}>Upload your Avatar</Text>
    <View style={{alignSelf:"center"}}>
    <TouchableOpacity 
    onPress={()=>{
        Alert.alert("Image options","To get the best out of Traffikonnect, add avatar to your profile.",[
            {text:"Cancel",onPress:()=>{
             
            }},{text:"Camera",onPress:()=>{
                pickCamera().then((img)=>{
                    if(img.status)
                    {
                      setAvatar({uri:mediaOption.includeBase64?`data:image/png;base64,${img.base64}`:img.uri})
                    }
                });
            }},
            {text:"Gallery",onPress:()=>{
                pickImage().then((img)=>{

                    if(img.status)
                    {
                      setAvatar({uri:mediaOption.includeBase64?`data:image/png;base64,${img.base64}`:img.uri})
                    }
                });
        }}],{style:"cancel"})
    }}
    style={{borderRadius:3,borderWidth:3,borderColor:"#444",width:118,height:118,borderRadius:118,marginTop:46,overflow:"hidden",justifyContent:"center",alignItems:"center",backgroundColor:"#E8E6E6"}}>
        <Image source={avatar == null?require("../images/placeholder_1.png"):avatar} style={{width:avatar == null?"30%":"100%",height:avatar == null?"30%":"100%"}} resizeMode="cover" />
         </TouchableOpacity>
         {avatar !== null?<Icon.FontAwesome5 name="pencil-alt" size={20} style={{position:"absolute",top:40,right:0}}/>:null}
         </View>
    </View>
        <BtnG 
        text="Check-In"
        onPress={()=>{
            if(avatar == null)
            {
                Alert.alert("Image options","To get the best out of Traffikonnect, add avatar to your profile.",[
                    {text:"Cancel",onPress:()=>{
                     
                    }},{text:"Camera",onPress:()=>{
                        pickCamera().then((img)=>{
                            if(img.status)
                            {
                                setAvatar({uri:mediaOption.includeBase64?`data:image/png;base64,${img.base64}`:img.uri})
                            }
                        });
                    }},
                    {text:"Gallery",onPress:()=>{
                        pickImage().then((img)=>{
                            if(img.status)
                            {
                                setAvatar({uri:mediaOption.includeBase64?`data:image/png;base64,${img.base64}`:img.uri})
                            }
                        });
                    }}],{style:"cancel"})
            }else{
                navigation.reset({
                    index:0,
                    routes:[{name:"dashboard",params:{nickname}}]
                     }
                    );
            }
        }}
        style={mystyle.greenbtn}
        
        />
        {avatar == null?<Pressable 
        android_ripple="#fff"
        onPress={()=>{
           navigation.reset({
               index:0,
               routes:[{name:"dashboard",params:{nickname}}]
                }
               );
        }}
        style={{marginTop:20}}>
            <Text style={{color:theme.color,fontWeight:"600",fontSize:16}}>Skip</Text>
        </Pressable>:null}
        </View>
         </View>
    )
}

const mapDispatchToProps = ((state)=>{
    return state;
    })
    export default connect(mapDispatchToProps)(UploadAvatarScreen);

const pickCamera = () => {
    return new Promise((resolve,reject)=>{
    launchCamera(mediaOption, (res) => {
        console.log(res)
      if (res.didCancel) {
        resolve({ uri:"" ,status:true,message:"user cancelled"})
      } else if (res.errorMessage || res.errorCode) {
        resolve({ uri:"",status:true,message:res.errorMessage})
      } else {
        resolve({...res.assets[0] ,status:true,message:""})
      }
    });
  })
}
const pickImage = () => {
    return new Promise((resolve,reject)=>{
        launchImageLibrary(mediaOption, (res) => {
            console.log(res)
            if (res.didCancel) {
            resolve({ uri:"" ,status:true,message:"user cancelled"})
          } else if (res.errorMessage || res.errorCode) {
            resolve({ uri:"",status:true,message:res.errorMessage})
          } else {
            resolve({...res.assets[0] ,status:true,message:""})
          }
        });
      })
}



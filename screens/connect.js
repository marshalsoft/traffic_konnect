import React, { useState,useRef } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    Pressable,
    TextInput,
    AsyncStorage,
    PermissionsAndroid,
    Alert
} from 'react-native';
import { Formik } from 'formik';
import * as y from 'yup';
import {fakeNickname} from '../includes/actions';
import {PostDATA, PostGET} from '../includes/func';
import mystyle from '../includes/app_style'
import Loader from '../includes/loader';
const {width} = Dimensions.get("screen");
import Geolocation from 'react-native-geolocation-service';
const formSchema = y.object({
    nickname:y.string().required().max(50,'Too long!')
})
const options = {
    distanceFilter:1,
    enableHighAccuracy:true,
    useSignificantChanges:true
   }
   import {LogoG,BtnG,getTheme} from '../includes/SvgObj';
   import {connect} from 'react-redux'
const ConnectScreen = ({navigation,Reducer})=>{
    const [nickname,setNickname] = useState("");
    const [showloading,setShowloading] = useState(false);
    const {darkmode} = Reducer;
    const theme = getTheme(darkmode);

    return (
        <View style={{flex:1,width,paddingBottom:40,justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:theme.backgroundColor}}>
      <Formik
     initialValues={{ nickname:nickname }}
     onSubmit={values =>{
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              'title': 'TraffiKonnect Permission',
             'message': `TraffiKonnect app needs access to location.`
            }).then((granted)=>{
           if(granted === "granted"){
            console.log("granted");
            Geolocation.getCurrentPosition((position) => {
            console.log("coords:",position);
           const {latitude,longitude} = position.coords;
        setShowloading(true);
         PostDATA("checkin",{
            nickname:values.nickname,
            accept_terms: "Yes"
         }).then((res)=>{
            if(res.status)
            {
                PostDATA("current_location",{
                    nickname:values.nickname,
                    current_longitude: `${longitude}`,
                    current_latitude:`${latitude}`
                    }).then((res)=>{
                    console.log(res)
                    setShowloading(false);
                    if(res.status)
                    {
                    AsyncStorage.setItem("nickname",values.nickname); 
                    navigation.navigate("uploadimage",{nickname:values.nickname}) 
                    }else{
                    alert(res.message)   
                   }
                })
            }else{
                setShowloading(false);
                alert(res.message)
            }
         })
        },(error) =>{
            SetConnetRoom(false);
            alert("We cannot detect your location, ensure that your gps is turned on and try again")
        },options)
        //  Actions.reset("welcome");
        }
        })
     }}
     validationSchema={formSchema}
   >
     {({ handleChange, handleBlur, handleSubmit,setValues, values,errors,touched }) => (
       <View  style={{flexDirection:"column",flex:1,width,alignItems:"center"}}>
        <View style={{flex:1,width,padding:40,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Text style={{width:width-130,fontSize:20,fontWeight:"bold",marginBottom:20,marginTop:50,textAlign:"center",color:theme.color}}>Enter a nickname</Text>
    <View style={{borderRadius:3,borderWidth:0.5,borderColor:"#444",width:"100%",height:50}}>
         <TextInput 
             placeholder={`Enter your nickname`}
             placeholderTextColor={darkmode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)"}
             style={{padding:10,color:theme.color,textAlign:"center",width:"100%",flex:1}}
             onChangeText={handleChange('nickname')}
           onBlur={handleBlur('nickname')}
           value={values.nickname}
         />
         </View>
         <Text style={{color:"red",width:"100%"}}>{touched.nickname && errors.nickname}</Text>
        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",width:"100%"}}>
        <Text style={{textAlign:"center",color:theme.color}}>Or </Text>
        <TouchableOpacity
        onPress={()=>{
            setShowloading(true);
            PostGET("generate_nickname",{}).then((res)=>{
            //    alert(JSON.stringify(res))
                setShowloading(false);
                if(res.status)
                {
                    setValues({nickname:res.data.nickname}) 
                }
            })
            return;
            Alert.alert("Alert","Please select your gender",[
                {text:"Male",onPress:()=>{
                 var x = fakeNickname("male");
                setValues({nickname:x})  
                }},
                {text:"Female",onPress:()=>{
                var x = fakeNickname("female");
                setValues({nickname:x}) 
                }}
            ],{style:"cancel"})
        }}
        >
            <Text style={{color:"#669C4D"}}>tap here </Text>
            </TouchableOpacity>
            <Text style={{color:theme.color}}>generate a nickname</Text>
        </View>
        </View>
        <BtnG 
        onPress={handleSubmit} 
        text="Check-In"
        />
        </View>)}
         </Formik>
         <Loader
            show={showloading}
         />
         </View>
    )
}

const mapDispatchToProps = ((state)=>{
    return state;
    })
    export default connect(mapDispatchToProps)(ConnectScreen)



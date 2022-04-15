import React from 'react';
import {Dimensions,Animated,Modal, SafeAreaView, ScrollView, Text, View,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
const {width,height} = Dimensions.get("window")
import Svg, { Path } from "react-native-svg";
import {useSelector} from 'react-redux';
import Icon from '../includes/icons';
import { GradientText } from '../includes/actions';
import { color } from 'react-native-reanimated';
const ShowModal = ({onClose,visible,navigation,rateApp})=>{
var m = React.useRef(null);
var [selectSection,setSection] = React.useState("option");
var {version} = useSelector(state=>state.Reducer)
    return <Modal
    transparent={true}
    onRequestClose={onClose}
    visible={visible}
    animationType="slide"
    ref={m}
    hardwareAccelerated={true}
    >
<View 
style={{width,height,
}}

>
<TouchableWithoutFeedback 
onPress={onClose}
style={{width,height}}>
<View style={{width,height,backgroundColor:"rgba(0,0,0,0.001)"}}>

</View>
</TouchableWithoutFeedback>
<View style={{padding:20,backgroundColor:"black",borderWidth:0.3,borderColor:"white",minHeight:width-50,width,bottom:0,position:"absolute",left:0,right:0,zIndex:99,borderTopLeftRadius:20,borderTopRightRadius:20,flexDirection:"column",alignItems:"center",elevation:3}}>
<TouchableOpacity 
    onPress={onClose}
    style={{justifyContent:"center",alignItems:"center",padding:5}}
    >
    <View 
    style={{backgroundColor:"#999",borderRadius:10,height:4,width:(width/3)-50}}>
    </View>
</TouchableOpacity>
{selectSection == "option"?<View style={{flex:1,justifyContent:"center",alignItems:"center",paddingTop:10}}>
<TouchableOpacity
onPress={()=>setSection("notification")}
style={{width,height:40,flexDirection:"row",marginTop:10}}>
<View style={{width:50,justifyContent:"center",alignItems:"center"}}>
    <NotifyIcon 
    color="white"
    />
</View>
<View style={{justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:14,color:"white"}}>Notifications</Text>
</View>
</TouchableOpacity>
<TouchableOpacity
onPress={rateApp}
style={{width,height:40,flexDirection:"row"}}>
<View style={{width:50,justifyContent:"center",alignItems:"center"}}>
    <RateIcon 
    color={"white"}
    />
</View>
<View style={{justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:14,color:"white"}}>Rate Us on iOS App Store</Text>
</View>
</TouchableOpacity>
<TouchableOpacity
onPress={()=>setSection("faq")}
style={{width,height:40,flexDirection:"row"}}>
<View style={{width:50,justifyContent:"center",alignItems:"center"}}>
<FAQIcon 
color="white"
/>
</View>
<View style={{justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:14,color:"white"}}>FAQs</Text>
</View>
</TouchableOpacity>
<TouchableOpacity
onPress={()=>setSection("terms")}
style={{width,height:40,flexDirection:"row"}}>
<View style={{width:50,justifyContent:"center",alignItems:"center"}}>
 <TermsIcon 
 color="white"
 />
</View>
<View style={{justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:14,color:"white"}}>Terms & Conditions</Text>
</View>
</TouchableOpacity>
<View style={{flex:1,alignItems:"flex-start",width}}>
<Text style={{position:"absolute",bottom:20,left:40,width:"100%",fontSize:10,color:"white"}}>Version {version}</Text>
</View>
</View>:null}
{selectSection == "terms"?<View style={{width:"100%",minHeight:100,flexDirection:"column"}}>
<View style={{height:70,justifyContent:"flex-start",alignItems:"center",flexDirection:"row"}}>
            <TouchableOpacity style={{padding:0}} onPress={()=>setSection("option")}>
                <Icon.AntDesign name="left" color="white" size={25} />
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <GradientText
            text="Terms and Conditions" 
            />
            </View>
            <View style={{width:40}}>
            </View>
           </View>
 <ScrollView style={{maxHeight:height-240,width:width-40}}
 showsHorizontalScrollIndicator={false}
 showsVerticalScrollIndicator={false}
 >
{["","","","","",""].map((a,i)=><View key={i} style={{flexDirection:"column"}}>
<GradientText
 text="Terms and Conditions" 
 textStyle={{marginBottom:10}}
 />
<Text style={{color:"#fff",fontSize:14,marginBottom:20}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
</View>)}
</ScrollView>
</View>:null}
{selectSection == "faq"?<View style={{width:"100%",minHeight:100,flexDirection:"column"}}>
<View style={{height:70,justifyContent:"flex-start",alignItems:"center",flexDirection:"row"}}>
 <TouchableOpacity style={{padding:0}} onPress={()=>setSection("option")}>
    <Icon.AntDesign name="left" color="white" size={25} />
 </TouchableOpacity>
 <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <GradientText
            text="FAQ" 
            />
  </View>
  <View style={{width:40}}>
  </View>
  </View>
 <ScrollView style={{maxHeight:height-240,width:width-40}}>
{["","","",""].map((a,i)=><View key={i} style={{flexDirection:"column"}}>
<GradientText
 text={`Question ${i+1}`} 
 textStyle={{marginBottom:10}}
 />
<Text style={{color:"#fff",fontSize:14,marginBottom:20}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
</View>)}
</ScrollView>
</View>:null}
{selectSection == "notification"?<View style={{width:"100%",minHeight:100,flexDirection:"column"}}>
<View style={{height:70,justifyContent:"flex-start",alignItems:"center",flexDirection:"row"}}>
 <TouchableOpacity style={{padding:0}} onPress={()=>setSection("option")}>
    <Icon.AntDesign name="left" color="white" size={25} />
 </TouchableOpacity>
  <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <GradientText
            text="Notifications" 
            />
  </View>
  <View style={{width:40}}>
  </View>
  </View>
 <ScrollView style={{maxHeight:height-240,width:width-40}}>
{["","","",""].map((a,i)=><View key={i} style={{flexDirection:"column"}}>
<View style={{flexDirection:"row",alignItems:"center",marginBottom:10}}>
<View style={{width:4,height:4,backgroundColor:"red",borderRadius:4,marginRight:4}}></View>
<GradientText
text="Assault in Lekki Room" 
/>
</View>
<Text style={{color:"#fff",fontSize:14,marginBottom:20}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
</View>)}
</ScrollView>
</View>:null}

</View>
</View>
 </Modal>
}
export default ShowModal;
export const NotifyIcon = ({color = "black"})=>{
    return <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M14.1667 9.16663C12.7834 9.16663 11.6667 8.04996 11.6667 6.66663C11.6667 5.28329 12.7834 4.16663 14.1667 4.16663C15.5501 4.16663 16.6667 5.28329 16.6667 6.66663C16.6667 8.04996 15.5501 9.16663 14.1667 9.16663Z" fill="#E41919"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.6666 16.6667C11.6666 17.5834 10.9166 18.3334 9.99992 18.3334C9.08325 18.3334 8.33325 17.5834 8.33325 16.6667H11.6666ZM14.9999 9.89554V13.3334L16.6666 15V15.8334H3.33325V15L4.99992 13.3334V9.16671C4.99992 6.60004 6.36659 4.46671 8.74992 3.90004V3.33337C8.74992 2.64171 9.30825 2.08337 9.99992 2.08337C10.6916 2.08337 11.2499 2.64171 11.2499 3.33337V3.90004C11.5093 3.9615 11.7566 4.0415 11.9913 4.13854C11.5521 4.51652 11.213 5.00727 11.0183 5.56638C10.7058 5.46897 10.3655 5.41671 9.99992 5.41671C7.92492 5.41671 6.66658 7.10004 6.66658 9.16671V14.1667H13.3333V9.89554C13.5995 9.96377 13.8787 10 14.1666 10C14.4545 10 14.7337 9.96377 14.9999 9.89554Z" fill={color} />
    </Svg>
}
export const RateIcon = ({color = "black"})=>{
    return <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M18.3334 7.69996L12.3417 7.18329L10.0001 1.66663L7.65841 7.19163L1.66675 7.69996L6.21675 11.6416L4.85008 17.5L10.0001 14.3916L15.1501 17.5L13.7917 11.6416L18.3334 7.69996ZM10.0001 12.8333L6.86675 14.725L7.70008 11.1583L4.93341 8.75829L8.58342 8.44163L10.0001 5.08329L11.4251 8.44996L15.0751 8.76663L12.3084 11.1666L13.1417 14.7333L10.0001 12.8333Z" fill={color}/>
    </Svg>
    
}
export const FAQIcon = ({color = "black"})=>{
    return <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M9.16675 19.6584V16.6584C4.99175 16.4417 1.66675 12.975 1.66675 8.75004C1.66675 4.38337 5.21675 0.833374 9.58341 0.833374C13.9501 0.833374 17.5001 4.38337 17.5001 8.75004C17.5001 12.875 14.6334 17.025 10.3584 19.0834L9.16675 19.6584ZM9.58341 2.50004C6.13341 2.50004 3.33341 5.30004 3.33341 8.75004C3.33341 12.2 6.13341 15 9.58341 15H10.8334V16.9167C13.8667 15 15.8334 11.85 15.8334 8.75004C15.8334 5.30004 13.0334 2.50004 9.58341 2.50004ZM8.75008 12.0834H10.4167V13.75H8.75008V12.0834ZM10.4167 10.8334H8.75008C8.75008 8.12504 11.2501 8.33337 11.2501 6.66671C11.2501 5.75004 10.5001 5.00004 9.58341 5.00004C8.66675 5.00004 7.91675 5.75004 7.91675 6.66671H6.25008C6.25008 4.82504 7.74175 3.33337 9.58341 3.33337C11.4251 3.33337 12.9167 4.82504 12.9167 6.66671C12.9167 8.75004 10.4167 8.95837 10.4167 10.8334Z" fill={color} />
    </Svg>
    
}
export const TermsIcon = ({color = "black"})=>{
    return <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M13.1083 2.5H6.89167L2.5 6.89167V13.1083L6.89167 17.5H13.1083L17.5 13.1083V6.89167L13.1083 2.5ZM15.8333 12.4167L12.4167 15.8333H7.58333L4.16667 12.4167V7.58333L7.58333 4.16667H12.4167L15.8333 7.58333V12.4167Z" fill={color} />
    <Path d="M10.0001 14.1667C10.4603 14.1667 10.8334 13.7936 10.8334 13.3333C10.8334 12.8731 10.4603 12.5 10.0001 12.5C9.53984 12.5 9.16675 12.8731 9.16675 13.3333C9.16675 13.7936 9.53984 14.1667 10.0001 14.1667Z" fill={color} />
    <Path d="M9.16675 5.83337H10.8334V11.6667H9.16675V5.83337Z" fill={color} />
    </Svg>
    
}
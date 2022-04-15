import React from 'react';
import {Dimensions,Animated,Modal,TextInput, SafeAreaView, ScrollView, Text, View,TouchableWithoutFeedback, TouchableOpacity, FlatList, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
const {width,height} = Dimensions.get("window")
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import {useSelector} from 'react-redux';
import Icon from '../includes/icons';
import {BackG} from '../screens/home';
import {AvatarIcon} from '../includes/actions'
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image'
const AnimBtn = Animatable.createAnimatableComponent(TouchableOpacity)
const Chatroomlist = ({navigation,route})=>{
    const {chatroom} = route.params;
    const [list,SetList] = React.useState([])
    const [limit,setLimit] = React.useState(24);
const [showModal,setShowModal] = React.useState(false);
const [loading,setLoading] = React.useState(true);
const [selectedOption,setSelectedOption] = React.useState("");
React.useEffect(()=>{
setTimeout(()=>{
SetList(["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""])
setLoading(false);
},200)
},[list])
return (<View style={{height,width,flexDirection:"column",backgroundColor:"black"}}>
<BackG 
props={{style:{width,height,position:"absolute",top:0,left:0}}}
/>
<View style={{height:70,backgroundColor:"black",justifyContent:"flex-start",alignItems:"center",flexDirection:"row"}}>
 <TouchableOpacity style={{padding:5}} onPress={()=>{
     navigation.goBack()
 }}>
     <Icon.AntDesign name="left" size={25} color="white" />
 </TouchableOpacity>
 <View style={{flex:1}}>
 <Text style={{color:"white",fontWeight:"bold",alignSelf:"center"}}>{chatroom.name}</Text>
 </View>
 <View style={{width:40}}>
 </View>
</View>
<View style={{padding:10}}>
{loading?<View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="small" color="#C76D1E"/>
        <Text style={{fontSize:10,color:"black"}}> Loading...</Text>
    </View>:list.length == 0?<View style={{padding:10,backgroundColor:"rgba(255,0,0,0.5)",justifyContent:"center",alignItems:"center"}}>
             <Text style={{fontSize:10,color:"white"}}>No user found !</Text>
         </View>:<Text style={{alignSelf:"center",fontSize:10,color:"#C76D1E",marginVertical:10}}>{list.length} comuters in this room</Text>
}
<ScrollView 
style={{width:width-20,height:height-115}}
>
<FlatList 
scrollEnabled={false}
removeClippedSubviews={true}
maxToRenderPerBatch={24}
initialNumToRender={24}
keyExtractor={({item,index})=>`${index}`}
data={list.filter((a,i)=>i < limit)}
contentContainerStyle={{flexDirection:"row",flexWrap:"wrap",alignItems:"center",width:width-20,marginBottom:60}}
renderItem={({item,index})=>{

return index == (limit-1)?<Animatable.View 
animation="zoomIn"
duration={200*index}
easing="ease-in-out-back"
useNativeDriver={true}
style={{width:(width/4)-26,minHeight:(width/4)-26,margin:10,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<TouchableOpacity 
onPress={()=>{
 
}}
style={{width:(width/4)-30,height:(width/4)-30,backgroundColor:"#C76D1E",borderRadius:(width/4)-26,alignItems:"center",justifyContent:"center"}}>
<Text style={{color:"white",fontSize:16}}>+{list.length - limit}</Text>
</TouchableOpacity>
</Animatable.View>:<AnimBtn 
onPress={()=>{
setSelectedOption("");
setShowModal(true)
}}
animation="zoomIn"
duration={200*index}
easing="ease-in-out-back"
useNativeDriver={true}
style={{width:(width/4)-26,minHeight:(width/4)-26,margin:10,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<View style={{width:(width/4)-30,height:(width/4)-30,backgroundColor:"#ccc",borderRadius:(width/4)-30,alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
<FastImage
        style={{ width: (width/4)-30, height: (width/4)-30 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
</View>
<View style={{position:"absolute",bottom:15,right:1,backgroundColor:"white",padding:5,borderRadius:30,alignSelf:"center"}}>
<WaveIcon />
</View>
<Text style={{fontSize:10}} ellipsizeMode="tail" numberOfLines={1}>user {index+1}</Text>
</AnimBtn>;

}}

/>
</ScrollView>
<View style={{justifyContent:"center",alignItems:"center",padding:10,position:"absolute",bottom:30,left:0,right:0,zIndex:99}}>
<View style={{height:50,width:width-220,backgroundColor:"rgba(255,255,255,0.2)",borderRadius:20,flexDirection:"row"}}>
    <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <View style={{width:40,height:40,justifyContent:"center",alignItems:"center",borderRadius:40,overflow:"hidden"}}>
    <Svg 
      width={40} 
      style={{position:"absolute",borderRadius:40}}
      height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M0 4a4 4 0 014-4h329a4 4 0 014 4v45a4 4 0 01-4 4H4a4 4 0 01-4-4V4z"
          fill="url(#prefix__paint0_linear)"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={-41.339}
            y1={-8.115}
            x2={68.015}
            y2={191.238}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#37E80B" />
            <Stop offset={0.289} stopColor="#FFC700" />
            <Stop offset={0.511} stopColor="#FF7901" />
            <Stop offset={1} stopColor="#FF0303" />
          </LinearGradient>
        </Defs>
      </Svg>
      
     <MicIcon />
     </View>
    </TouchableOpacity>
    <View style={{flex:1}} >
    <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <View style={{width:40,height:40,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:40}}>
    <DownloadIcon />
    </View>
    </TouchableOpacity>
    </View>
</View>
</View>
</View>
<ModalScreen 
    visible={showModal}
    onClose={()=>{
      setShowModal(false)
    }}
    selectedOption={selectedOption}
    onSelect={(d)=>{
       setSelectedOption(d) 
    }}
    />
</View>)
}
export default Chatroomlist;
export const WaveIcon = ({})=>{
    return <Svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M2.66667 11.2H4V2.8H2.66667V11.2ZM5.33333 14H6.66667V0H5.33333V14ZM0 8.4H1.33333V5.6H0V8.4ZM8 11.2H9.33333V2.8H8V11.2ZM10.6667 5.6V8.4H12V5.6H10.6667Z" fill="#F2994A"/>
    </Svg>
}

export const MicIcon = ({})=>{
    return <Svg width="12" height="16" viewBox="0 0 12 16" fill="black" xmlns="http://www.w3.org/2000/svg">
<Path d="M5.89474 10.1053C7.29263 10.1053 8.42105 8.97684 8.42105 7.57895V2.52632C8.42105 1.12842 7.29263 0 5.89474 0C4.49684 0 3.36842 1.12842 3.36842 2.52632V7.57895C3.36842 8.97684 4.49684 10.1053 5.89474 10.1053ZM5.05263 2.52632C5.05263 2.06316 5.43158 1.68421 5.89474 1.68421C6.35789 1.68421 6.73684 2.06316 6.73684 2.52632V7.57895C6.73684 8.04211 6.35789 8.42105 5.89474 8.42105C5.43158 8.42105 5.05263 8.04211 5.05263 7.57895V2.52632ZM10.1053 7.57895C10.1053 9.90316 8.21895 11.7895 5.89474 11.7895C3.57053 11.7895 1.68421 9.90316 1.68421 7.57895H0C0 10.5516 2.19789 12.9937 5.05263 13.4063V16H6.73684V13.4063C9.59158 12.9937 11.7895 10.5516 11.7895 7.57895H10.1053Z" fill="#408321"/>
</Svg>}

export const DownloadIcon = ({})=>{
    return <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M12.4444 4.44444L11.1911 5.69778L12.5956 7.11111H5.33333V8.88889H12.5956L11.1911 10.2933L12.4444 11.5556L16 8L12.4444 4.44444ZM1.77778 1.77778H8V0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H8V14.2222H1.77778V1.77778Z" fill="#F43B3B"/>
    </Svg>
    }
export const ModalScreen = ({visible = true,onSelect,onClose,selectedOption = ""})=>{
    const [sumbitForm,seTsumbitForm] = React.useState(true)
    return <Modal 
        visible={visible}
        transparent={true}
        animationType="slide"
        >
    <KeyboardAvoidingView style={{flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.01)",flex:1}}>
    <TouchableOpacity
    onPress={onClose}
    style={{flex:1}}
    >
    
    </TouchableOpacity>
    <View
    style={{width,position:"absolute",bottom:0,minHeight:200,backgroundColor:"white",borderTopLeftRadius:20,borderTopRightRadius:20,elevation:2,flexDirection:"column",alignItems:"center",zIndex:99}}
    >
        <TouchableOpacity
        onPress={onClose}
        style={{justifyContent:"center",alignItems:"center",padding:10}}>
    <View style={{height:5,backgroundColor:"#ccc",width:70,borderRadius:10}}></View>
        </TouchableOpacity>
    {!sumbitForm?<View style={{padding:20,flexDirection:"column",alignItems:"center"}}>
    <Text style={{marginBottom:10,fontWeight:"bold"}}>Report a User</Text>
    <Text style={{fontSize:10,marginBottom:10}}>Select at least one option below</Text>
    <View style={{flexDirection:"column"}}>
    {["1","2","3","4"].map((a,i)=><TouchableOpacity 
    onPress={()=>onSelect(a)}
    key={i} style={{width:"100%",backgroundColor:selectedOption == a?"#DFF2DD":"#EAE9E9",marginBottom:10}}>
        <View style={{flexDirection:"row",width:width-40,alignItems:"center"}}>
        <View style={{width:20,alignItems:"center",justifyContent:"center",height:20,borderRadius:2,borderColor:"#ccc",borderWidth:1,borderRadius:2,marginHorizontal:10}}>
        {selectedOption == a?<Icon.Entypo name="check" color="limegreen"/>:null}
        </View>
        <View style={{padding:10}}>
            <Text>Reason {i+1}</Text>
        </View>
        </View>
    </TouchableOpacity>)}
    <Text style={{marginVertical:10,width:"90%"}}>Add note</Text>
    <TextInput 
    style={{borderWidth:1,borderColor:"#ccc",borderRadius:5,height:120,width:width-40,textAlignVertical:"top",padding:15}}
    />
    <TouchableOpacity 
       style={{padding:15,marginTop:10,backgroundColor:"#669C4D",width:width-40,justifyContent:"center",alignItems:"center",borderRadius:4,marginBottom:50}}>
        <Text style={{color:"white"}}>Submit</Text>
       </TouchableOpacity>
       </View>
    </View>:<View style={{padding:20,flexDirection:"column",alignItems:"center"}}>
   <View style={{width:60,justifyContent:"center",alignItems:"center",height:60,borderRadius:60,margin:10,backgroundColor:"#669C4D"}}>
   <Icon.AntDesign color="white" name="check"  size={30}/>
   </View>

    <Text style={{marginBottom:30,fontWeight:"bold"}}>Report sent successfully</Text>
    <TouchableOpacity 
    onPress={onClose}
       style={{padding:15,marginTop:10,backgroundColor:"#669C4D",width:width-40,justifyContent:"center",alignItems:"center",borderRadius:4,marginBottom:50}}>
        <Text style={{color:"white"}}>Exit</Text>
       </TouchableOpacity>
   </View>}
    </View>
    </KeyboardAvoidingView>
        </Modal>
    }




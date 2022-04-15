import React from 'react'
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    TextInput,
    FlatList,
    Image,
    Modal,
    TouchableWithoutFeedback
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import {BackG} from '../screens/home';
import Icon from '../includes/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width,height} = Dimensions.get("window");
import * as Animatable from 'react-native-animatable';
import {LogoG,SmallBtnG,getTheme} from '../includes/SvgObj';
const Payment = ({navigation,onBack})=>{
const list = [
    {name:"Lekki",users:[
        {name:"O"},
        {name:"O"}
    ]},
    {name:"Ikeja",users:[
        {name:"O"},
        {name:"O"},
        {name:"O"},
        {name:"O"}
    ]},
    {name:"Ogba",users:[
        {name:"O"},
        {name:"O"},
        {name:"O"}
    ]}
]
const {username} = useSelector(state => state.Reducer)
const [searchText,SetsearchText] = React.useState("");
const [chatrooms,setchatrooms] = React.useState(list);
    useFocusEffect(()=>{

    })
    return (
        <View style={{height,width,flexDirection:"column",backgroundColor:"black"}}>
           <BackG 
           props={{style:{width,height,position:"absolute",top:0,left:0}}}
           />
           <View style={{height:70,backgroundColor:"#000",justifyContent:"flex-start",alignItems:"center",flexDirection:"row"}}>
            <TouchableOpacity style={{padding:5}} onPress={onBack}>
                <Icon.AntDesign name="left" color="white" size={25} />
            </TouchableOpacity>
            <View style={{flex:1}}>
            <Text style={{color:"white",fontWeight:"bold",alignSelf:"center"}}>Rooms</Text>
            </View>
            <View style={{width:40}}>
            </View>
           </View>
           <View style={{padding:10}}>
           <View style={{borderRadius:4,borderWidth:0.5,borderColor:"#3D3C3C",width:"100%",backgroundColor:"#1E1D1D",flexDirection:"row",alignItems:"center",paddingHorizontal:10}}>
         <Icon.Feather name="search" size={20} color="#646161" />
         <TextInput 
             placeholder={`Search...`}
             placeholderTextColor="#646161"
             style={{padding:10,color:"white",flex:1}}
             onChangeText={(d)=>{
                SetsearchText(d)
                setchatrooms(list.filter((a,i)=>String(a.name).toLowerCase().includes(d.toLowerCase())))
             }}
           value={searchText}
         />
         {searchText !== ""?<TouchableOpacity 
         onPress={()=>{
             SetsearchText("");
             setchatrooms(list);
         }}
         style={{width:20,justifyContent:"center",alignItems:"center"}}>
             <Icon.AntDesign name="closecircle" size={15} />
         </TouchableOpacity>:null}
         </View>
         </View>
         {chatrooms.length == 0?<View style={{padding:10,backgroundColor:"rgba(255,0,0,0.5)",justifyContent:"center",alignItems:"center"}}>
             <Text style={{fontSize:10,color:"white"}}>No chatroom found !</Text>
         </View>:null}
           <FlatList style={{flex:1,width:"100%"}}
           showsHorizontalScrollIndicator={false}
           showsVerticalScrollIndicator={false}
           data={chatrooms}
           renderItem={({item,index})=>{
               return <View style={{padding:10,marginBottom:10,flexDirection:"row"}}>
                   <View style={{width:43,height:43,overflow:"hidden",backgroundColor:"#eee",borderRadius:5}} >
                   <Image 
                   style={{width:43,height:43}}
                   />
                   </View>
                   <View style={{flexDirection:"column",paddingHorizontal:10,flex:1,justifyContent:"center"}}>
                   <Text style={{fontSize:16,color:"white"}}>{item.name}</Text>
                    <Text style={{fontSize:10,color:"white"}}>{item.users.length} commuters in the room</Text>
                   </View>
                   <SmallBtnG 
                textColor="black"
                onPress={()=>{
                    navigation.navigate("chatlist",{chatroom:item});
                }}
                text={`Join Room`}
         />
         </View>
           }}
           />
          
         </View>
    )
}

export default Payment;




import React, {PureComponent,useState} from 'react';
import {connect} from 'react-redux';
import {Platform,
     StyleSheet,
     Image, 
     Text, 
     View,
     FlatList,
     TouchableOpacity,
    TextInput ,
    ScrollView,
    Animated,
    Easing,
    AsyncStorage,
    ActivityIndicator,
    Dimensions,
    BackAndroid,
    Modal } from 'react-native';
import Icons from './icons';
import * as Animatable from 'react-native-animatable';
import {CountryList} from '../components/countrylist';
const {width,height} = Dimensions.get("window");
const ItemView  = Animated.createAnimatedComponent(TouchableOpacity);
export default LoadCountriesClass = ({showCountryList,slideBack = false,closeModal,_onPress})=>{
var scrollY = new Animated.Value(0);
const [selectedCountry, setSelectedCountry] = useState({});
const [searchCountry, setSearchCountry] = useState("");
var countrylist = CountryList().filter((v)=>String(v.name).toLowerCase().includes(String(searchCountry).toLowerCase()))
return(<Modal 
    visible={showCountryList}
    onRequestClose={closeModal}
    animationType="slide"
    transparent={false}
    style={{backgroundColor:"white"}}
    >
   <View style={{flex:1,backgroundColor:"white",flexDirection:"column"}}>
<View style={{height:50,marginBottom:10,flexDirection:"row",padding:10,alignItems:"center"}}>
<TouchableOpacity style={{width:30,justifyContent:"center",alignItems:"center"}} onPress={closeModal}>
<Icons.AntDesign color="black" name="close" size={23} />
</TouchableOpacity>
<Text style={{marginLeft:15,fontWeight:"bold",width:"100%"}}>Select a country</Text>
</View>
<View style={{width:width,height:50,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
<Icons.Evilicons name="search" size={30} style={{margin:10}} />
<View style={{flex:1,borderColor:"#ccc",borderWidth:slideBack?0:1,backgroundColor:"#f7f7f7",borderRadius:20,margin:5,marginRight:30}}>
<TextInput underlineColorAndroid="transparent"
 style={{flex:1,paddingHorizontal:15}}
  value={searchCountry} 
  onChangeText={(text)=>{
    setSearchCountry(text)
// var x = ListCountries.filter((v)=>String(v.name).toLowerCase().includes(String(text).toLowerCase()))
//   this.setState({countryList:text ==""?[...ListCountries]:[...x],searchCountry:text});
 }} 
 placeholder="search for a country ..." 
 />
{searchCountry != ""?<TouchableOpacity style={{alignSelf:"flex-end",position:"absolute",height:"100%",width:40,justifyContent:"center",alignItems:"center"}} 
onPress={()=>{ 
    setSearchCountry("")
// this.setState({searchCountry:"",countryList:[...ListCountries]});
}} >
<Icons.AntDesign color="black" name="closecircle" size={15} />
</TouchableOpacity>:null}
</View>
</View>
<View style={{flex:1,flexDirection:"column",marginTop:10}}>
{countrylist.length == 0?<View style={{padding:20,paddingVertical:5,backgroundColor:"#ffdddd"}}>
<Text style={{fontSize:10}}>No item found!</Text>
</View>:null}
<Animated.FlatList
onEndReachedThreshold={0.7}
extraData={selectedCountry.code}
 keyboardShouldPersistTaps="handled"
 onScroll={Animated.event([
   {nativeEvent:{contentOffset:{y:scrollY}}}
 ],{useNativeDriver:true})}
 style={{width,flex:1}}
  data={countrylist}
  contentContainerStyle={{paddingHorizontal:10}}
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}
  renderItem={({item,index})=>{
    const inputRange = [
      -1,
      0,
      60 * index,
      60 * (index+2)
    ]
    const opacityRange = [
      -1,
      0,
      60 * index,
      60 * (index+0.5)
    ]
    const scale = scrollY.interpolate({
      inputRange,
      outputRange:[1,1,1,0]
    })
    const opacity = scrollY.interpolate({
      inputRange:opacityRange,
      outputRange:[1,1,1,0]
    })
const backGBK = item.code === selectedCountry.code;

    return <ItemView 
    onPress={()=>_onPress(item)}
    style={{flexDirection:"row",padding:10,alignItems:"center",width,height:60,opacity,transform:[{scale}]}}>
    <Text style={{paddingHorizontal:10,fontSize:25}}>{item.flag}</Text>
      <Text 
      numberOfLines={1}
      ellipsizeMode="tail"
      style={{fontSize:14}}>{item.name} ({item.code})</Text>
      {backGBK?<Icons.Feather name="check" color="black"  style={{position:"absolute",right:40,fontSize:20,color:"limegreen"}}/>:null}
    </ItemView>
  }}
  
 />
</View> 
</View>
</Modal>)
}

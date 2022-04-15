import React, {PureComponent} from 'react';
import {
  Platform,
     StyleSheet,
     Text, 
     View,
     Clipboard,
     SafeAreaView,
     FlatList,
     ToastAndroid,
     TouchableOpacity,
    TextInput ,
    RefreshControl,
    ScrollView,
    Animated,
    Easing,
    NativeModules,
    Keyboard,
    Image,
    Picker,
    ActivityIndicator,
    Linking,
    TouchableWithoutFeedback,
    Dimensions,
    DatePickerAndroid,
    BackAndroid,
    WebView,
    Switch,
   AsyncStorage,
    ViewPagerAndroid,
    BackHandler,
    Modal } from 'react-native';
import qs from 'qs';
import { getUniqueId, getManufacturer, getBrand } from 'react-native-device-info';
const BaseURL =`https://traffikonnect.herokuapp.com/v1/`;
export const WSUrl = "wss://traffikonnect.herokuapp.com";
// console.log(DeviceInfo);
import axios from 'react-native-axios'; 
export function insertVal(title,info,uri,tags)
{
  return new Promise((resolve,eject)=>{
    resolve()
  })
}
export function returnAllNumbers(d)
{
  d = String(d).trim();
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{}A-Z a-z]/g, '');
}
export function returnUsername(d)
{
  d = String(d).trim();
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{} 0-9]/g, '');
}
export function returnAllNumbersWithComma(d)
{
  d = String(d).trim();
  return d.replace(/[-+&\/\\#()$~%.;'":*?<>{}A-Z a-z]/g, '');
}
export function returnMobile(d)
{
  d = String(d).trim();
  d = String(d[0]) == "0"?d.replace("0",""):d;
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{}A-Z a-z]/g, '');
}
export function returnAllLetter(d)
{
  d = String(d).trim();
  return d.replace(/[-+,&\/\\#()$~%.;'":*?<>{} 0-9]/g, '');
}
export function PostDATA(url,data)
{
return new Promise((resolve,reject)=>{
console.log("url: ", url,"data",data);
getDeviceInfo().then((info)=>{
AsyncStorage.getItem("nickname").then((nickname)=>{
data.device_signature = `${info.deviceID}`;
if(nickname != null)
{
  data.nickname = nickname;
}
var config = {
  method: 'post',
  url: `${BaseURL}${url}`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data:data
};
console.log("config: ", config);
axios(config).then(function (response) {
  console.log("response:",response);
  resolve(response.data)
}).catch(function (error) {
  console.log("error:",error);
  resolve({
    status:false,
    result:error,
    message:error.message
  })
});
})
})
})
}

export function PostGET(url,data)
{
return new Promise((resolve,reject)=>{
console.log("url: ", url);
var myHeaders = new Headers();
var params = [];
AsyncStorage.getItem("nickname").then((nickname)=>{
if(nickname != null)
{
  params.push(`nickname=${nickname}`);
}
 for(var a in data)
{
  params.push(`${a}=${data[a]}`);
}
getDeviceInfo().then((info)=>{
  // alert(JSON.stringify(info))
myHeaders.append("device_signature", `${info.deviceID}`)
var option = {
  method: "GET",
  headers: myHeaders
}
url = `${BaseURL}${url}`;
// alert(JSON.stringify(option))
console.log(url);
 fetch(url,option).then((res)=>res.text()).then((resp)=>{
//  alert(resp)
  resp = JSON.parse(resp);
  console.log("resp --: ",resp);
  resolve(resp);
}).catch(e =>{
  console.log("server error:",e);
  resolve({
    status:false,
    message:"Oops! server error.",
    server_error:true
  });
})
})
})
});
}
export function PasswordStrength(d)
{
  var regex = /[a-z]/;
  var regexCap = /[A-Z]/;
  var regexSp = /[!@#$%^&*()\-_=+{};:,<.>]/;
  var regexNum = /[0-9]/;
if(String(d).length < 8)
{
return false;
}
var strong = [];
  if(regex.test(d)) {
    strong.push("true");
    }
  if(regexCap.test(d)) {
    strong.push("true");
    }
  if(regexSp.test(d) && regexNum.test(d)) {
    strong.push("true");
    }
    return strong.length >= 2?true:false;
}
export function createUniqueID() {
  var text = "";
  var tm = new Date().getMilliseconds();
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text+tm;
}
export function returnComma(str){
  if(str === "") {
    return str;
  }
  if(str === ".") {
    return String(str).replace('.','');
  }
  if(String(str) === "00"){
    return "0";
  }
  str = String(str).replace(/[^0-9.]/g,'');
  var getDot = String(str).split(".");
  var firstPart = getDot[0];
  if(firstPart.length >= 4) {
     firstPart = firstPart.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}
  if(getDot.length >= 2){
    return firstPart+"."+getDot[1];
  }
  return firstPart;
}
export function UniqueID(d) {
  var text = "";
  if(d == undefined)
  {
    d = 16;
  }else{
    d = parseInt(d);
  }
  var tm = new Date().getMilliseconds();
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < d; i++)
  {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    return text;
}
export function Emailvalidate(email)
{
  if(email == "")
  {
    email = "a";
  }
  if(String(email).includes(" "))
  {
   return false;
  }
var spiltem = String(email).split("@");
if(spiltem.length == 1)
{
return false;
}else if(!String(spiltem[1]).includes("."))
{
  return false;
}else if(String(spiltem[1]).split(".")[1].length <= 1){
  return false; 
}else{
  return true;
}
}
export async function sendEmail(to, subject, body, options = {}) {
  const { cc, bcc } = options;
  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
      subject: subject,
      body: body,
      cc: cc,
      bcc: bcc
  });

  if (query.length) {
      url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
      throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
}
export function returnMask(d,n)
{
  var x = String(d).split("").map((a,i)=>{
    if(i < String(d).length - n)
    {
      return "X";
    }else{
      return a;
    }
  })
  return x.join("");
}
export function returnGetParams(p)
{
var params = [];
for(var s in p)
{
  params.push(`${s}=${p[s]}`);
}
return params.join("&");
}
export function getMime(uri,fmt)
{
var spl = String(uri).split(".");
if(fmt.includes(spl[spl.length - 1]))
{
  return true;
}else{
  return false;
}

}
export function calculateDistance(lat1,lat2,lon1,lon2){
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(parseFloat(lat2)-parseFloat(lat1));  // deg2rad below
  var dLon = deg2rad(parseFloat(lon2)-parseFloat(lon1)); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(parseFloat(lat1))) * Math.cos(deg2rad(parseFloat(lat2))) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
export function checkEmail(d){
  var regexNum = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if(regexNum.test(d)){
        return true;
    }
return false;  
}
export function getDeviceInfo()
{
return new Promise((resolve)=>{
resolve({
  manufacturer:getManufacturer(),
  brand:getBrand(),
  deviceID:getUniqueId()
})
})
}
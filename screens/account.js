import React from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import {BackG} from '../screens/home';
const {width,height} = Dimensions.get("screen");
const Account = (props)=>{
    return (
        <View style={{flex:1,padding:40}}>
             <BackG 
           props={{style:{width,height,position:"absolute",top:0,left:0}}}
           />
            <Text style={{fontSize:40}}>Account</Text>
        </View>
    )
}

export default Account;


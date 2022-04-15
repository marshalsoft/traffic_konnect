import React, {useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    StatusBar
} from 'react-native'
import {getStore} from '../includes/actions';
import {LogoG,getTheme} from '../includes/SvgObj';
import {connect} from 'react-redux';
const Splash = ({navigation,Reducer})=>{
    const {username} = getStore();
    useEffect(() => {
        // AsyncStorage.setItem("nickname","inventive_auditor_93");
        StatusBar.setHidden(true);
        // AsyncStorage.removeItem("nickname");
        AsyncStorage.getItem("nickname").then((res)=>{
        res == null?navigation.reset({
                    index:0,
                    routes:[{name:'checkin'}],
                  }):navigation.reset({
                    index: 0,
                    routes:[{ name:'dashboard'}],
                  });
        })
        return () => {
           
        }
    }, [username])
    const {darkmode} = Reducer;
    const theme = getTheme(darkmode);
    return (
        <View style={{backgroundColor:"black",flex:1,justifyContent:"center",alignItems:"center"}}>
        <StatusBar 
        hidden
          />
       <View style={{position:"absolute",flexDirection:"column",justifyContent:"center",alignItems:"center",top:240}}>
        <LogoG 
        />
        <Text style={{fontSize:30,color:theme.color,fontWeight:"bold"}}>Traffikonnet</Text>
        </View>
       <Text style={{fontSize:14,color:theme.color,position:"absolute",bottom:50}}>Your Traffic Companion</Text>
            
        </View>
    )
}
const mapDispatchToProps = ((state)=>{
return state;
})
export default connect(mapDispatchToProps)(Splash)
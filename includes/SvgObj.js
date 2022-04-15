import React from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    Pressable
} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const LogoG = ({props}) =>{
  return (
    <Svg width={54} height={53}
    {...props}
    fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M47.488 29.319H33.614l5.829 5.701a15.044 15.044 0 01-3.96 3.928l-5.828-5.828v13.906c-.924.128-1.855.192-2.788.19a20.29 20.29 0 01-2.787-.19V33.278l-5.829 5.829a16.089 16.089 0 01-3.96-4.087l5.861-5.701H6.278a20.304 20.304 0 010-5.544h41.179c.253 1.84.253 3.705 0 5.544h.031z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M53.095 23.775A26.386 26.386 0 00.513 26.531c.004.931.057 1.862.158 2.788a26.386 26.386 0 005.702 13.81c.407.508.84.995 1.299 1.457l1.172 1.172c.475.444.95.887 1.457 1.3a26.291 26.291 0 0013.779 5.7h5.575a26.387 26.387 0 0013.81-5.7l1.616-1.426.887-.887a20.45 20.45 0 001.299-1.52 26.166 26.166 0 005.702-13.78c.048-.928.048-1.859 0-2.787.094-.958.137-1.92.126-2.883zm-9.693 15.363a19.229 19.229 0 01-3.77 3.928 20.59 20.59 0 01-9.819 4.086c-.923.129-1.855.192-2.787.19a20.653 20.653 0 01-12.67-4.276 20.557 20.557 0 01-8.014-13.748 20.305 20.305 0 010-5.543 20.78 20.78 0 0141.178 0c.254 1.84.254 3.705 0 5.544a20.305 20.305 0 01-4.118 9.82z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={0.99}
          y1={20.186}
          x2={47.321}
          y2={43.738}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#37E80B" />
          <Stop offset={0.589} stopColor="#FFC700" />
          <Stop offset={0.911} stopColor="#FF7901" />
          <Stop offset={1} stopColor="#FF0303" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={-5.937}
          y1={-7.47}
          x2={62.159}
          y2={12.185}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#37E80B" />
          <Stop offset={0.589} stopColor="#FFC700" />
          <Stop offset={0.911} stopColor="#FF7901" />
          <Stop offset={1} stopColor="#FF0303" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
const BtnG = ({text = "Button",onPress,textColor="black",width = 337,height = 53})=> {
    return (<TouchableOpacity 
    style={{justifyContent:"center",alignItems:"center",width:"100%"}}
    onPress={onPress}
    >
      <Svg 
      
      width={337} 
      
      height={53} fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <Stop offset={0.589} stopColor="#FFC700" />
            <Stop offset={0.911} stopColor="#FF7901" />
            <Stop offset={1} stopColor="#FF0303" />
          </LinearGradient>
        </Defs>
      </Svg>
      <Text style={{position:"absolute",alignSelf:"center",fontSize:14,color:textColor,fontWeight:"bold"}}>{text}</Text>
      <Svg 
      width="19" 
      height="18" 
      style={{position:"absolute",right:"22%"}}
      viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M11.5 3V18H0.5V16H2.5V0H11.5V1H16.5V16H18.5V18H14.5V3H11.5ZM7.5 8V10H9.5V8H7.5Z" fill="#151614"/>
      </Svg>
      </TouchableOpacity>
    )
  }
  const SmallBtnG = ({text = "Button",onPress,textColor="black"})=> {
    return (<TouchableOpacity 
    style={{justifyContent:"center",alignItems:"center",width:70,overflow:"hidden",borderRadius:10}}
    onPress={onPress}
    >
      <Svg 
      width={70} 
      height={30} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
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
            <Stop offset={0.611} stopColor="#FF7901" />
            <Stop offset={1} stopColor="#FF0303" />
          </LinearGradient>
        </Defs>
      </Svg>
      <Text style={{position:"absolute",alignSelf:"center",fontSize:10,color:textColor,fontWeight:"bold"}}>{text}</Text>
      </TouchableOpacity>
    )
  }
const getTheme = (darkmode)=>{
 if(darkmode)
{
    return {
        backgroundColor:"#000",
        color:"#fff"
    }
}else{
    return {
        backgroundColor:"#fff",
        color:"#000"
    }
}

}
module.exports = {
    LogoG,
    BtnG,
    getTheme,
    SmallBtnG
}
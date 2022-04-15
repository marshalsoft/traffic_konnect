
import React from 'react';
import Svg, { Path,Circle,Defs,Pattern,Use} from "react-native-svg";
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

export const ADD_RIDER = 'ADD_RIDER';
import {useSelector,useDispatch} from 'react-redux';
import MaskedView from "@react-native-community/masked-view";
import LinearGradient from "react-native-linear-gradient";


var nicknames = require('nicknames');
export const addRider = (rider) => (
  {
    type: "ADD_RIDER",
    data: rider
  }
);

export const getStore = () => {
  const state = useSelector(state => state.Reducer)
  return state;
}

export const addRIDER = (d) => {
  const dispatch = useDispatch();
 dispatch(
  {
    type:ADD_RIDER,
    data:d
  }
);
}
export const fakeNickname = (gender = "male")=>{
var fm = [
	"Abby",
	"Evie",
	"Liona",
	"Cleo",
	"Emme",
	"Addie",
	"Florrie",
	"Gracie",
	"Star",
	"Izzy",
	"Daisy",
	"Jaz",
	"Tessie",
	"Ginny",
	"Ellie",
	"Kat-Kat",
	"Kitty-Kat",
	"Jules",
	"Juju",
	"Tweety",
	"Kiki",
	"Cookie",
	"Vinnie",
	"Snuffly",
	"Lulu",
	"Tillie",
	"Coco",
	"Rosie",
	"Laylay",
	"Twinkles",
	"Pumpkin",
	"Nellie",
	"Lolo",
	"Miss Priss",
	"Bumblebee",
	"Paws",
	"Tiny Toes",
	"Bubbles",
	"Cherry",
	"Cherry Pie",
	"Sunny",
	"Sparkles",
	"Strawberry",
	"Sweetums",
	"Pearl",
	"Kitty",
	"Pootie",
	"Cat Nip",
	"Benz",
	"Babs"
]
var ml = [
	"Romeo",
	"Big Daddy",
	"Captain",
	"Champ",
	"Casanova",
	"Pope",
	"Hunk",
	"Vegas",
	"Mac",
	"Boss",
	"Ace",
	"Hot Chocolate",
	"Simba",
	"Cowboy",
	"Cosmo",
	"Prince",
	"Tarzan",
	"Dex",
	"Hawk",
	"T-Bone",
	"Woody",
	"Biggie",
	"Slick",
	"Lion",
	"Colt 45",
	"Money",
	"Juice",
	"Moose",
	"Peanut",
	"Hunter",
	"Tank",
	"Diesel",
	"Jax",
	"Oreo",
	"Bubba",
	"Champ",
	"Cash",
	"Cash Money",
	"Thor",
	"Point Dexter",
	"Big Bear",
	"Gizmo",
	"Webster",
	"Cadillac",
	"Gums",
	"Chuck"
]
 
  if(gender == "male")
  {
return ml[Math.floor((Math.random() * ml.length) + 1)]
  }else{
 return fm[Math.floor((Math.random() * fm.length) + 1)]
  }
}
export const GradientText = ({text = "Text",textStyle={}})=>{
		return (
		  <MaskedView 
		  maskElement={<Text style={{...textStyle}}>{text}</Text>} >
			<LinearGradient
			  colors={["#37E80B", "#FFC700","#FF7901","#FF0303"]}
			  start={{ x: 0, y: 0 }}
			  end={{ x: 1, y: 0 }}
			>
			<Text style={{...textStyle,color:"transparent"}}>{text}</Text>	
			</LinearGradient>
		  </MaskedView>
		)
}





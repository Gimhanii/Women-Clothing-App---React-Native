import React ,{useState} from 'react';
import{Text,View,StyleSheet,TextInput,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Success(){
  
  const navigation=useNavigation();

  return(
    
    <View>
    <Image source={require('./lolo.png')} style={styles.image}>
    </Image>
    <Text style={styles.text}>THANK YOU FOR JOINING WITH US...</Text>
   
    </View>
  );
}

const styles=StyleSheet.create(
  {
    image:{
      width:250,
      height:250,
      marginTop:150,
      marginRight:60,
      marginLeft:60
    },
    text:{
      marginTop:20,
      marginBottom:20,
      fontSize:25,
      textAlign:'center',
      color:'#330000',
      fontWeight:'bold',
    }
  }
);
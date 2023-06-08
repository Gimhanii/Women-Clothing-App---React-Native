import React,{useState} from 'react';
import{Text,View,Image,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home(){

  const navigation=useNavigation();

  return(
    <View>
    <ImageBackground source={require('./outfit.jpg')} style={{ justifyContent:'center',resizeMode:'cover',width:'100%',height:'100%'}}>
    <View styles={{alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity style={styles.touch1} onPress={()=>navigation.navigate('Categories')}>
      <Text style={{textAlign:'center',alignItems:'center', padding: 10,
      borderRadius:20,}}>Frock</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch2} onPress={()=>navigation.navigate('Skirts')}>
        <Text style={{textAlign:'center',alignItems:'center', padding: 10,
      borderRadius:20,}}>Skirt</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch3} onPress={()=>navigation.navigate('Top')}>
       <Text style={{textAlign:'center',alignItems:'center', padding: 10,
      borderRadius:20,}}>Top</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touch4}onPress={()=>navigation.navigate('Denim')}>
        <Text style={{textAlign:'center',alignItems:'center', padding: 10,
      borderRadius:20,}}>Denim</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
       
    </View>

  );
}
const styles=StyleSheet.create(
  {
    touch1:{
      alignItems:'center',
      backgroundColor:'#EBD61E',
      marginTop:50,
      marginBottom:20,
      width:"55%",
      marginLeft:95,
      marginRight:95,
    },
    touch2:{
      alignItems:'center',
      backgroundColor:'#EB991F',
      marginTop:30,
      marginBottom:20,
      width:"55%",
      marginLeft:95,
      marginRight:95,
    },
    touch3:{
      alignItems:'center',
      backgroundColor:'#DF8B4A',
      marginTop:30,
      marginBottom:20,
      width:"55%",
      marginLeft:95,
      marginRight:95,
    },
    touch4:{
      alignItems:'center',
      backgroundColor:'#AEC324',
      marginTop:30,
      marginBottom:20,
      width:"55%",
      marginLeft:95,
      marginRight:95,
    },
  }
);
      

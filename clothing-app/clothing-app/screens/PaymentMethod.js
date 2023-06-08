import React ,{useState} from 'react';
import{Text,View,StyleSheet,TextInput,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function PaymentMethod(){
  
  const navigation=useNavigation();

  return(
    
    <View>
   <Image source={require('./l1.png')} style={styles.image}></Image>
   <View style={{justifyContent:'center',alignItems:'center'}}>

    <TouchableOpacity style={styles.touch1} onPress={()=>navigation.navigate('Success')}>
    <Text style={styles.text}>Payment successfull</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch2} onPress={()=>navigation.navigate('Landing')}>
    <Text style={styles.text}>Delete</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.touch3} onPress={()=>navigation.navigate('Home')}>
    <Text style={styles.text}>Upgrade</Text>
    </TouchableOpacity>

    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  image:{
    width:360,
      height:250,
      resizeMode:'contain',
      marginTop:120,
      marginLeft:25,
      marginRight:75,
      marginBottom:20,
  },
  touch1:{
    alignItems:'center',
    backgroundColor:'#FF9999',
    marginTop:20,
    marginBottom:10,
    height:50,
    width:300,
    margin:10,
    borderWidth:2,
    padding:10
  },
   touch2:{
    alignItems:'center',
    backgroundColor:'#FFCCCC',
    marginBottom:10,
    height:50,
    width:300,
    margin:10,
    borderWidth:2,
    padding:10
  },
   touch3:{
    alignItems:'center',
    backgroundColor:'#FF6666',
    marginBottom:10,
    height:50,
    width:300,
    margin:10,
    borderWidth:2,
    padding:10
  },
  text:{
    fontWeight:'bold',
    fontSize:20,
    
  }
});


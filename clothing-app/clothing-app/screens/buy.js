import React,{useState} from 'react';
import {Text,View,TouchableOpacity,ImageBackground,Image,StyleSheet,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Buy(){

  const[cardnumber,setCardnumber]=useState("");
  const[nameoncard,setNameoncard]=useState("");
  const[expirydate,setExpirydate]=useState("");
  const[namesecuritycode,setSecuritycode]=useState("");

  const navigation=useNavigation();

  return(
    <View>

    <ImageBackground source={require('./buy.jpg')} style={{ justifyContent:'center',resizeMode:'cover',width:'100%',height:'100%'}}>
    
    <Text style={styles.text}>Payment Form</Text>

    <Text style={styles.text1}>Card Number</Text>
    <TextInput style={styles.touch} placeholder="card number" onChangeText={(text)=>setCardnumber(text)}/>

    <Text style={styles.text1}>Name on Card</Text>
    <TextInput style={styles.touch2} placeholder="Name on card" onChangeText={(text)=>setNameoncard(text)}/>

    <Text style={styles.text1}>Expiry Date</Text>
    <TextInput style={styles.touch3} placeholder="Expiry date" onChangeText={(text)=>setExpirydate(text)}/>

    <Text style={styles.text1}>Security Code</Text>
    <TextInput style={styles.touch4} placeholder="security code" onChangeText={(text)=>setSecuritycode(text)}/>

    <TouchableOpacity style={styles.touch5} onPress={()=>navigation.navigate('PaymentMethod')}>
    <Text style={styles.text2}>Payment complete</Text>
    </TouchableOpacity>
    </ImageBackground>
 
    </View>
  );
}

const styles=StyleSheet.create(
  {
    text:{
      marginTop:20,
      fontSize:50,
      color:'#330019',
      fontWeight:'bold',
      marginBottom:50,
      textAlign:'center',
    },
    touch:{
     height: 40,
     width: "95%",
     borderColor: '#330000',
     borderWidth: 3, 
     marginBottom: 20,
     marginTop:20,
    },
    touch2:{
      height:40,
      width:"95%",
      borderColor: '#330000',
      borderWidth:3,
      marginBottom:20,
      marginTop:20,
    },
    touch3:{
      height:40,
      width:"45%",
      borderColor:'#330000',
      borderWidth:3,
      marginBottom:20,
      marginTop:20,
    },
    touch4:{
      height:40,
      width:"45%",
      borderColor: '#330000',
      borderWidth:3,
      marginBottom:20,
      marginTop:20,
    },
    touch5:{
      alignItems:'center',
      height:40,
      width:"75%",
      borderWidth:1,
      marginBottom:20,
      backgroundColor:'#003319',
      borderRadius:30,
      marginTop:10,
      marginRight:45,
      marginLeft:45,
    },
    text1:{
      fontSize:25,
      color:'#331900',
      fontWeight:'bold',
    },
    text2:{
      fontSize:20,
      marginTop:7,
      color:'white'
    }
  }
);
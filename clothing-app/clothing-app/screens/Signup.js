import React,{useState} from 'react';
import {Text,View,TouchableOpacity,TextInput,StyleSheet,Alert,ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Signup(){

  const navigation=useNavigation();

  const [username,setUsername]=useState("");
  const [createpassword,setCreatePassword]=useState("");

  const checkField=()=>{
    if(username==""){
      alert("please fill username")
      return false
    }
    else if(createpassword==""){
      alert("fill the password")
      return false
    }
    return true
  }

  const successLogin=()=>{
    if(checkField()){
      alert("successfull login")
    }
  }

  return(

    <View style={styles.container}>
     <ImageBackground source={require('./casual.jpg')} style={{ justifyContent:'center',resizeMode:'cover',width:'100%',height:'100%'}}>
    
    <Text style={styles.text}>CREATE NEW ACCOUNT</Text>
   
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <Text style={styles.text1}>Username or Email</Text>

    <TextInput style={styles.textInput}
    placeholder="create username or email"
    onChangeText={(text)=>setUsername (text)}/>

    <Text style={styles.text1}>Password</Text>

    <TextInput style={styles.textInput}
    secureTextEntry={true}
    placeholder="create password"
    onChangeText={(text)=>setCreatePassword (text)}/>
    
    <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('Home')}>
    <Text style={styles.btnlogin}>SUBMIT</Text>
   
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    
  );
}
const styles=StyleSheet.create(
  {
    container:{
      flex:1,
      paddingTop:20,
      border:10
    },
    text:{
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:20,
      marginBottom:190,
      color:'#003333',
      fontStyle:'italic',
    },
    text1:{
      fontSize:18,
      marginLeft:30,
      fontWeight:'bold',
    },
    textInput:{
      backgroundColor:'#808080',
      height:40,
      width:300,
      margin:10,
      borderWidth:2,
      padding:10,
    },
    touch:{
      marginTop:50,
      alignItems:'center',
      backgroundColor:'#404040',
      padding:10,
      borderRadius:20,
      width:"75%",
      marginLeft:25,
      marginRight:25,
      fontWeight:'bold',
    },
    btnlogin:{
       color:'white',
    }
  }
);

   
import React,{useState} from 'react';
import {Text,View,TouchableOpacity,Alert,StyleSheet,TextInput,ImageBackground}from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Login(){
  
  const navigation=useNavigation();

  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  

   const handleLogin = () => {
     console.log(`username: ${username} , password:,${password}`);

    if (username=='Saman' &&  password=='1234') {
      Alert.alert('Login successfull');
      navigation.navigate('Home');
    }
     else {
      
     
      Alert.alert('Error.....');
      
     
    }
  };
  return(
    
    <View style={styles.container}>
    <ImageBackground source={require('./sign.webp')}style={styles.baclimag}>

    <Text style={styles.text}> Login </Text>

    <Text style={styles.ustext}>Username</Text>

    <TextInput style={styles.textInput}
    placeholder="Type your username"
    onChangeText={(text)=>setUsername (text)}/>

    <Text style={styles.ustext}>password</Text>

    <TextInput style={styles.textInput}
    secureTextEntry={true}
    placeholder="Type your password"
    onChangeText={(text)=>setPassword (text)}/>

    <TouchableOpacity style={styles.butstyle} onPress={()=>navigation.navigate('Signup')}>
    <Text style={styles.txt}>New user? Signup</Text>
     

    <TouchableOpacity style={styles.touch} onPress={handleLogin}>
    <Text style={styles.btnLogin}>LOGIN</Text>
    </TouchableOpacity>

    <Text style={styles.forget}>forget password</Text>
     
     </TouchableOpacity>
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
    baclimag:{
      resizeMode:'cover',
      flex:1,
    },
    butstyle:{
      alignItems:'center',
      justifyContent:'center',
      borderColor:'black',
      borderRadius:25,
      shadowOpacity: 0.50,
      shadowColor: '#76746C',
    },

    text:{
      textAlign:'center',
      fontWeight:'bold',
      marginTop:80,
      fontSize:45,
      fontFamily: 'Gill Sans',
      color:'#E0E0E0'
      
    },
    textInput:{
      marginTop:20,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FFFAFA',
      marginLeft:55,
      width:250,
      height:40,
      borderWidth: 2,
      padding: 10,
      borderRadius:20,
     
    },
    forget:{
      textAlign:'right',
      color:'blue',
      marginTop:20,
      fontSize:16,
      fontWeight:'bold'
    },
    btnLogin:{
      alignItems: "center",
      justifyContent: "center",
      color:'black',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20,
      
    },
    touch:{
      width:150,
      height: 50,
      borderRadius:50,
      padding:10,
      backgroundColor:'#FFDEAD',
      marginTop:40,
      shadowOpacity: 0.80,
      shadowColor: '#76746C',
    },
    txt:{
      color:'white',
      marginTop:30,
      fontSize:20,
      textAlign:'center'
    },
    ustext:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',
      marginLeft:55
      
    }
   
  }
 
);


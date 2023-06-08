import * as React from 'react';
import {Text,View,TouchableOpacity,ImageBackground,StyleSheet,Button,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Landing=()=>{
  
  const navigation=useNavigation();
  
  return(

    <View style={styles.container}>
    
      <ImageBackground source={require('./get.jpeg')} style={styles.backgroundImage}>
     
      <Image source={require('./lolo.png')} style={styles.image}></Image>
        <TouchableOpacity style={styles.butstyle} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.butlog}>Get Start</Text>
        </TouchableOpacity>
      </ImageBackground>
      </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(0,0,0,.6)'
  },
  backgroundImage: {
    flex:1,
    resizeMode:'cover',
    opacity:0.9,
    height:'100%',
    fontWeight:'bold',
},

  butstyle:{
    
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#EFE',
   
    padding:10,
    marginTop:470,
    marginLeft:100,
    width:200,
    height:50,
    borderColor:'black',
  
    borderRadius:25,
    shadowOpacity: 0.50,
    shadowColor: '#76746C',
  },

  butlog:{
      
      textAlign:'center',
      fontWeight:'bold',
      fontSize:25,
      fontFamily: 'Cochin',
  },
  image:{
    marginTop:10,
     width: 80,
    height: 80,
    marginRight:300,
    marginLeft:300,
  }
});

export default Landing;

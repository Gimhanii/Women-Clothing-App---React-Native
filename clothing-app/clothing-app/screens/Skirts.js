import * as React from 'react';
import {Text,View,TouchableOpacity,ImageBackground,Image,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Skirts(){

  const navigation=useNavigation();

  return(
    <View>
   
    <ImageBackground source={require('./back.jpg')} style={{ justifyContent:'center',resizeMode:'cover',width:'100%',height:'100%'}}>
    <Text style={styles.text5}>SKIRTS</Text>

    <Image source={require('./skirt.webp')}style={styles.image}></Image>
    <Text style={styles.text3}>BASIC MINI SKIRT </Text>
    <Text style={styles.text4}>3,430 LKR</Text>
    
    <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('PaymentMethod')}>
    <Text style={styles.text}>Buy Now</Text>
    </TouchableOpacity>

     <Image source={require('./skirt.png')}style={styles.image1}></Image>
     <Text style={styles.text6}>HIGH WAIST FLARE SKIRT  </Text>
     <Text style={styles.text4}>5,450 LKR</Text>

    <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('PaymentMethod')}>
    <Text style={styles.text}>Buy Now</Text>
    </TouchableOpacity>
    </ImageBackground>
    
    </View>
  );
}

const styles=StyleSheet.create(
  {
    image:{
      width:320,
      height:220,
      resizeMode:'contain',
      marginTop:20,
      marginLeft:25,
      marginRight:75,
      marginBottom:20,

    },
    image1:{
      width:320,
      height:220,
      resizeMode:'contain',
      marginLeft:25,
      marginRight:75,
      marginBottom:20,
    
    },
    touch:{
      backgroundColor:'#001933',
      fontSize:18,
      marginBottom:20,
      alignItems:'center',
      width:130,
      height:18,
      marginLeft:115,
      marginRight:115,
      
    },
    text:{
      color:'white',
    },
    text3:{
      marginLeft:125,
      marginRight:125
    },
     text4:{
      marginLeft:155,
      marginRight:155,
    },
    text5:{
      marginRight:135,
      marginLeft:135,
      fontWeight:'bold',
      color:'#404040',
      fontSize:32,
    },
    text6:{
      marginLeft:105,
      marginRight:105
    },
  }
)
     


  
  
  

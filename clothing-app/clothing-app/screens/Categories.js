import * as React from 'react';
import {Text,View,TouchableOpacity,ImageBackground,Image,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Categories(){

  const navigation=useNavigation();

  return(
    <View>
    
    <ImageBackground source={require('./back.jpg')} style={{ justifyContent:'center',resizeMode:'cover',width:'100%',height:'100%'}}>
    <Text style={styles.text5}>FROCK</Text>

    <Image source={require('./l1.png')}style={styles.image}></Image>
    <Text style={styles.text3}>SLEEVELESS FLORAL MIDI DRESS </Text>
    <Text style={styles.text4}>4,680 LKR</Text>
    
    <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('buy')}>
     <Text style={styles.text}>Buy Now</Text>
     </TouchableOpacity>

     <Image source={require('./l2.png')}style={styles.image1}></Image>
     <Text style={styles.text3}>PRINTED STRAPPY BACK DRESS </Text>
    <Text style={styles.text4}>4,620 LKR</Text>

    <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('buy')}>
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
      marginTop:2,
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
      marginLeft:85,
      marginRight:85
    },
     text4:{
      marginLeft:155,
      marginRight:155,
    },
    text5:{
      marginRight:135,
      marginLeft:135,
      fontWeight:'bold',
      color:'#660033',
      fontSize:35,
    }
   
  }
)
     


  
  
  

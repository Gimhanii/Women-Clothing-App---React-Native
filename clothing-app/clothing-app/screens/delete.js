import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';

export default function Delete(){
  const MyComponent=()=>{
    const[items,setItem]=useState(['Item 1','Item 2','Item 3']);

    const handleDelete=(index)=>{
      const updateItem=[...items];
      updatedItems.splice(index,1);
      setItem(updatedItems);
    };

    return(
      <View>
      {items.map((item,index)=>(
        <View key={index}>
        <Text>{item}</Text>
        <Button title="Delete" onPress={()=>handleDelete(index)}/>
        </View>
    ))}

    </View>
    );
  };
}
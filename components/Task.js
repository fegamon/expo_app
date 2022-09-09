import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export type iconProps = {
  iconName:string,
  color:string,
  taskName:string,
  message:string
}

export default function Task(props:iconProps) {
  const alert = () =>
  Alert.alert(
    props.taskName,
    props.message,
    [
      { text: "OK" }
    ]
  );

  return(
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={ alert }>
        <FontAwesome name={props.iconName} size={75} color={props.color}/>
        <Text style={styles.text}>{props.taskName}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    backgroundColor:"#E0E0E0",
    alignSelf:"center",
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    margin:4,
    borderWidth:1,
    borderColor:"grey",
  },
  text:{
    fontWeight:"bold",
    textAlign:"center"
  }
})
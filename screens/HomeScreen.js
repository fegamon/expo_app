import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Task from '../components/Task';


export default function HomeScreen() {
  const iconColor = '#FF862D'
  return(
    <>
      <View>
        <Text style={ styles.tittle }>Mis tareas</Text>
      </View>
      <View style={styles.container}>
        <View style={ styles.buttonContainer }>
          <Task iconName='pencil' taskName='Tareas' color={iconColor} message='Tarea realizada!'/>
          <Task iconName='sticky-note' taskName='Notas' color={iconColor} message='Tarea realizada!'/>
          <Task iconName='search' taskName='Buscar' color={iconColor} message='Tarea realizada!'/>
        </View>
        <View style={ styles.buttonContainer }>
          <Task iconName='heart' taskName='Salud' color={iconColor} message='Tarea realizada!'/>
          <Task iconName='th-list' taskName='Lista' color={iconColor} message='Tarea realizada!'/>
          <Task iconName='clock-o' taskName='Alarma' color={iconColor} message='Tarea realizada!'/>
        </View>
        <View style={ styles.buttonContainer }>
          <Task iconName='play' taskName='Play' color={iconColor} message='Tarea realizada!'/>
          <Task iconName='check-circle' taskName='Verificar' color={iconColor} message='Tarea realizada!'/>
          <Task iconName='fire' taskName='Comer' color={iconColor} message='Tarea realizada!'/>
        </View>
        <View style={ styles.buttonContainer }>
          <Task iconName='eye' taskName='Sapear' color={iconColor} message='Tarea realizada!'/>
          <Task iconName='plane' taskName='Viajar' color={iconColor} message='Tarea realizada!'/>
          <Task iconName='shopping-cart' taskName='Comprar' color={iconColor} message='Tarea realizada!'/>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:"auto",
    marginBottom:"auto",
  },
  buttonContainer:{
    paddingRight:"auto",
    margin:"auto",
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
  },
  tittle:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10,
  }
});
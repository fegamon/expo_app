import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Entypo, AntDesign  } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Inicio'
          component={ HomeScreen }
          options={{
            tabBarIcon: ({ color }) => <Entypo name='home' size={30} color={color}/>
          }}
        />
        <Tab.Screen
          name='Perfil'
          component={ ProfileScreen }
          options={{
            tabBarIcon: ({ color }) => <AntDesign name='user' size={30} color={color}/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

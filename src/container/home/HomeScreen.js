import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import Colors from '../../res/Colors';


const HomeScreen = ({ navigation }) => {

  const handleRedirect = (route) => {
    navigation.navigate(route)
  }

  return(
    <View style={styles.container}>
      <Pressable 
        onPress={() => handleRedirect('Register')}
        style={styles.btn} 
        >
        <Text style={styles.btnText}>Register</Text>
      </Pressable>
      <Pressable 
        onPress={() => handleRedirect('List')}
        style={styles.btn} 
        >
        <Text style={styles.btnText}>List</Text>
      </Pressable>
      <Pressable 
        onPress={() => handleRedirect('Notifications')}
        style={styles.btn} 
        >
        <Text style={styles.btnText}>Notifications</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleText: {
    color: '#fff',
    textAlign: 'center'
  },
  btn: {
    padding: 8,
    backgroundColor: Colors.green,
    borderRadius: 3,
    margin: 16,
    width: 150,
    height:70,
    textAlign: 'center',
    paddingTop: 20
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  loading: {
    marginTop: 60,
  },
})



export default HomeScreen;
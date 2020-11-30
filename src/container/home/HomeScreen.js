import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';



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
    backgroundColor: 'red',
  },
  titleText: {
    color: '#fff',
    textAlign: 'center'
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  },
  loading: {
    marginTop: 60,
  },
})



export default HomeScreen;
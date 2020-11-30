import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Storage from '../../libs/store';


const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({})
  const [dropDown, setDropDown] = useState(false)

  const handleCohort = (cohort) => {
    setForm({
      ...form,
      cohort,
    })
    setDropDown(false)
  }

  const handleSubmit = async () => {
    const formStr = JSON.stringify(form);
    const key = `User-${form.email}`

    const stored = await Storage.instance.store(key, formStr)

    console.log('stored', stored)
    
    navigation.navigate('Home')
  }

  return(
    <View>
      <TextInput 
      style={styles.textInput}
      onChangeText={(value) => setForm({ ...form, name: value})}
      placeholder='Nombre'
      />
      <TextInput 
      style={styles.textInput}
      onChangeText={(value) => setForm({ ...form, lastName: value})}
      placeholder='Apellidos'
      />
      <TextInput 
      style={styles.textInput}
      onChangeText={(value) => setForm({ ...form, email: value})}
      placeholder='Email'
      />
      <TextInput 
      style={styles.textInput}
      onChangeText={(value) => setForm({ ...form, coach: value})}
      placeholder='Coach'
      />
      <TextInput 
      style={styles.textInput}
      onChangeText={(value) => setForm({ ...form, github: value})}
      placeholder='Github'
      />
      <TextInput 
      style={styles.textInput}
      onChangeText={(value) => setForm({ ...form, cohort: value})}
      placeholder='Cohort'
      />
      <Pressable 
        style={styles.btn}
        onPress={() => setDropDown(!dropDown)}
      > 
        <Text style={styles.btnText}>Cohort</Text>
      </Pressable>
      {dropDown ? 
        <View>
          <Pressable
            style={styles.btn}
            onPress={() => handleCohort(1)}
          >
            <Text style={styles.btnText}>Cohort 1</Text>
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => handleCohort(2)}
          >
            <Text style={styles.btnText}>Cohort 2</Text>
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => handleCohort(3)}
          >
            <Text style={styles.btnText}>Cohort 3</Text>
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => handleCohort(4)}
          >
            <Text style={styles.btnText}>Cohort 4</Text>
          </Pressable>
        </View>
        :
        null      
      }

      <Pressable
        style={styles.btn}
        onPress={handleSubmit}
      >
        <Text style={styles.btnText}>Registrarse</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingLeft: 16,
    color: "#fff"
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
});



export default RegisterScreen;
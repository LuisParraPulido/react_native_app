import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Storage from '../../libs/store';
import Colors from '../../res/Colors';


const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    name: null,
    lastName: null,
    email: null,
    coach: null,
    github: null,
    cohort: null,
  })
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
    <View style={styles.container}>
      <TextInput 
      style={styles.textInput}
      placeholderTextColor='#fc8621'
      onChangeText={(value) => setForm({ ...form, name: value})}
      placeholder='Nombre'
      />
      <TextInput 
      style={styles.textInput}
      placeholderTextColor='#fc8621'
      onChangeText={(value) => setForm({ ...form, lastName: value})}
      placeholder='Apellidos'
      />
      <TextInput 
      style={styles.textInput}
      placeholderTextColor='#fc8621'
      onChangeText={(value) => setForm({ ...form, email: value})}
      placeholder='Email'
      />
      <TextInput 
      style={styles.textInput}
      placeholderTextColor='#fc8621'
      onChangeText={(value) => setForm({ ...form, coach: value})}
      placeholder='Coach'
      />
      <TextInput 
      style={styles.textInput}
      placeholderTextColor='#fc8621'
      onChangeText={(value) => setForm({ ...form, github: value})}
      placeholder='Github'
      />
      <TextInput 
      style={styles.textInput}
      placeholderTextColor='#fc8621'
      onChangeText={(value) => setForm({ ...form, cohort: value})}
      placeholder='Cohort'
      />
      <Pressable 
        style={dropDown ? [styles.dropDown] :[styles.dropDown, styles.marginBottom]}
        onPress={() => setDropDown(!dropDown)}
      > 
        <Text style={styles.dropDownText}>{form.cohort ? `Cohort ${form.cohort}` : 'Cohort'}</Text>
      </Pressable>
      {dropDown ? 
        <View>
          <Pressable
            style={styles.dropDown}
            onPress={() => handleCohort(1)}
          >
            <Text style={styles.dropDownText}>Cohort 1</Text>
          </Pressable>
          <Pressable
            style={styles.dropDown}
            onPress={() => handleCohort(2)}
          >
            <Text style={styles.dropDownText}>Cohort 2</Text>
          </Pressable>
          <Pressable
            style={styles.dropDown}
            onPress={() => handleCohort(3)}
          >
            <Text style={styles.dropDownText}>Cohort 3</Text>
          </Pressable>
          <Pressable
            style={styles.dropDown}
            onPress={() => handleCohort(4)}
          >
            <Text style={styles.dropDownText}>Cohort 4</Text>
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
  container: {
    backgroundColor: Colors.primary,
  },
  textInput: {
    height: 46,
    marginHorizontal: 30,
    backgroundColor: Colors.primary,
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGreen,
    color: Colors.primary,
    margin: 10
  },
  btn: {
    padding: 8,
    backgroundColor: Colors.green,
    borderRadius: 8,
    margin: 16,
    marginHorizontal: '10%',
    height: 50,
    paddingVertical: 15
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  },
  dropDown: {
    marginHorizontal: '30%',
    borderWidth: 1,
    borderColor: Colors.font,
    marginTop: 1,
    color: Colors.font,
    backgroundColor: 'white'
  },
  dropDownText: {
    color: Colors.font,
    textAlign: 'left',
    paddingLeft: 5,
  },
  marginBottom: {
    marginBottom: 89
  }
});



export default RegisterScreen;
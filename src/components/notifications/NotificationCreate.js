import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Storage from '../../libs/store';
import Colors from '../../res/Colors'


const NotificationCreate = ({ navigation }) => {
  const [form, setForm] = useState({
    title: null,
    description: null,
    date: null,
  })

  useEffect(() => {

  }, [])

  const handleCreate = async() => {
    const notification = JSON.stringify(form);
    const key = `notification-${form.title}`;
    const stored = await Storage.instance.store(key, notification)

    if(stored) {
      navigation.navigate('Details', { form })
    }

  }

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Title</Text>
        <TextInput 
          onChangeText={(text) => setForm({...form, title: text})}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>Description</Text>
        <TextInput 
          style={styles.input}
          multiline={true}
          onChangeText={(text) => setForm({...form, description: text})}

        />

      </View>
      <DatePicker 
        style={styles.date}
        date={form.date}
        mode='date'
        placeholder='select date'
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => setForm({...form, date: date})}
      />
      <Pressable style={styles.btnCreate} onPress={handleCreate}>
        <Text style={styles.btnText}>
          crear
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.primary,
    paddingLeft: '10%',
    paddingTop: '20%',
  },
  title: {
    fontSize: 22,
    color: Colors.font
  },
  description: {
    maxHeight: 200,
    minHeight: 200,
  },
  input: {
  },
  date: {
    width: '90%'
  },
  btnCreate: {
    width: 60,
    height: 30,
    backgroundColor: Colors.green,
    borderRadius: 3,
    paddingVertical: 5,
    marginTop: 20
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})


export default NotificationCreate;
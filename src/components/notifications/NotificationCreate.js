import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Storage from '../../libs/store';


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
    <View >
      <TextInput 
        placeholder='Title'
        onChangeText={(text) => setForm({...form, title: text})}
      />
      <TextInput 
        placeholder='Description'
        onChangeText={(text) => setForm({...form, description: text})}

      />
      <DatePicker 
        date={form.date}
        mode='date'
        placeholder='select date'
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => setForm({...form, date: date})}
      />
      <Pressable onPress={handleCreate}>
        <Text>
          crear
        </Text>
      </Pressable>
    </View>
  )
}


export default NotificationCreate;
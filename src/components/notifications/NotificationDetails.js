import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const NotificationDetails = ({ navigation, route }) => {
  const [notification, setNotification] = useState(route.params.form)
  const [edit, setEdit] = useState(false)

  const handleCreate = () => {
    navigation.navigate('create')
  }
  const handleEdit = async() => {
    const notificationStr = JSON.stringify(notification);
    const key = `notification-${route.params.form.title}`;
    const stored = await Storage.instance.store(key, notificationStr)
    if(stored) {
      setEdit(false)
    }
  }


  return(
    <View >
      {edit ? 
      <>
        <View>
          <TextInput 
            value={notification.title}
            onChangeText={(text) => setNotification({...notification, title: text})}
          />
        </View>
        <View>
          <TextInput 
            value={notification.description}
            onChangeText={(text) => setNotification({...notification, title: text})}
          />
        </View>
      </>
      : 
      <>
        <View>
          <Text>{notification.title}</Text>
        </View>
        <View>
          <Text>{notification.description}</Text>
        </View>
      </>
      }
      <View>
        <Pressable onPress={handleCreate}>
          <Text>
            crear
          </Text>
        </Pressable>
        <Pressable onPress={edit ? handleEdit : () => setEdit(true)}>
          <Text>
            {edit ? 'Save' : 'Edit'}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}


export default NotificationDetails;
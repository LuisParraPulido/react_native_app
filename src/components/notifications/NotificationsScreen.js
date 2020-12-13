import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import Storage from '../../libs/store'


const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    navigation.addListener('focus', getNotifications)
  }, [])

  const getNotifications = async() => {
    try {
      const allKeys = await Storage.instance.getAllkeys();
  
      const keys = allKeys.filter((key) => key.includes('notification-'));
  
      const notificationStr = await Storage.instance.multiGet(keys);
  
      const notifications = notificationStr.map(notification => JSON.parse(notification[1]));
      console.log(notifications)
      setNotifications(notifications)
      
    } catch (error) {
      throw Error(error)
    }
  }

  const handleCreate = () => {
    navigation.navigate('create')
  }

  const handleNotification = (form) => {
    navigation.navigate('Details', { form })
  }

  return(
    <View >
      {notifications.map(notification => {
        return(
          <View>
          <Text>{notification.title}</Text>
          <Pressable onPress={() => handleNotification(notification)}>
            <Text>ver</Text>
          </Pressable>
          </View>
        )
      })}
      {notifications.length === 0 ?
      <View>
      <Text>There are not notifications to show</Text>
      <Pressable onPress={handleCreate}>
        <Text>Create new notification</Text>
      </Pressable>
      </View>
      : null
      }

    </View>
  )
}



export default NotificationsScreen;
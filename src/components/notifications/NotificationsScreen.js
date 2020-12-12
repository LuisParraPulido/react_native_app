import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, Pressable } from 'react-native';


const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {

  }, [])

  const handleCreate = () => {
    navigation.navigate('create')
  }

  return(
    <View >
      {notifications.map(notification => {
        return(
          <Pressable>
            <Text>preview</Text>
          </Pressable>
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
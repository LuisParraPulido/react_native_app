import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';


const NotificationDetails = ({ navigation, route }) => {
  const [notification, setNotification] = useState(route.params.form)
  const [edit, setEdit] = useState(false)

  const handleCreate = () => {
    navigation.navigate('create')
  }
  const handleEdit = () => {

  }


  return(
    <View >
      <View>
        <Text>{notification.title}</Text>
      </View>
      <View>
        <Text>{notification.description}</Text>
      </View>
      <View>
        <Pressable onPress={handleCreate}>
          <Text>
            crear
          </Text>
        </Pressable>
        <Pressable onPress={handleEdit}>
          <Text>
            Editar
          </Text>
        </Pressable>
      </View>
    </View>
  )
}


export default NotificationDetails;
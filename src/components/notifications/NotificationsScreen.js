import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Storage from '../../libs/store'
import Colors from '../../res/Colors'


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
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {notifications.map(notification => {
          return(
            <View key={notification.title} style={styles.notification}>
              <Text>{notification.title}</Text>
              <Pressable style={styles.btnNotification} onPress={() => handleNotification(notification)}>
                <Text>ver</Text>
              </Pressable>
            </View>
          )
        })}        
      </ScrollView>
      {notifications.length === 0 ?
      <View>
        <Text>There are not notifications to show</Text>
      </View>
      : null
      }

      <Pressable style={styles.btnCreate} onPress={handleCreate}>
        <Text style={styles.btnText}>Create</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
  scroll: {
    maxHeight: '80%'
  },
  notification: {
    padding: 20,
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#fc8621'
  },
  btnNotification: {
    position: 'absolute',
    bottom: 0,
    right: 10
  },
  btnCreate: {
    width: 60,
    height: 30,
    backgroundColor: Colors.green,
    borderRadius: 3,
    marginLeft: 20,
    paddingVertical: 5,
    paddingLeft: 8,
    marginTop: 20
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
})


export default NotificationsScreen;
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../res/Colors'
import Storage from '../../libs/store'


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
    <View style={styles.container}>
      {edit ? 
      <>
        <View>
          <TextInput 
            style={styles.title}
            value={notification.title}
            onChangeText={(text) => setNotification({...notification, title: text})}
          />
        </View>
        <View style={styles.description}>
          <TextInput 
            value={notification.description}
            onChangeText={(text) => setNotification({...notification, title: text})}
          />
        </View>
      </>
      : 
      <>
        <View>
          <Text style={styles.title}>{notification.title}</Text>
        </View>
        <View style={styles.description}>
          <Text >{notification.description}</Text>
        </View>
      </>
      }
      <View style={styles.containerBtns}>
        <Pressable style={styles.btnCreate} onPress={handleCreate}>
          <Text style={styles.btnText}>
            crear
          </Text>
        </Pressable>
        <Pressable style={styles.btnCreate} onPress={edit ? handleEdit : () => setEdit(true)}>
          <Text style={styles.btnText}>
            {edit ? 'Save' : 'Edit'}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.primary,
    paddingHorizontal: '10%',
    paddingTop: '20%',
  },
  title: {
    fontSize: 22,
    color: Colors.font,
    marginBottom: 10,
  },
  description: {
    minHeight: 300,
  },
  containerBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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



export default NotificationDetails;
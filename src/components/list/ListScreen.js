import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Http from '../../libs/http';

let url = 'https://rickandmortyapi.com/api/character';

const ListScreen = (props) => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    const list = await Http.instance.get(url)
    const users = list.results.map(user => {
      let userFullName = user.name.split(' ')
      return ({
        name: userFullName[0],
        lastName: userFullName[1],
        cohort: Math.floor(Math.random() * 5) + 1,

      })
    })
    setList(users)
  }

  return(
    <View >
      <Text>Cohorts</Text>
      <FlatList
        data={list}
        keyExtractor={(item) => item}
        renderItem={({item}) => <Text>{`${item.name} ${item.lastName} ${item.cohort} `}</Text>}
      />
    </View>
  )
}



export default ListScreen;
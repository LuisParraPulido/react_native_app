import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Http from '../../libs/http';

let url = 'https://rickandmortyapi.com/api/character';
const cohortNumber= 5;

const ListScreen = (props) => {
  const [list, setList] = useState([])
  const [dropDown, setDropDown] = useState(false)
  const [cohorts, setCohorts] = useState([])
  const [filterList, setFilterList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    const list = await Http.instance.get(url)
    const users = list.results.map(user => {
      let userFullName = user.name.split(' ')
      return ({
        name: userFullName[0],
        lastName: userFullName[1] ? userFullName[1] : 'none',
        cohort: Math.floor(Math.random() * cohortNumber) + 1,
      })
    })
    setList(users)
    setFilterList(users)
    let cohorts = []
    for(let i=1; i <= cohortNumber; i++) {
      cohorts.push(i)
    }
    setCohorts(cohorts)
  }
  const handleSearch = (query) => {
    const filterList = list.filter(user => {
      return user.name.toLowerCase().includes(query.toLowerCase()) || 
      user.lastName.toLowerCase().includes(query.toLowerCase())
    })
    setFilterList(filterList)
  }

  return(
    <>
    <View >
      <Text>Cohorts</Text>
      <FlatList
        data={filterList}
        keyExtractor={(item) => item}
        renderItem={({item}) => <Text>{`${item.name} ${item.lastName} ${item.cohort} `}</Text>}
      />
    </View>
    <View>
      <View>
        <Pressable onPress={() => setDropDown(!dropDown)}>
          <Text>Cohorts</Text>
        </Pressable>
        {dropDown ? 
          <View>
            {cohorts.map(cohort => {
              return(
                <Pressable>
                  <Text>
                    {`Cohort ${cohort}`}
                  </Text>
                </Pressable>
              )
            })}
          </View>
          : null
        }
      </View>
      <View>
        <TextInput 
          onChangeText={handleSearch}
          placeholder='Buscar por estudiante'
        />
      </View>
    </View> 
    </>
  )
}



export default ListScreen;
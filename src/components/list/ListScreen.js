import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Http from '../../libs/http';
import Colors from '../../res/Colors';


let url = 'https://rickandmortyapi.com/api/character';
const cohortNumber= 5;

const ListScreen = (props) => {
  const [list, setList] = useState([])
  const [dropDown, setDropDown] = useState(false)
  const [cohorts, setCohorts] = useState([])
  const [filterList, setFilterList] = useState([])
  const [filter, setFilter] = useState()

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
    const orderList = users.sort((a,b) => a.cohort - b.cohort)
    setList(orderList)
    setFilterList(orderList)
    let cohorts = []
    for(let i=1; i <= cohortNumber; i++) {
      let cohortColor = `rgb(${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))})`
      cohorts.push([i, cohortColor])
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

  const handleFilter = (cohort) => {
    setDropDown(false)
    setFilter(cohort)
    if(cohort) {
      const filterList = list.filter(user => {
        return user.cohort === cohort
      })
      setFilterList(filterList)
    } else {
      setFilterList(list)
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerList}>
        <Text style={styles.listTitle}>Cohorts</Text>
        <FlatList
          style={styles.listScroll}
          data={filterList}
          keyExtractor={(item) => `${item.name} ${item.lastName} ${item.cohort}`}
          renderItem={({item}) =>{ 
            return(
              <View style={styles.listItemContainer}>
                <Text style={styles.listItemTitle}>
                  {`${item.name} ${item.lastName}`}
                </Text>
                <Text 
                  style={
                    [styles.cohortColor,  
                    { backgroundColor: cohorts.length ?
                      cohorts.filter(cohort => cohort[0] === item.cohort)[0][1] : 'white'
                    },
                    ]}
                >
                </Text>
              </View>
            )
        }}
        />
      </View>
      <View style={styles.containerFilter}>
        <View style={styles.filter}>
          <Pressable style={styles.btnFilter} onPress={() => setDropDown(!dropDown)}>
            <Text style={styles.filterText}>Cohorts</Text>
          </Pressable>
          {dropDown ? 
            <View>
              {cohorts.map(cohort => {
                return(
                  <Pressable style={[styles.btnFilter, {backgroundColor: cohort[1]}]} onPress={() => handleFilter(cohort[0])}>
                    <Text style={[styles.filterText, styles.colorWhite]}>
                      {`Cohort ${cohort[0]}`}
                    </Text>
                  </Pressable>
                )
              })}
              <Pressable style={styles.btnFilter} onPress={() => handleFilter()}>
                <Text style={styles.filterText}>
                  Clear
                </Text>
              </Pressable>
            </View>
            : null
          }
        </View>
        <View style={styles.containerSearch}>
          <TextInput 
            style={styles.search}
            onChangeText={handleSearch}
            placeholder='Buscar por estudiante'
          />
        </View>
      </View> 
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  containerList: {
    marginHorizontal: '10%',
    marginBottom: 40
  },
  listTitle: {
    fontSize: 22,
    color: Colors.font,
    marginVertical: 20
  },
  listScroll: {
    maxHeight: 300,
    minHeight: 300,
    paddingRight: 10,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  listItemTitle: {
    color: Colors.font
  },
  cohortColor: {
    width: 15,
    height: 15,
  },
  containerFilter: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  filter: {
    width: '30%',
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 10,
  },
  btnFilter: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 25
  },
  filterText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.font
  },
  colorWhite: {
    color: 'white'
  },
  containerSearch: {
    width: '50%',
    backgroundColor: 'white',
    height: 25
  },
  search: {
    width: '100%',
    height: '100%',
    padding: 0,
    paddingLeft: 10,
  }
});




export default ListScreen;
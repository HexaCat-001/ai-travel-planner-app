import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.headingbox}>
        <Text style={styles.heading}>My trips</Text>
        <AntDesign name="pluscircle" size={35} color={Colors.DARK} />
      </View>
      {/* user trips */}
      {
        userTrips?.length === 0?
        <StartNewTripCard/>
        : null
      }
    </View>
  )
}

export default MyTrip

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop:45,
    height:'100%',
    backgroundColor: Colors.LIGHT,
  },
  heading:{
    color: Colors.DARK,
    fontFamily:'comfortaa-bold',
    fontSize:35,
  },
  headingbox:{
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
})
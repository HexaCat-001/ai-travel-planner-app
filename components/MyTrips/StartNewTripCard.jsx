import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

const StartNewTripCard = () => {
    return (
        <View style={styles.container}>
            {/* icon */}
            <Entypo name="location" size={34} color={Colors.DARK}/>
            {/* heading */}
            <Text style={styles.heading}> No trips planned yet</Text>
            {/* subheading */}
            <Text style={styles.subheading}> Looks like its time to plan a new travel experience! Get Started Here...</Text>
            {/* button */}
            <TouchableOpacity style={styles.btnBox}>
                <Text style={styles.btnText}>Start A New Trip</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartNewTripCard

const styles = StyleSheet.create({
    container:{
        padding: 20,
        marginTop:50,
        flex:1,
        gap:25,
        alignItems: 'center',
    },
    heading:{
        fontSize:24,
        color: Colors.MEDIUM_DARK,
        fontFamily: 'outfit-medium',
    },
    subheading: {
        fontSize: 19,
        color: Colors.MEDIUM_LIGHT,
        fontFamily: 'outfit',
        textAlign: 'center',
    },
    btnBox:{
        padding:10,
        backgroundColor: Colors.DARK,
        borderRadius:10,
        paddingHorizontal:30,
    },
    btnText:{
        color: Colors.LIGHT,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: 'outfit-medium',
    },
})
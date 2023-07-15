import React from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import BackButtonHeader from '../../components/headers/BackButtonHeader';


const FoodSection = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    {/* <DrawerHeader navigation={navigation} title="Choose your type"  /> */}

    <Text style={{       
        marginTop: 50,
        marginLeft: 20,
        fontWeight: '500',
        fontSize: 20,
        color:"black"
}}> Cuisines for you</Text>
    </SafeAreaView>
  )
}

export default FoodSection;
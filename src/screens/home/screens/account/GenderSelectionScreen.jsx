
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '../../../../components/Colors';

export default function GenderSelectionScreen({ navigation, route }) {

  const selectedGender = route.params?.selectedGender || '';

  const handleGenderSelection = (gender) => {
    navigation.navigate('Profile', { selectedGender: gender });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.genderOption, selectedGender === 'Male' && styles.selectedOption]}
        onPress={() => handleGenderSelection('Male')}>
        
        <Text style={[styles.title, selectedGender === 'Male' && styles.selectedTitle]}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.genderOption, selectedGender === 'Female' && styles.selectedOption]}
        onPress={() => handleGenderSelection('Female')}>
        <Text style={[styles.title, selectedGender === 'Female' && styles.selectedTitle]}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.genderOption, selectedGender === 'Other' && styles.selectedOption]}
        onPress={() => handleGenderSelection('Other')}>
        <Text style={[styles.title, selectedGender === 'Other' && styles.selectedTitle]}>Other</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.genderOption, selectedGender === 'Prefer not to say' && styles.selectedOption]}
        onPress={() => handleGenderSelection('Prefer not to say')}>
        <Text style={[styles.title, selectedGender === 'Prefer not to say' && styles.selectedTitle]}>Prefer not to say</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:colors.lightgrey2,
    margin:25,
    
  },
  genderOption: {
    backgroundColor: colors.white,
    borderRadius:12,
    alignItems: 'center',
    marginBottom:12,
    paddingVertical:20,
    shadowColor: colors.darkGrey,
      shadowOffSet: {
        with:0,
        height:12,
      },
      shadowOpacity:0.58,
      shadowRadius: 16.00,
      elevation: 5,
  },
  title: {
    fontSize: 14,
    color:colors.extraDarkGrey,
    
  },
  selectedOption: {
    backgroundColor: colors.green, 
  },
  selectedTitle: {
    color: colors.white, 
  },

});

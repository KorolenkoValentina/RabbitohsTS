import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  
} from 'react-native';

import { colors } from '../../../../components/Colors';
import {ConditionsIcon, ArrowIcon, PrivacyPolicyIcon, ContactUsIcon, HelpIcon} from '../../../../components/icons/HelpSupportScreenIcons'



const HelpAndSupportScreen = () => {

  return (
     
    <View style={styles.container}>
      
      <ListItem 
        IconCard={ConditionsIcon}
        title="Terms and Conditions"
        IconArrow={ArrowIcon}
        // onPress={onPressProfile}
      />
      
      <ListItem
        IconCard={PrivacyPolicyIcon}
        title="Privacy Policy"
        IconArrow={ArrowIcon}
        // onPress={onPressPurchases}
      />
      <ListItem
        IconCard={HelpIcon}
        title="Help"
        IconArrow={ArrowIcon}
        // onPress={onPressBenefits}
      /> 
      <ListItem
        IconCard={ContactUsIcon}
        title="Contact Us"
        IconArrow={ArrowIcon}
        // onPress={onPressRegistrations}
      /> 
    </View>
    
  );
};

const ListItem = ({ IconCard, title, IconArrow, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrap} onPress={onPress}>
      <View style={styles.listItem}>
        <IconCard  color={colors.green}/>
        <Text style={styles.title}>{title}</Text>
        <IconArrow  color={colors.green}/>
      </View>
    </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  wrap:{
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:25
    
  },
  container: {
    flex:1,
    marginTop:30,   
    backgroundColor:colors.lightgrey2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius:12,
    padding: 15,
    marginBottom: 12,
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
    flex: 1,
    color:colors.black,
    marginLeft:10
  },
 
});

   
export default HelpAndSupportScreen;
import React from 'react';
import 'react-native-gesture-handler';
import {
  Image,
  TouchableOpacity
} from 'react-native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/home/screens/account/AccountScreen';
import HelpAndSupportScreen from '../screens/home/screens/account/HelpSupportScreen';
import UpdatePasswordScreen from '../screens/home/screens/account/UpdatePassword';
import ProfileScreen from '../screens/home/screens/account/ProfileScreen';
import GenderSelectionScreen from '../screens/home/screens/account/GenderSelectionScreen';
import {colors} from '../components/Colors'
import { BellIcon } from '../components/icons/NavigationScreenIcons';
import { ArrowLeftIcon } from '../components/icons/ArrowIcons';
import { useNavigation } from '@react-navigation/native';



const AccountStack =()=>{
  const navigation = useNavigation();
  const AccountStack = createNativeStackNavigator();
 
  return(
    <AccountStack.Navigator
      screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
        headerTitleStyle: {
        color: colors.black, 
        },
      headerRight: ()=>(<BellIcon/>),
      }}>

      <AccountStack.Screen
      name="Account" component={AccountScreen} 
      />
        
        
      <AccountStack.Screen 
      name="Profile" component={ProfileScreen} 
      options={() => ({
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeftIcon color={colors.black}/>
          </TouchableOpacity>
        ),      
      })}/>

      {/* <AccountStack.Screen 
      name="Purchases" component={} 
      />
      <AccountStack.Screen 
      name="My Benefits" component={} 
      />
       <AccountStack.Screen 
      name="Registrations" component={} 
      />
       
       <AccountStack.Screen 
      name="Notifications" component={} 
      /> */}
       <AccountStack.Screen 
        name="Update Password" component={UpdatePasswordScreen} 
        options={() => ({
        headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.pop()}>
              <ArrowLeftIcon color={colors.black}/>
            </TouchableOpacity>
          ),      
      })}/>
       <AccountStack.Screen 
      name="Help & Support" component={HelpAndSupportScreen} 
      options={() => ({
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeftIcon color={colors.black}/>
          </TouchableOpacity>
        ),      
      })}/>
      
      <AccountStack.Screen 
      name="Choose gender" component={GenderSelectionScreen} 
      options={() => ({
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeftIcon color={colors.black}/>
          </TouchableOpacity>
        ),      
      })}/>
       
       
    </AccountStack.Navigator>
  )
}

export default AccountStack
import React from 'react';
import 'react-native-gesture-handler';
import {
  TouchableOpacity,
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
import { NavigationRoutes, AccountScreenProps} from '../components/types/NavigationTypes';



const AccountStack: React.FC<AccountScreenProps> = () => {
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
      name={NavigationRoutes.ACCOUNT} component={AccountScreen} 
      />
        
        
      <AccountStack.Screen 
      name={NavigationRoutes.PROFILE} component={ProfileScreen} 
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={colors.black}/>
          </TouchableOpacity>
        ),
      })}
    />

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
        name={NavigationRoutes.UPDATE_PASSWORD} component={UpdatePasswordScreen} 
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon color={colors.black}/>
            </TouchableOpacity>
          ),     
      })}/>
       <AccountStack.Screen 
      name={NavigationRoutes.HELP_AND_SUPPORT} component={HelpAndSupportScreen} 
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={colors.black}/>
          </TouchableOpacity>
        ),    
      })}/>
      
      <AccountStack.Screen 
      name={NavigationRoutes.CHOOSE_GENDER} component={GenderSelectionScreen} 
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={colors.black}/>
          </TouchableOpacity>
        ),    
      })}/>
       
       
    </AccountStack.Navigator>
  )
}

export default AccountStack
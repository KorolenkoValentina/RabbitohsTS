import React from 'react';
import 'react-native-gesture-handler';
import {
  Image,
  TouchableOpacity
} from 'react-native';



import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AccountScreen from '../screens/home/screens/account/AccountScreen';
import HelpAndSupportScreen from '../screens/home/screens/account/HelpSupportScreen';
import UpdatePasswordScreen from '../screens/home/screens/account/UpdatePassword';
import ProfileScreen from '../screens/home/screens/account/ProfileScreen';
import GenderSelectionScreen from '../screens/home/screens/account/GenderSelectionScreen';
import {colors} from '../components/Colors'
import { BellIcon } from '../components/icons/NavigationScreenIcons';
import { ArrowLeftIcon } from '../components/icons/ArrowIcons';
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes, AccountStackParamList } from '../components/types';


const AccountStack: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AccountStackParamList>>();
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
        name={NavigationRoutes.UPDATE_PASSWORD} component={UpdatePasswordScreen} 
        options={() => ({
        headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.pop()}>
              <ArrowLeftIcon color={colors.black}/>
            </TouchableOpacity>
          ),      
      })}/>
       <AccountStack.Screen 
      name={NavigationRoutes.HELP_AND_SUPPORT} component={HelpAndSupportScreen} 
      options={() => ({
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeftIcon color={colors.black}/>
          </TouchableOpacity>
        ),      
      })}/>
      
      <AccountStack.Screen 
      name={NavigationRoutes.CHOOSE_GENDER} component={GenderSelectionScreen} 
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
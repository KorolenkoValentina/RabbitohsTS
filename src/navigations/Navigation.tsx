import React, { useEffect} from 'react';
import 'react-native-gesture-handler';

import {colors} from '../components/Colors'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MomentsStack from './MomentsStack';
import ProfileScreen from '../screens/home/screens/account/ProfileScreen';
import DrawLadderStack from './DrawLadderStack';
import TeamStack from './TeamStack'
import AccountStack from './AccountStack';
import SignUpScreen from '../screens/home/screens/registration/CreateAccountScreen';
import LogInScreen from '../screens/home/screens/registration/LogInScreens';
import ForrgotPasswordScreen from '../screens/home/screens/registration/ForrgotPasswordScreen';
import { NavigationRoutes } from '../components/types/NavigationTypes';
import {getSessionData} from '../utils/storage'

import {NewsIcon, MomentsIcon, DrawLadderIcon, TeamIcon, AccountIcon } from '../components/icons/NavigationScreenIcons'


const Stack = createNativeStackNavigator();



const Tab = createBottomTabNavigator();


const MyTabs = (): JSX.Element => {
  
  return (
   
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:colors.green,
      
    }}>
      <Tab.Screen 
      options={{
        tabBarIcon:NewsIcon,
      }}
      name="News" component={HomeStack} />
      <Tab.Screen
      options={{
        tabBarIcon:MomentsIcon ,
      }}
       name="Moments" component={MomentsStack}/>
      <Tab.Screen
      options={{
        
        tabBarIcon:DrawLadderIcon,
      }}
       name="Draw & Ladder" component={DrawLadderStack} />

      <Tab.Screen
      options={{
        
        tabBarIcon:TeamIcon,
      }}
       name="Team" component={TeamStack} />


      <Tab.Screen
      options={{
        
        tabBarIcon:AccountIcon,
      }}
       name="Account" component={AccountStack} />



    </Tab.Navigator>
  );
}



const  MyStack=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="NewsStack" component={MyTabs} />
      <Stack.Screen name="MomentStack" component={MomentsStack} />
      <Stack.Screen name="DrawLadderStack" component={DrawLadderStack} />
      <Stack.Screen name="TeamStack" component={TeamStack} />
      <Stack.Screen name="AccountStack" component={AccountStack} />
    </Stack.Navigator>
  
  );
};

const Navigator: React.FC<{ navigation: any }> = ({ navigation }) => {

  useEffect(() => {
    
    const checkSession = async () => {
      const sessionData = await getSessionData();
      if (sessionData && sessionData.isLoggedIn) {
        navigation.navigate(NavigationRoutes.HOME); 

      } else {
        navigation.navigate(NavigationRoutes.LOG_IN);
      }
    };
    checkSession();
  }, []);
 

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={NavigationRoutes.SIGN_UP} component={SignUpScreen} />
        <Stack.Screen name={NavigationRoutes.LOG_IN} component={LogInScreen} />
        <Stack.Screen name={NavigationRoutes.FORGOT_PASSWORD} component={ForrgotPasswordScreen} />
        <Stack.Screen name={NavigationRoutes.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={NavigationRoutes.HOME} component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;








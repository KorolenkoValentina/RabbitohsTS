import React,{useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
  
} from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import {colors} from '../../../../components/Colors';
import { NavigationRoutes } from '../../../../components/types/NavigationTypes';

export default function ForgotPasswordScreen(): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const navigation = useNavigation<NavigationProp<Record<string, object>, NavigationRoutes>>();
  
    const handleSendCode = async (): Promise<void> => {
        try {
          const response = await fetch('http://localhost:3001/send-code', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
          const data = await response.json();
          Alert.alert('Success', data.message);
        } catch (error) {
          console.error('Error sending verification code:', error);
          Alert.alert('Error', 'Failed to send verification code. Please try again later.');
        }
    };
    
    const navigateToLogIn = () => {
        navigation.navigate({name:NavigationRoutes.LOG_IN, params: {} });
    };

    // const isEmailValid = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    //   };

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
                <Image source={require('../../images/logo.png')} style={styles.logo} />
                <Text style={styles.titleHeader}> Forgot password </Text>
                <Text style={styles.subtitle}>Enter your account email and we will send you a recovery link.</Text>

                <View style={styles.emailInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    />
                </View>

            </View>  
            <TouchableOpacity style={styles.wrapButton} onPress={handleSendCode} >
              
                <Text style={styles.titleButton}>SEND </Text> 
            </TouchableOpacity>
            
            <View style={styles.wrapTitle}>
                <Text style={styles.subtitle}>I remember my password</Text>
                <TouchableOpacity>
                    <Text style={[styles.title, { textDecorationLine: 'underline' }]} onPress={navigateToLogIn }> Login</Text>
                </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        marginHorizontal:25
        
    },
  
    wrap:{
        alignItems: 'center',
  
    },
    
    logo:{
     width:100,
     height:100
    },

    titleHeader:{
        fontSize:22,
        textAlign:'center',
        marginVertical:24,
        color:colors.black
    },
    subtitle:{
        fontSize: 14,
        color:colors.extraDarkGrey,
        textAlign:'center',


    },

    input: {
        height: 55,
        borderColor: colors.darkGrey,
        borderBottomWidth:1,
        paddingLeft: 8,
        width: 327,
        color:colors.extraDarkGrey,
        marginVertical:30
    },
    emailInput:{},

    wrapTitle:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50
    
    },

    wrapButton:{
        backgroundColor: colors.green,
        borderRadius: 5,
        paddingVertical: 10,     
        
    },

    titleButton: {
        fontSize: 12,
        color: colors.white, 
        textAlign:'center'
    },

    title:{
        fontSize:14,
        color:colors.green
    },
    
})
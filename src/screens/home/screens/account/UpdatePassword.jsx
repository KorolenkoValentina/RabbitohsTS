import React,{useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity
  
} from 'react-native';

import {colors} from '../../../../components/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EyeIcon } from '../../../../components/icons/AccountScreenIcons'


export default function  UpdatePasswordScreen (){
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

   
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
      };
    
      const savePassword = async () => {
        try {
          if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
          }
          
          // Save password to AsyncStorage
          await AsyncStorage.setItem('userPassword', password);
          Alert.alert('Success', 'Password updated successfully');
          
          // Clear input fields after successful update
          setPassword('');
          setConfirmPassword('');
        } catch (error) {
          console.error('Error saving password:', error);
          Alert.alert('Error', 'Failed to update password');
        }
      };
    


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>   

                <View style={styles.passwordInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry={!showPassword}
                    onChangeText={handlePasswordChange}
                    value={password}
                    required
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                    {showPassword ? <EyeIcon/> : <EyeIcon/>}   
                    </TouchableOpacity>
                </View>

                <View style={styles.passwordInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="Confirm new password"
                    secureTextEntry={!showPassword}
                    onChangeText={handleConfirmPasswordChange}
                    value={confirmPassword}
                    required
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                    {showPassword ? <EyeIcon/> : <EyeIcon/>}   
                    </TouchableOpacity>
                </View>
                            
            </View>
            <TouchableOpacity onPress={savePassword} style={styles.button}>
                <Text style={styles.buttonText}>Update Password</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Forgot password?</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:colors.lightgrey2,
           
    },

    wrap:{
        backgroundColor: colors.white,
        borderRadius:12,
        alignItems: 'center',
        margin:25,
        paddingTop:20,
        shadowColor: colors.darkGrey,
      shadowOffSet: {
        with:0,
        height:12,
      },
      shadowOpacity:0.58,
      shadowRadius: 16.00,
      elevation: 5,

    },
    
    input: {
        height: 55,
        borderColor: colors.darkGrey,
        borderBottomWidth:1,
        paddingLeft: 8,
        paddingRight: 16,
        width: 295,
        color:colors.extraDarkGrey
    },

    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },

    title:{
        fontSize:14,
        color:colors.green,
        textDecorationLine:'underline',
        textAlign:'center'
    },
    eyeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    button: {
        width:'87%',
        backgroundColor: colors.green,
        borderRadius: 5,
        paddingVertical: 15,
        margin:25
    },
      buttonText: {
        fontSize: 12,
        color: colors.white, 
        textAlign:'center'
    },
})



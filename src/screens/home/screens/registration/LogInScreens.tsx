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

import { useNavigation , NavigationProp} from '@react-navigation/native';
import {colors} from '../../../../components/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EyeIcon } from '../../../../components/icons/AccountScreenIcons'
import {  UserData ,NavigationRoutes } from '../../../../components/types';


const LogInScreen: React.FC<{ route: any }> = ({ route }) => {
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigation = useNavigation<NavigationProp<Record<string, object>, NavigationRoutes>>();

    
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    

    const handleLogin = async (): Promise<void> => {
        try {
            const userId = await AsyncStorage.getItem(`userId_${email}`);
            if (!userId) {
             Alert.alert('User not found. Please sign up.');
                return;
            }
       
            const userData = await AsyncStorage.getItem(`userData_${email}`);
            const parsedUserData: UserData | null = JSON.parse(userData);
            console.log('User data from storage:', parsedUserData);
            if (parsedUserData.password === password) {
                Alert.alert('Successful login!');
            
                await AsyncStorage.setItem('isLoggedIn', 'true');
                await AsyncStorage.setItem('currentUser', JSON.stringify(parsedUserData));
                console.log('Logged in user:', parsedUserData.firstName); 
                navigation.navigate(NavigationRoutes.HOME);
            } else {
                Alert.alert('Incorrect password!');
            }
        } catch (error) {
            console.error('Error during login:', error);
            Alert.alert('Error during login. Please try again.');
        }
    
    };
    
    
    const navigateToSignUp = () => {
        navigation.navigate(NavigationRoutes.SIGN_UP );
    };

    const navigateToPassword = () => {
        navigation.navigate(NavigationRoutes.FORGOT_PASSWORD);
    };


    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
                <Image source={require('../../images/logo.png')} style={styles.logo} />
                <Text style={styles.titleHeader}> Login </Text>

                <View style={styles.emailInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    />
                </View>

                <View style={styles.passwordInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    onChangeText={setPassword}
                    value={password}
                    
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                        {showPassword ? <EyeIcon/> : <EyeIcon/>}                       
                    </TouchableOpacity>
                </View>
                </View>
                <TouchableOpacity onPress={navigateToPassword }>
                    <Text style={styles.title}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapButton} onPress={handleLogin} >
              
                    <Text style={styles.titleButton}>LOGIN </Text> 
                </TouchableOpacity>
            
                <View style={styles.wrapTitle}>
                    <Text>Don't have an account yet?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.title, { textDecorationLine: 'underline' }]} onPress={navigateToSignUp}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            
            
        </SafeAreaView>
    );
}

export default LogInScreen;

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

    input: {
        height: 55,
        borderColor: colors.darkGrey,
        borderBottomWidth:1,
        marginBottom: 24,
        paddingLeft: 8,
        width: 327,
        color:colors.extraDarkGrey
    },
    emailInput:{},
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    

    wrapTitle:{
        flexDirection:'row',
       justifyContent:'center',
       
    
    },

    wrapButton:{
        backgroundColor: colors.green,
        borderRadius: 5,
        paddingVertical: 10,
        marginTop:30,
        marginBottom:50
        
    },

    titleButton: {
        fontSize: 12,
        color: colors.white, 
        textAlign:'center'
    },

    title:{
        fontSize:14,
        color:colors.green,
        textAlign:'right',
        textDecorationLine:'underline'
    },
    eyeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
})
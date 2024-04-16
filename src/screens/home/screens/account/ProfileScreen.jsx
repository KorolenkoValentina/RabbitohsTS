import React,{useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking
  
} from 'react-native';

import {colors} from '../../../../components/Colors';

import { CalendarIcon, ArrowRightIcon } from '../../../../components/icons/AccountScreenIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { FacebookIcon,TikTokIcon,TwitterIcon,InstagramIcon } from '../../../../components/icons/SocialIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function  ProfileScreen ({ navigation, route }){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [gender, setGender] =  useState('')
    const [number, onChangeNumber] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [tikTok, setTikTok] = useState('');
    const [image, setImage]= useState(null)

    useEffect(() => {
        const getUserData = async () => {
        try {
        const userData = await AsyncStorage.getItem('currentUser');
          console.log('Raw userData from AsyncStorage:', userData);
          if (userData) {
            const parsedUserData = JSON.parse(userData);
            console.log('Parsed userData:', parsedUserData);
            setFirstName(parsedUserData.firstName || '');
            setLastName(parsedUserData.lastName || '');
            setEmail(parsedUserData.email || '');
            const storedBirthdate = new Date(parsedUserData.birthdate);
            setBirthdate(isNaN(storedBirthdate) ? new Date() : storedBirthdate);
            setGender(parsedUserData.gender || '');
            onChangeNumber(parsedUserData.number || '');
            setFacebook(parsedUserData.facebook || '')
            setInstagram(parsedUserData.instagram || '')
            setTikTok(parsedUserData.tikTok || '')
            setTwitter(parsedUserData.twitter || '')
            setImage(parsedUserData.image || '')

          }
        } catch (error) {
          console.error('Error retrieving data:', error);
        }
        };
        getUserData();
    }, []);
    

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
  

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthdate;
        setShowDatePicker(false);
        setBirthdate(currentDate);
    };
    

    const openGenderSelection = () => {
        navigation.navigate('Choose gender', { selectedGender: gender });
    };

    useEffect(() => {
        if (route.params?.selectedGender) {
          setGender(route.params.selectedGender);
        }
    }, [route.params?.selectedGender]);


    const handleSaveChanges = async () => {
        try {
            const userId = await AsyncStorage.getItem(`userId_${email}`); 
            const userData = await AsyncStorage.getItem(`userData_${email}`);
            const parsedUserData = JSON.parse(userData) || {};
            
            
            const updatedUserData = {
                ...parsedUserData,
                firstName,
                lastName,
                email: parsedUserData.email,
                birthdate,
                gender,
                number,
                facebook,
                twitter,
                instagram,
                tikTok,
                image,
                password:parsedUserData.password,
                userId: userId, 
            };
            await AsyncStorage.setItem(`userData_${email}`, JSON.stringify(updatedUserData));
            navigation.goBack(); 
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const openSocialLink = (link) => {
        Linking.openURL(link);
    };
    
    const truncateText = (text) => {
        if (text.length > 15) {
          return text.substring(0, 40) + '...';
        }
        return text;
    };
      
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.wrap}> 

                <TouchableOpacity style={styles.avatarContainer} onPress={selectImage}>
                  
                {image ? (
                    <Image source={{ uri: image }} style={styles.avatar} />
                    ) : (
                    <View style={styles.defaultAvatar}>
                        <Text style={styles.plus}>+</Text>
                    </View>
                    )}
                   
                </TouchableOpacity>


                <View style={styles.inputContainer}>
                    <TextInput
                    style={[styles.input,{width:139, marginRight:15}]}
                    placeholder="First Name"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    />
                    <TextInput
                    style={[styles.input,{width:139}]}
                    placeholder="Last Name"
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    />
                </View>
                <View style={styles.inputContainer}>
          
                    <TextInput
                    style={styles.input}
                    placeholder="Select Gender"
                    editable={false} 
                    value={gender}
                    />
                    <TouchableOpacity onPress={openGenderSelection}>
                        <ArrowRightIcon color={colors.green}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
          
                    <TextInput
                    style={styles.input}
                    placeholder="Date of birth"
                    editable={false} 
                    value={formatDate(birthdate)}
                    />
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <CalendarIcon color={colors.green}/>
                    </TouchableOpacity>
                    {showDatePicker && (
                    <DateTimePicker
                    value={birthdate}
                    mode="date"
                    display="spinner"
                    onChange={handleDateChange}
                    />
                    )}                    
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeNumber(text.replace(/\D/g, ''))}
                    value={number.replace(/\D/g, '')}
                    placeholder="Mobile"
                    keyboardType="numeric"
                    maxLength={12}
                    required
                    />
                </View>
            
            </View>
            <View style={styles.wrap}>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialIcon} onPress={() => openSocialLink(facebook)}>
                        <FacebookIcon/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Facebook URL"
                        onChangeText={(text) => setFacebook(text)}
                        value={truncateText(facebook)}
                    />

                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialIcon}  onPress={() => openSocialLink(instagram)}>
                        <InstagramIcon/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Instagram URL"
                        onChangeText={(text) => setInstagram(text)}
                        value={truncateText(instagram)}
                    />

                </View>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialIcon}  onPress={() => openSocialLink(tikTok)}>
                        <TikTokIcon/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="TikTok URL"
                        onChangeText={(text) => setTikTok(text)}
                        value={truncateText(tikTok)}
                    />

                </View>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialIcon} onPress={() => openSocialLink(twitter)}>
                        <TwitterIcon/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Twitter URL"
                        onChangeText={(text) => setTwitter(text)}
                        value={truncateText(twitter)}
                    />

                </View>



            </View>

            <TouchableOpacity   style={styles.wrapButton}  onPress={handleSaveChanges}>
              <Text style={styles.titleButton}>Save changes</Text> 
            </TouchableOpacity>
            </ScrollView>
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
        paddingVertical:15,
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
        paddingLeft: 8,
        paddingRight: 16,    
        color:colors.extraDarkGrey,
        fontSize:11
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor: colors.darkGrey,
        width: 295,
    },

    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
        borderBottomWidth:1,
        width: 295,
        borderColor: colors.darkGrey,
    },
    socialIcon: {
        marginRight: 10,
    },

    wrapButton:{
        width:'87%',
        backgroundColor: colors.green,
        borderRadius: 5,
        paddingVertical: 15,
        margin:25
        
    },
    titleButton: {
        fontSize: 12,
        color: colors.white, 
        textAlign:'center'
                 
    },

    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: colors.lightgrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
    },
      defaultAvatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: colors.lightgrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
      plus: {
        fontSize: 50,
        color: colors.darkGrey,
    },
   
   

   
})

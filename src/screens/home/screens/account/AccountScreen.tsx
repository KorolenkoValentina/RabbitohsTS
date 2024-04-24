import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Image,
  ScrollView
  
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { colors } from '../../../../components/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearSessionData } from '../../../../utils/storage';
import { NavigationRoutes } from '../../../../components/types/NavigationTypes';
import { ListItemProps } from '../../../../components/types/AccountTypes';
import {ArrowRightIcon,SupportIcon, PasswordIcon, NotificationsIcon, RegistrationsIcon,BenefitsIcon ,PurchasesIcon ,ProfileIcon } from '../../../../components/icons/AccountScreenIcons'

const AccountScreen : React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  

  
  useEffect(() => {
    const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('currentUser');
      console.log('Raw userData from AsyncStorage AccountScreen :', userData);

      if (userData) {
        const parsedUserData = JSON.parse(userData);
        setFirstName(parsedUserData.firstName || '');
        setLastName(parsedUserData.lastName|| '');
        setEmail(parsedUserData.email || '');
        setImage(parsedUserData.image || null);
      } 
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
    }
    getUserData();
  }, []);
  
 

  const navigation = useNavigation<NavigationProp<Record<string, object>, NavigationRoutes>>();

  const onPressProfile = () => {
    navigation.navigate({ name: NavigationRoutes.PROFILE , params: {} });
  };

  const onPressPurchases  = () => {
    navigation.navigate({ name: NavigationRoutes.PURCHASES, params: {} });
  };

  const onPressBenefits = () => {
    navigation.navigate({ name: NavigationRoutes.MY_BENEFITS, params: {} });
  };

  const onPressRegistrations = () => {
    navigation.navigate({ name: NavigationRoutes.REGISTRATIONS, params: {} } )
  };
  const onPressNotifications = () => {
    navigation.navigate({ name: NavigationRoutes.NOTIFICATIONS, params: {} })
  };
  const onPressPassword = () => {
    navigation.navigate({ name: NavigationRoutes.UPDATE_PASSWORD, params: {} })
  };


  const onPressSupport = () => {
    navigation.navigate({ name: NavigationRoutes.HELP_AND_SUPPORT , params: {} })
  };

  const onPressLogout = async ()  => {
    const userData = await AsyncStorage.getItem('currentUser');
    console.log('User data found in AsyncStorage:', userData);
    await clearSessionData()
    navigation.navigate({ name: NavigationRoutes.LOG_IN, params: {} });
  

  };

  const LogoutButton: React.FC = () => {
    const handleLogout = () => {
      setShowModal(true); 
    };
    return (
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.titleButton}>Log Out</Text>
      </TouchableOpacity>
    );
  };
  


  const LogoutModal : React.FC<{ onClose: () => void }> = ({ onClose }) => {

    const handleCancel = () => {
      onClose(); 
    };
    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={true} >
        <View style={styles.modalOverlay}>
          <SafeAreaView style={styles.modalContent}>
            <Text style={styles.titleModal}>Log Out</Text>
            <Text style={styles.subtitleModal}>Are you sure want to log out?</Text>
            <TouchableOpacity  onPress={onPressLogout} style={styles.wrapButton}  >
              <Text style={styles.titleButtonLogOut}>YES, LOG OUT</Text> 
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleCancel}>
              <Text style={[styles.titleButton,{color:colors.green}]}>Cancel</Text> 
            </TouchableOpacity>
                 
          </SafeAreaView>
        </View>
      </Modal>
    );
  }
     

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.avatarContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.avatar} />
          ) : (
            <View style={styles.defaultAvatar}>
              <Text style={styles.plus}>+</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={styles.name}>{firstName}  {lastName}</Text>
        <Text style={styles.email}>{email}</Text>


      
      <ListItem 
        IconCard={ProfileIcon}
        title="Profile"
        IconArrow={ArrowRightIcon}
        onPress={onPressProfile}
      />
      
      <ListItem
        IconCard={PurchasesIcon}
        title="Purchases"
        IconArrow={ArrowRightIcon}
        onPress={onPressPurchases}
      />
      <ListItem
        IconCard={BenefitsIcon}
        title="My Benefits"
        IconArrow={ArrowRightIcon}
        onPress={onPressBenefits}
      /> 
      <ListItem
        IconCard={RegistrationsIcon}
        title="Registrations"
        IconArrow={ArrowRightIcon}
        onPress={onPressRegistrations}
      /> 
      <ListItem
        IconCard={NotificationsIcon}
        title="Notifications"
        IconArrow={ArrowRightIcon}
        onPress={onPressNotifications}
      />
      <ListItem
        IconCard={PasswordIcon}
        title="Update Password"
        IconArrow={ArrowRightIcon}
        onPress={onPressPassword}
      />
       <ListItem
        IconCard={SupportIcon}
        title="Help & Support"
        IconArrow={ArrowRightIcon}
        onPress={onPressSupport}
      />
      <LogoutButton />
      {showModal && <LogoutModal onClose={() => setShowModal(false)} />}
      
    </View>
    </ScrollView>
  );
};

const ListItem: React.FC<ListItemProps> = ({ IconCard, title, IconArrow, onPress }) => {
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
    marginHorizontal:25,
    
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
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
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 5, 
    
  },

  title: {
    fontSize: 14,
    flex: 1,
    color:colors.black,
    marginLeft:10
  },
  titleButton:{
    color:colors.red,
    textDecorationLine:'underline',
    fontSize: 14,
    marginVertical:30
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.white, 
    paddingHorizontal: 20,
    paddingVertical:40,
    borderRadius: 10,
    width: '85%', 
    alignItems:'center'
  },
 
  wrapButton:{
    width:'100%',
    backgroundColor: colors.green,
    borderRadius: 5,
    paddingVertical: 10,
  },
  
  titleButtonLogOut: {
    fontSize: 12,
    color: colors.white, 
    textAlign:'center'
             
  },
  titleModal:{
    fontSize: 20,
    color: colors.black, 
      
  },
  subtitleModal:{
    fontSize: 14,
    color: colors.extraDarkGrey, 
    marginTop:15,
    marginBottom:30
   
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:colors.black,
  },

  email: {
    fontSize: 14,
    color: colors.extraDarkGrey, 
    marginVertical: 15,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 75,
    backgroundColor: colors.lightgrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:25
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
});

   
export default AccountScreen;
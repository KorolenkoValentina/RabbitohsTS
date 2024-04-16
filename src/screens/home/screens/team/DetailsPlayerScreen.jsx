
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ImageBackground,
  Image, 
  TouchableOpacity
  
} from 'react-native';

import { colors } from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';



const DetailsPlayerscreen = ({ route})=> {
   
  const { item } = route.params;

  const navigation = useNavigation();
  
  const onItemPress = (item) => {
    navigation.navigate('VIEW player info & Stats', { item});
  };

    const renderItem = ({item}) => {

      return (
        
        <View style={styles.item}>
          <View style={styles.wrapItem}>
            <ImageBackground source={require('../../images/teamScreen/bg-player.png')}  style={styles.background}>
              <Image source={item.image} style={styles.player}/>
            </ImageBackground>
            <View style={styles.generalInfo}>
              <View style={styles.detailInfo}>
                <View style={styles.info}>
                  <Text style={styles.title}>Date of birth</Text>
                  <Text style={styles.subtitle}>{item.dateOfBirth}</Text>                 
                </View>
                <View style={styles.info}>
                  <Text style={styles.title}>Birth place</Text>
                  <Text style={styles.subtitle}>{item.birthPlace}</Text>                 
                </View>
                <View style={styles.info}>
                  <Text style={styles.title}>Nick name</Text>
                  <Text style={styles.subtitle}>{item.nickName}</Text>                 
                </View>
                
              </View>
              <View style={styles.detailInfo}>
                <View style={styles.info}>
                  <Text style={styles.title}>Age</Text>
                  <Text style={styles.subtitle}>{item.age}</Text>                 
                </View>
                <View style={styles.info}>
                  <Text style={styles.title}>Height</Text>
                  <Text style={styles.subtitle}>{item.height}</Text>                 
                </View>
                <View style={styles.info}>
                  <Text style={styles.title}>Weight</Text>
                  <Text style={styles.subtitle}>{item.weight}</Text>                 
                </View>
                
              </View>

            </View>

          </View>
          <View style={styles.wrapInfo}>
            <View style={styles.wrapsubInfo}>
              <View style={styles.subInfo}>
                <Text style={styles.titleSubInfo}>Debut club</Text>
                <Text style={styles.subtitleSubInfo}>{item.debutClub}</Text>
              </View>

              <View style={styles.subInfo}>
                <Text style={styles.titleSubInfo}>Date</Text>
                <Text style={styles.subtitleSubInfo}>{item.date}</Text>
              </View>

            </View>
            <View style={styles.wrapsubInfo}>
              <View style={styles.subInfo}>
                <Text style={styles.titleSubInfo}>Previous club</Text>
                <Text style={styles.subtitleSubInfo}>{item.previousClub}</Text>
              </View>

              <View style={styles.subInfo}>
                <Text style={styles.titleSubInfo}>Junior club</Text>
                <Text style={styles.subtitleSubInfo}>{item.juniorClub}</Text>
              </View>

            </View>
            <View style={styles.wrapsubInfo}>
              <View style={styles.subInfo}>
                <Text style={styles.titleSubInfo}>Biography</Text>
                <Text style={styles.subtitleSubInfo}>{item.biography}</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => onItemPress(item)} activeOpacity={1} style={styles.wrapButton}>
              <Text style={styles.titleButton}>VIEW player info & Stats</Text> 
            </TouchableOpacity>
          </View>
          
             

        </View>
      )
    }



    return(

      <SafeAreaView style={styles.container}>
       <FlatList
          data={[item]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString() }
        />
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.lightgrey2,
    
      
  },
  wrapItem:{
   height:370
  },
    
  background: {
     justifyContent: 'center',
     width: '100%',
     height: 262,
     alignItems:'center',

  },

  player: {
      width: 263, 
      height: 255,
  },

  generalInfo:{
    position:'absolute',
    bottom:'0%',
    left:'7%',
    backgroundColor:colors.green,
    width:330,
    height:133,
    borderRadius:12,

  },

  detailInfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15,
    marginVertical:15

  },
  info:{
    alignItems:'center'

  },
  title:{
    fontSize:11,
    color:colors.white
  },
  subtitle:{
    fontSize:11,
    color:colors.white
  },
  wrapsubInfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:12,
    backgroundColor:colors.white,
    marginTop:16,
    shadowColor: colors.darkGrey,
      shadowOffSet: {
        with:0,
        height:12,
      },
      shadowOpacity:0.58,
      shadowRadius: 16.00,
      elevation: 5, 
  },

  wrapInfo:{
    marginHorizontal:25

  },
  subInfo:{
    padding:20
  },
  titleSubInfo:{
    fontSize:11,
    color:colors.black,
    marginBottom:6
  },
  
  subtitleSubInfo:{
    fontSize:11,
    color:colors.black

  },

  wrapButton:{
    backgroundColor: colors.green,
    borderRadius: 5,
    paddingVertical: 14,
    marginVertical:16
    
  },

  titleButton: {
    fontSize: 12,
    color: colors.white, 
    textAlign:'center'
  },


})


export default DetailsPlayerscreen ;
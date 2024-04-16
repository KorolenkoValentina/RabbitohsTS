import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView 

  
} from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../components/Colors';
import  CarouselVideoScreen from '../../components/CarouselVideo';


const MatchScreen = ({ route}) => {
  
  const { roundData, roundInfo, timeComponent  } = route.params;

  const navigation = useNavigation();
  
  const onItemPress = () => {
    navigation.navigate('Article');
  };

  const handleDetailsStats =(roundData, roundInfo, timeComponent )=>{
    navigation.navigate('Details Stats',{roundData, roundInfo, timeComponent })
  }

  const NewsSection =()=>{
    return(
      <View style={styles.newsSection}>
            <Text style={styles.titleHeader}>News</Text>
            <TouchableOpacity onPress={onItemPress} activeOpacity={1} style={styles.newsItem}>
              <View style={styles.itemContext}>
                <Text style={styles.itemSubtitle}>Pathways</Text>
                <Text style={styles.itemtitle}>Rabbitohs NRL squad for Elimination Final against Roosters</Text>
              </View>
              <Image source={require('../../images/homeScreen/news-1.png')}  style={styles.itemImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onItemPress} activeOpacity={1} style={styles.newsItem}>
              <View style={styles.itemContext}>
                <Text style={styles.itemSubtitle}>Pathways</Text>
                <Text style={styles.itemtitle}>Rabbitohs Pathways Endure Tough</Text>
              </View>
              <Image source={require('../../images/homeScreen/news-2.png')}  style={styles.itemImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onItemPress} activeOpacity={1} style={styles.newsItem}>
              <View style={styles.itemContext}>
                <Text style={styles.itemSubtitle}>Pathways</Text>
                <Text style={styles.itemtitle}>Rabbitohs Pathways Endure Tough</Text>
              </View>
              <Image source={require('../../images/homeScreen/news-3.png')}  style={styles.itemImage}/>
            </TouchableOpacity>
          </View>
    )
  }
  
  const renderItem =()=>{
    return (
      
      <View style={styles.item}>
        <View style={styles.wrapItem}>
          <ImageBackground source={require('../../images/teamScreen/bgGreen.png')}  style={styles.background}>
            <Image source={require('../../images/teamScreen/logo.png')}  style={styles.logo}/>
            <Text style={styles.titleData}>{roundInfo}</Text>
          </ImageBackground>
           <View style={styles.generalInfo}>
            <View style={styles.wrapCommands}>
            <View style={styles.wrapCommand}>
              <Image source={roundData.teams[0].image} style={styles.image} />
              <Text style={[styles.subtitle, {color:colors.black}]}>{roundData.teams[0].title}</Text>

              
            </View>
            {roundData.teams[0].goals && <Text style={styles.title}>{roundData.teams[0].goals}</Text>}
            {timeComponent}
            {roundData.teams[1].goals && <Text style={styles.title}>{roundData.teams[1].goals}</Text>}
              <View style={styles.wrapCommand}>
                <Image source={roundData.teams[1].image} style={styles.image} />
                <Text style={[styles.subtitle, {color:colors.black}]}>{roundData.teams[1].title}</Text>
              </View>

          </View>
          <Image source={require('../../images/teamScreen/linehorisontal.png')} style={{ alignSelf:'center'}}/>
          <View style={styles.wrapLocation}>
            <Image source={require('../../images/location.png')}/>           
            <Text style={styles.subtitle}>{roundData.location}</Text> 
          </View>
          
            <View style={styles.wrapCommands}>
              <Image source={require('../../images/commands/kayo-sports.png')}/>
              <Image source={require('../../images/commands/foxtel.png')}/>
              <Image source={require('../../images/commands/g9.png')}/>
            </View>
            <TouchableOpacity style={styles.wrapButton} onPress={() => handleDetailsStats(roundData, roundInfo, timeComponent)}>
              <Text style={styles.titleButton}>VIEW DETAIL STATS</Text> 
            </TouchableOpacity>
            </View>
        </View>

      </View>
    )
  }

  return(

    <SafeAreaView style={styles.container}>
      <ScrollView>{renderItem()}
        <View style={styles.info}>
          <Text style={styles.titleHeader}>Watch</Text>
          <CarouselVideoScreen/>
          <NewsSection/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  }, 
  wrapItem:{
    height:370
   },
     
  background: {
    justifyContent: 'space-evenly',
    height: 262,
    alignItems:'center',
 
  },

  titleData:{
    color:colors.white,
    fontSize:11,
    top:'-17%'
    
  },
  generalInfo:{
    position:'absolute',
    top:'48%',
    left:'7%',
    backgroundColor:colors.white,
    width:330,
    borderRadius:12,
    shadowColor: colors.darkGrey,
    shadowOffSet: {
      with:0,
      height:12,
    },
    shadowOpacity:0.58,
    shadowRadius: 16.00,
    elevation: 5, 

  },

  wrapCommands:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginVertical:15
  },
  image:{
    height:40,
    width:40

  },
  title: {
    color:colors.black,
    fontSize:14,
  },
  subtitle:{
    color:colors.extraDarkGrey,
    fontSize:11,
    
  },

  wrapLocation:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:10
    
  },

  wrapButton:{
    backgroundColor: colors.green,
    borderRadius: 3,
    paddingVertical: 10,
    margin:20 
    
  },

  titleButton: {
    fontSize: 12,
    color: colors.white, 
    textAlign:'center'
  },
  titleHeader:{
    fontSize: 22,
    color: colors.black, 

  },
  newsItem:{
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
    padding:6,

  },


  itemImage:{
    width:120,
    height:120
  },
  itemContext:{
    width:150,
    margin:10
  },

  itemSubtitle:{
    fontSize:11,
    color:colors.green
  },
  itemtitle:{
    fontSize:14,
    color:colors.black,
    marginVertical:10
  },
  info:{
    marginTop:90,
    marginHorizontal:25,
    marginBottom:25
  }

  
})

   
export default MatchScreen ;
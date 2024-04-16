import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import { colors } from '../../../components/Colors';
import  CarouselVideoScreen from '../components/CarouselVideo';
import  CarouselScreen from '../components/Carousel';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigationRoutes } from '../../../components/types';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<Record<string, object>, NavigationRoutes>>();
  
  const onItemPress = () => {
    navigation.navigate(NavigationRoutes.ARTICLE);
  };

  const renderItem  = ()=>{
    return (
      <View style={styles.container}>
        <CarouselScreen/>
        <View style={styles.mainSection}>
          
          <CarouselVideoScreen/>
          <View>
            <Text style={styles.title}>Latest news</Text>
            <TouchableOpacity onPress={onItemPress} activeOpacity={1} style={styles.newsItem}>
              <View style={styles.itemContext}>
                <Text style={styles.itemSubtitle}>Pathways</Text>
                <Text style={styles.itemtitle}>Rabbitohs NRL squad for Elimination Final against Roosters</Text>
              </View>
              <Image source={require('../images/homeScreen/news-1.png')}  style={styles.itemImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onItemPress} activeOpacity={1}style={styles.newsItem}>
              <View style={styles.itemContext}>
                <Text style={styles.itemSubtitle}>Pathways</Text>
                <Text style={styles.itemtitle}>Rabbitohs Pathways Endure Tough</Text>
              </View>
              <Image source={require('../images/homeScreen/news-2.png')}  style={styles.itemImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onItemPress} activeOpacity={1} style={styles.newsItem}>
              <View style={styles.itemContext}>
                <Text style={styles.itemSubtitle}>Pathways</Text>
                <Text style={styles.itemtitle}>Rabbitohs Pathways Endure Tough</Text>
              </View>
              <Image source={require('../images/homeScreen/news-3.png')}  style={styles.itemImage}/>
            </TouchableOpacity>
          </View>

          <View style={styles.discoverSection}>
            <Text style={styles.title}>Discover</Text>
            <View style={styles.discoverContent}>
            <View style={styles.discoverItem}>             
              <Image source={require('../images/homeScreen/news-1.png')}  style={styles.itemImage2}/>
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}>             
              <Image source={require('../images/homeScreen/news-2.png')}  style={styles.itemImage2}/>
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}>             
              <Image source={require('../images/homeScreen/news-3.png')}  style={styles.itemImage2}/>
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}>             
              <Image source={require('../images/homeScreen/news-1.png')}  style={styles.itemImage2}/>
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}>             
              <Image source={require('../images/homeScreen/news-2.png')}  style={styles.itemImage2}/>
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}>             
              <Image source={require('../images/homeScreen/news-3.png')}  style={styles.itemImage2}/>
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            </View>
          </View>




        </View>
       
              
      </View>
    );
  }

  return(

    <SafeAreaView style={styles.container}>
     <ScrollView>{renderItem()}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:colors.lightgrey2,
  }, 

  mainSection:{
    marginHorizontal:25,
  },

  title:{
    fontSize:22,
    color:colors.black,
    marginTop:24,
  },
  newsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    backgroundColor: colors.white,
    marginTop: 16,
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 5, 
    padding: 6,
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
  discoverContent:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    marginTop:16,
  },
  itemImage2:{
    width:155,
    height:155
  },
  discoverItem:{

  },
  discoverSection:{

  }
   

  
})

   
export default HomeScreen ;
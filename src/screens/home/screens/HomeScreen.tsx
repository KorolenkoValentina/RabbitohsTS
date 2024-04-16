import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
 
  TouchableOpacity
} from 'react-native';

import { colors } from '../../../components/Colors';
import  CarouselVideoScreen from '../components/CarouselVideo';
import  CarouselScreen from '../components/Carousel';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigationRoutes } from '../../../components/types';
import News from '../../../screens/home/images/homeScreen/news-1.svg'
import News2 from '../../../screens/home/images/homeScreen/news-2.svg'
import News3 from '../../../screens/home/images/homeScreen/news-3.svg'


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
              <News/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onItemPress} activeOpacity={1}style={styles.newsItem}>
              <View style={styles.itemContext}>
                <Text style={styles.itemSubtitle}>Pathways</Text>
                <Text style={styles.itemtitle}>Rabbitohs Pathways Endure Tough</Text>
              </View>
              <News2/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onItemPress} activeOpacity={1} style={styles.newsItem}>
              <View style={styles.itemContext}>
                <Text style={styles.itemSubtitle}>Pathways</Text>
                <Text style={styles.itemtitle}>Rabbitohs Pathways Endure Tough</Text>
              </View>
              <News3/>
            </TouchableOpacity>
          </View>

          <View style={styles.discoverSection}>
            <Text style={styles.title}>Discover</Text>
            <View style={styles.discoverContent}>
            <View style={styles.discoverItem}>   
              <News   width={155} height={155} />
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}> 
              <News2 width={155} height={155}/>            
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}>  
              <News3 width={155} height={155}/>           
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}> 
              <News width={155} height={155}/>            
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}>             
              <News2 width={155} height={155}/> 
              <Text style={styles.itemtitle}>Game Day Hub</Text>             
            </View>
            <View style={styles.discoverItem}>             
              <News3 width={155} height={155}/> 
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
 
  discoverItem:{

  },
  discoverSection:{

  }
   

  
})

   
export default HomeScreen ;
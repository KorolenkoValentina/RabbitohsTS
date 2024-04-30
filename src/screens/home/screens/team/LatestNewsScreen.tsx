import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
 
  TouchableOpacity
} from 'react-native';

import { colors } from '../../../../components/Colors';
import CarouselVideoScreen from '../../components/CarouselVideo';

import News from '../../../../screens/home/images/homeScreen/news-1.svg'
import News2 from '../../../../screens/home/images/homeScreen/news-2.svg'
import News3 from '../../../../screens/home/images/homeScreen/news-3.svg'
import { NavigationRoutes } from '../../../../components/types/NavigationTypes'
import Switcher from '../../components/Switcher';
import { LatestNewsScreenRouteProps } from '../../../../components/types/NavigationTypes';
import { PlayerItem } from '../../../../components/types/types';


const LatestNewsScreen : React.FC<LatestNewsScreenRouteProps> = ({ route, navigation }) => {

  const [selectedSection, setSelectedSection]  = useState<string>('Latest news');


    const { item } = route.params as { item: PlayerItem };
 

    const onItemPress = () => {
      navigation.navigate({ name: NavigationRoutes.ARTICLE, params: {} });
  
    };
  
    const renderItem = (): JSX.Element => {
      return (
        <View style={styles.container}>
          <View style={styles.mainSection}>
            
            <CarouselVideoScreen/>
        
            <View>
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
   
          </View>
         
                
        </View>
      );
    }


    return(

    <View style={styles.container}>
     
      <Switcher
              sections={['Season stats', 'Latest news']}
              activeSection={selectedSection}
              onSectionChange={(section: string) => {
                  setSelectedSection(section);
                  if (section === 'Season stats') {
                  navigation.navigate({name:NavigationRoutes.VIEW, params:{item, activeSection:'Season stats'}});
                } 
              }}
          />
 
      <ScrollView>{renderItem()}</ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:colors.lightgrey2,
    
  }, 

  mainSection:{
    
    margin:25
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

 
   

  
})
export default LatestNewsScreen
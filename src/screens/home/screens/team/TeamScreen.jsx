import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  SectionList,
  TouchableOpacity,
  StatusBar
  
} from 'react-native';

import {mockBacksData, mockForwardData} from '../../components/MockData'
import { colors } from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';


const PlayerList = ({ data, item, index,}) => {

  const navigation = useNavigation();
  
  const onItemPress = (item) => {
    navigation.navigate('Details Player', { item });
  };
  return (
    <TouchableOpacity onPress={() => onItemPress(item)} activeOpacity={1}>
    <View style={styles.wrapItem}>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImageBackground
          source={require('../../images/teamScreen/bgList.png')} 
            style={styles.background}
            >
          
            <View style={styles.wrapContent}>
              <Text style={styles.titleContent}>{item.fullName}</Text>
              <Text style={styles.subtitleContent}>{item.type}</Text>
            
            <Image source={item.image} style={styles.player}/>
          </View>
          </ImageBackground>
        )}
      />
    </View>
    </TouchableOpacity>
  );
};

const TeamScreen = () => {
  const sections = [
    { title: "Backs", data: mockBacksData },
    { title: "Forwards", data: mockForwardData }
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        renderItem={({ item }) => (
          <PlayerList data={[item]} title={item.type} item={item}/>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight || 0,

  }, 
  wrapItem: {
    marginBottom: 20,
    alignItems: 'center', 
    flex: 1, 
  },

 

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:colors.black,
    marginLeft:28,
    
  },

  background: {
    justifyContent: 'center',
    width: 327,
    height: 100,
    marginTop: 24,
    
  },

  wrapContent:{
    marginLeft:20
  },

  titleContent:{
    fontSize: 16,
    color:colors.white,
    marginBottom:5
  },

  subtitleContent:{
    fontSize: 14,
    color:colors.white,
  },


  player: {
    position: 'absolute',
    right: 10,
    bottom: -27,
    width: 117, 
    height: 116, 
    resizeMode:"contain" 
  },

  
})

   
export default TeamScreen ;
import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList
   
} from 'react-native';
import Switcher from '../../components/Switcher';
import YearModal from '../../components/YearModal';
import {mockBacksYears} from '../../components/MockCommandsData'
import { colors } from '../../../../components/Colors';
import { useNavigation , NavigationProp} from '@react-navigation/native';
import {ArrowUpIcon , ArrowDownIcon } from '../../../../components/icons/ArrowIcons' 
import { NavigationRoutes } from '../../../../components/types/NavigationTypes';
import { RoundData } from '../../../../components/types/DrawLadderTypes';
import Kayo from '../../images/commands/kayo-sports.svg'
import Nine from '../../images/commands/nine.svg'
import Foxtel from '../../images/commands/foxtel.svg'
import Location from '../../images/location.svg'


const DrawLadderScreen : React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [selectedSection, setSelectedSection] = useState<string>('Draw');

  const navigation = useNavigation<NavigationProp<Record<string, object>, NavigationRoutes>>();

  const handleMatch = (roundData: RoundData, roundInfo: string, timeComponent: JSX.Element) => {
    navigation.navigate(NavigationRoutes.MATCH, { roundData, roundInfo, timeComponent });
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderItem = ({ item }: { item: string}) => {
    const yearData = mockBacksYears.find(data => data.year === selectedYear);
    if (!yearData) return null;

    const roundData = yearData.rounds[item];
    if (!roundData) return null;

    const roundInfo = `${item} - ${roundData.data}`;

    let timeComponent: JSX.Element;
    if (typeof roundData.time === 'string') {
      timeComponent = <Text>{roundData.time}</Text>; 
    } else  {
      timeComponent = <Text style={{color:colors.white, fontSize:11,backgroundColor:colors.red, borderRadius:8, padding:6}}>Full time</Text>; 
    }

    return (
      <View style={styles.item}>
        
        <View style={styles.wrapItem}>                   
          <Text style={styles.title}>{roundInfo}</Text>
          <View style={styles.wrapLocation}>
            <Location/>         
            <Text style={styles.subtitle}>{roundData.location}</Text> 
          </View> 
          <Image source={require('../../images/teamScreen/linehorisontal.png')} style={{ alignSelf:'center'}}/>
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
            <View style={styles.wrapCommands}>
              <Kayo/>
              <Foxtel/>
              <Nine/>
            </View>
            <TouchableOpacity style={styles.wrapButton} onPress={() => handleMatch(roundData, roundInfo, timeComponent)}>
              <Text style={styles.titleButton}>MATCH CENTRE</Text> 
            </TouchableOpacity>  
                   
        </View> 
                           
         

      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Switcher
      sections={['Draw', 'Ladder']}
      activeSection={selectedSection}
      onSectionChange={(section: string) => {
        if (section === 'Ladder') {
            setSelectedSection('Ladder');
            navigation.navigate(NavigationRoutes.LADDER, { mockBacksYears});
        } 
      }}
    />
    

      <View style={styles.wrap}>
          <Text style={styles.title}>{selectedYear}</Text>

          <TouchableOpacity onPress={toggleMenu}>
            {isMenuOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </TouchableOpacity>
        </View>
        <YearModal
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      <FlatList
        data={Object.keys(mockBacksYears.find(data => data.year === selectedYear)?.rounds || {})}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey2,
  },

  item:{
    marginHorizontal:25,
  },
  wrapCommand:{},
  wrapItem:{
    backgroundColor:colors.white,
    borderRadius:12,
    marginBottom:16,
    padding:10,
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
    color:colors.black,
    fontSize:14,
  },
  subtitle:{
    color:colors.extraDarkGrey,
    fontSize:11,
    
  },
  wrapLocation:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginVertical:10
    
  },
  wrapCommands:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginVertical:20
  },
  image:{
    height:40,
    width:40

  },

  wrap:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center', 
    backgroundColor:colors.white,
    borderRadius:8,
    marginVertical:16,
    marginHorizontal:25,
    padding:10,
  
  },
  wrapButton:{
    borderColor: colors.red,
    borderWidth:1,
    borderRadius: 3,
    paddingVertical: 10, 
    
  },

  titleButton: {
    fontSize: 11,
    color: colors.red, 
    textAlign:'center'
  },
  
});

export default DrawLadderScreen;

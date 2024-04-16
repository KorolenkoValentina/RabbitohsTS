import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground
   
} from 'react-native';
import Switcher from '../../components/Switcher';
import YearModal from '../../components/YearModal';
import RoundModal from '../../components/RoundModal';
import { colors } from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';
import {ArrowUpIcon , ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '../../../../components/icons/ArrowIcons' 



const LadderScreen = ({ route}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoundMenuOpen, setIsRoundMenuOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedRound, setSelectedRound] = useState('Round 1');
  const [selectedSection, setSelectedSection] = useState('Ladder');
  

  const { mockBacksYears } = route.params;

  const navigation = useNavigation();

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleRoundMenu = () => {
    setIsRoundMenuOpen(!isRoundMenuOpen);
  };


  const selectPrevRound = () => {
    // Отримати список раундів
    const rounds = Object.keys(mockBacksYears.find(data => data.year === selectedYear)?.rounds || {});
    // Знайти індекс поточного раунду
    const currentIndex = rounds.findIndex(round => round === selectedRound);
    // Вибрати попередній раунд
    if (currentIndex > 0) {
      setSelectedRound(rounds[currentIndex - 1]);
    }
  };

  const selectNextRound = () => {
    // Отримати список раундів
    const rounds = Object.keys(mockBacksYears.find(data => data.year === selectedYear)?.rounds || {});
    // Знайти індекс поточного раунду
    const currentIndex = rounds.findIndex(round => round === selectedRound);
    // Вибрати наступний раунд
    if (currentIndex < rounds.length - 1) {
      setSelectedRound(rounds[currentIndex + 1]);
    }
  };

  const yearData = mockBacksYears.find(data => data.year === selectedYear);
  if (!yearData) return null;

  const roundData = yearData.rounds[selectedRound];
  if (!roundData) return null;

  const Header =()=>{
    return(
      <View >
      <ImageBackground source={require('../../images/teamScreen/general.png')}  style={styles.background}>
        <Text style={styles.headerData}>{roundData.data}</Text>
      </ImageBackground>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pos</Text>
        <Text style={styles.headerTitle}>Tem</Text>
        <Image source={require('../../images/teamScreen/line.png')} style={{marginLeft:52}}/>
        <Text style={styles.headerTitle}>P</Text>
        <Text style={styles.headerTitle}>W</Text>
        <Text style={styles.headerTitle}>D</Text>
        <Text style={styles.headerTitle}>L</Text>
        <Text style={styles.headerTitle}>B</Text>
        <Text style={styles.headerTitle}>PD</Text>
        <Text style={styles.headerTitle}>Pts</Text>

      </View>
    </View>
    )

  }

  const renderItem = ({ item, index }) => {
    return(
      
      <View >
        <View style={styles.item}>
          <Text style={styles.teamNumber}>{index + 1}</Text>
          <View style={styles.team}>
            <Image source={item.image} style={styles.teamImage} />
      
            <Text style={styles.teamTitle}>{item.title}</Text>
          </View>
          <Image source={require('../../images/teamScreen/line.png')} />
         
          
          <Text style={styles.teamInfo}> {item.p}</Text>
          <Text style={styles.teamInfo}>{item.w}</Text>
          <Text style={styles.teamInfo}>{item.d}</Text>
          <Text style={styles.teamInfo}>{item.l}</Text>
          <Text style={styles.teamInfo}>{item.b}</Text>
          <Text style={styles.teamInfo}>{item.pd}</Text>
          <Text style={[styles.teamInfo, {fontWeight: 'bold'}]}>{item.pts}</Text>
      
        </View>
        <Image  source={require('../../images/teamScreen/linehorisontal.png')}/> 
      </View>
      
      
    );
  }
  
    
  
 
  return (
    <SafeAreaView style={styles.container}>
      <View>
      
      <Switcher
      sections={['Draw', 'Ladder']}
      activeSection={selectedSection}
      onSectionChange={(section) => {
        if (section === 'Draw') {
            setSelectedSection('Draw');
            navigation.navigate('DrawLadder');
        } 
      }}
      />
      

        <View style={styles.wrap}>
          <View style={styles.wrapModal}>
            <Text style={styles.title}>{selectedYear}</Text>
            <TouchableOpacity onPress={toggleMenu}>
            {isMenuOpen ? <ArrowUpIcon style={styles.arrowIcon} /> : <ArrowDownIcon style={styles.arrowIcon} />}
            </TouchableOpacity>
          </View>
        
          <YearModal
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          />
          <View style={styles.wrapModal}>
            <TouchableOpacity onPress={selectPrevRound}>
              <ArrowLeftIcon color={colors.green}/>
            </TouchableOpacity>
            <Image source={require('../../images/teamScreen/line.png')} />
            <TouchableOpacity onPress={toggleRoundMenu}>
              <Text style={styles.title}>{selectedRound}</Text>
            </TouchableOpacity>
            <Image source={require('../../images/teamScreen/line.png')} />
            <TouchableOpacity onPress={selectNextRound}>
             <ArrowRightIcon/>
            </TouchableOpacity>
          </View>
          <RoundModal
          isRoundMenuOpen={isRoundMenuOpen}
          toggleRoundMenu={toggleRoundMenu}
          selectedRound={selectedRound}
          setSelectedRound={setSelectedRound}
          />
        </View>
        <Header/>
      </View>  
      <FlatList
        data={roundData.teams}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}  
      />   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey2,
  },

  item:{
    backgroundColor:colors.white,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },


  title: {
    color:colors.black,
    fontSize:14,
    marginHorizontal:30
  },
  subtitle:{
    color:colors.extraDarkGrey,
    fontSize:11,
    
  },
 

  image:{
    height:40,
    width:40

  },

  wrapModal:{
    flexDirection:'row',
    alignItems: 'center', 
    backgroundColor:colors.white,
    borderRadius:8,
    padding:5,
  
  },
  wrap:{
    
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:16,
    marginHorizontal:25

  },
  background: {
    height:100,
    justifyContent: 'center',
    width: '100%',
    alignItems:'center',

  },
  header:{
    backgroundColor:colors.lightgrey2,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  headerTitle:{
    fontSize: 11,
    color:colors.extraDarkGrey,

  },

  headerData:{
    marginRight:52,
    color:colors.white,
    fontSize:22
  },



  team:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:80
  },

  teamImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  teamTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color:colors.black,
    
  },

  teamInfo: {
    fontSize: 11,
    color:colors.black,
  },

  


  
});

export default LadderScreen;

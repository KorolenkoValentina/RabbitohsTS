import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image, 
  ScrollView
   
} from 'react-native';
import Switcher from '../../components/Switcher';
import { colors } from '../../../../components/Colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigationRoutes} from '../../../../components/types/NavigationTypes';

import { PlayerStatsScreenProps, Section , Player } from '../../../../components/types/DrawLadderTypes';


const PayerStatsScreen: React.FC<PlayerStatsScreenProps> = ({ route }) => {
  const [activeSection, setActiveSection] = useState('Player Stats')

  const navigation = useNavigation<NavigationProp<Record<string, object>, NavigationRoutes>>();
  const { roundData, timeComponent } = route!.params;
  
  const { teams } = roundData || { teams: [] };
  const team1 = teams[0];
  const team2 = teams[1];
  


  // Функція для знаходження гравця з найбільшим показником певного параметра
  const findPlayerWithMaxStat = (players: Player[], stat: keyof Player): Player | null => {
    let maxPlayer: Player | null = null;
    let maxValue = 0;

    players.forEach(player => {
    if (player[stat] > maxValue) {
      maxPlayer = player;
      maxValue = player[stat];
    }
    });

    return maxPlayer;
  };


  // Обчислення та оновлення даних при завантаженні компонента
  
  const maxTacklesBacksTeam1 = findPlayerWithMaxStat(team1.players?.backs || [], 'tackles');
  const maxTacklesForwardsTeam1 = findPlayerWithMaxStat(team1.players?.forwards || [], 'tackles');
  
  const maxTacklesTeam1 = maxTacklesBacksTeam1 && maxTacklesForwardsTeam1
  ? (maxTacklesBacksTeam1.tackles || 0) > (maxTacklesForwardsTeam1.tackles || 0)
    ? maxTacklesBacksTeam1
    : maxTacklesForwardsTeam1
  : null;

  const maxTacklesBacksTeam2 = findPlayerWithMaxStat(team2.players?.backs || [], 'tackles');
  const maxTacklesForwardsTeam2 = findPlayerWithMaxStat(team2.players?.forwards || [], 'tackles');
  const maxTacklesTeam2 = maxTacklesBacksTeam2 && maxTacklesForwardsTeam2
    ? (maxTacklesBacksTeam2.tackles || 0) > (maxTacklesForwardsTeam2.tackles || 0)
      ? maxTacklesBacksTeam2
      : maxTacklesForwardsTeam2
    : null;


  const maxRunMetresBacksTeam1 = findPlayerWithMaxStat(team1.players?.backs || [], 'runMetres');
  const maxRunMetresForwardsTeam1 = findPlayerWithMaxStat(team1.players?.forwards || [], 'runMetres');
  const maxRunMetresTeam1 = maxRunMetresBacksTeam1 && maxRunMetresForwardsTeam1
  ? (maxRunMetresBacksTeam1.runMetres || 0) > (maxRunMetresForwardsTeam1.runMetres || 0)
    ? maxRunMetresBacksTeam1
    : maxRunMetresForwardsTeam1
  : null;

  const maxRunMetresBacksTeam2 = findPlayerWithMaxStat(team2.players?.backs || [], 'runMetres');
  const maxRunMetresForwardsTeam2 = findPlayerWithMaxStat(team2.players?.forwards || [], 'runMetres');
  const maxRunMetresTeam2 = maxRunMetresBacksTeam2 && maxRunMetresForwardsTeam2
    ? (maxRunMetresBacksTeam2.runMetres || 0) > (maxRunMetresForwardsTeam2.runMetres || 0)
      ? maxRunMetresBacksTeam2
      : maxRunMetresForwardsTeam2
  : null;
  

  const maxLineBreaksBacksTeam1 = findPlayerWithMaxStat(team1.players?.backs || [], 'lineBreaks');
  const maxLineBreaksForwardsTeam1 = findPlayerWithMaxStat(team1.players?.forwards || [], 'lineBreaks');
  const maxLineBreaksTeam1 = maxLineBreaksBacksTeam1 && maxLineBreaksForwardsTeam1
    ? (maxLineBreaksBacksTeam1.lineBreaks || 0) > (maxLineBreaksForwardsTeam1.lineBreaks || 0)
      ? maxLineBreaksBacksTeam1
      : maxLineBreaksForwardsTeam1
  : null;

  const maxLineBreaksBacksTeam2 = findPlayerWithMaxStat(team2.players?.backs || [], 'lineBreaks');
  const maxLineBreaksForwardsTeam2 = findPlayerWithMaxStat(team2.players?.forwards || [], 'lineBreaks');
  const maxLineBreaksTeam2 = maxLineBreaksBacksTeam2 && maxLineBreaksForwardsTeam2
    ? (maxLineBreaksBacksTeam2.lineBreaks || 0) > (maxLineBreaksForwardsTeam2.lineBreaks || 0)
      ? maxLineBreaksBacksTeam2
      : maxLineBreaksForwardsTeam2
  : null;

  const maxFantasyPointsBacksTeam1 = findPlayerWithMaxStat(team1.players?.backs || [], 'fantasyPoints');
  const maxFantasyPointsForwardsTeam1 = findPlayerWithMaxStat(team1.players?.forwards || [], 'fantasyPoints');
  const maxFantasyPointsTeam1 = maxFantasyPointsBacksTeam1 && maxFantasyPointsForwardsTeam1
    ? (maxFantasyPointsBacksTeam1.fantasyPoints || 0) > (maxFantasyPointsForwardsTeam1.fantasyPoints || 0)
      ? maxFantasyPointsBacksTeam1
      : maxFantasyPointsForwardsTeam1
  : null;

  const maxFantasyPointsBacksTeam2 = findPlayerWithMaxStat(team2.players?.backs || [], 'fantasyPoints');
  const maxFantasyPointsForwardsTeam2 = findPlayerWithMaxStat(team2.players?.forwards || [], 'fantasyPoints');
  const maxFantasyPointsTeam2 = maxFantasyPointsBacksTeam2 && maxFantasyPointsForwardsTeam2
    ? (maxFantasyPointsBacksTeam2.fantasyPoints || 0) > (maxFantasyPointsForwardsTeam2.fantasyPoints || 0)
      ? maxFantasyPointsBacksTeam2
      : maxFantasyPointsForwardsTeam2
  : null;
  
  const PlayerItem: React.FC = () => {
    return (
      <View>
        <Text style={{fontSize:20,marginLeft:25,marginBottom:25}}>Top Performers</Text>
        <Text style={styles.title}>MOST TACKLES</Text>
        <View style={styles.wrapItem}>
        
          <View style={[styles.itemfLeft,{backgroundColor:team1.color }]}>
          {maxTacklesTeam1 && (
            <>
            <Image source={maxTacklesTeam1.imageTeam} style={styles.player1}/>
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxTacklesTeam1.fullName}</Text>
              <Text style={styles.subtitle}>{maxTacklesTeam1.tackles}</Text>
            </View> 
            </>
          )}
           </View>
          <View style={[styles.itemfRight,{backgroundColor:team2.color }]}> 
          {maxTacklesTeam2 && (
            <>
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxTacklesTeam2.fullName}</Text>
              <Text style={styles.subtitle}>{maxTacklesTeam2.tackles}</Text>
            </View>
            <Image source={maxTacklesTeam2.imageTeam} style={styles.player2}/>
            </>
          )}
          </View>
          
        </View>
        <Text style={styles.title}>MOST RUN METRES</Text>
        <View style={styles.wrapItem}>
      
          <View style={[styles.itemfLeft,{backgroundColor:team1.color }]}> 
            {maxRunMetresTeam1 && (
            <>
              <Image source={maxRunMetresTeam1.imageTeam} style={styles.player1}/>
              <View style={styles.textContent}>
                <Text style={styles.titleItem}>{ maxRunMetresTeam1.fullName}</Text>
                <Text style={styles.subtitle}>{maxRunMetresTeam1.fantasyPoints}</Text>
              </View>
            </>
          )}
          </View>
          <View style={[styles.itemfRight,{backgroundColor:team2.color }]}> 
            {maxRunMetresTeam2 && (
            <>
              <View style={styles.textContent}>
                <Text style={styles.titleItem}>{ maxRunMetresTeam2.fullName}</Text>
                <Text style={styles.subtitle}>{maxRunMetresTeam2.fantasyPoints}</Text>
              </View>
              <Image source={maxRunMetresTeam2.imageTeam} style={styles.player2}/>
            </>
            )}
          </View>
        </View>
        <Text style={styles.title}>MOST LINE BREAKS</Text>
        <View style={styles.wrapItem}>
      
          <View style={[styles.itemfLeft,{backgroundColor:team1.color }]}> 
            {maxLineBreaksTeam1 && (
            <>
              <Image source={maxLineBreaksTeam1.imageTeam} style={styles.player1}/>
                <View style={styles.textContent}>
                  <Text style={styles.titleItem}>{ maxLineBreaksTeam1.fullName}</Text>
                  <Text style={styles.subtitle}>{maxLineBreaksTeam1.lineBreaks}</Text>
                </View>
            </>
            )}
          </View>
          <View style={[styles.itemfRight,{backgroundColor:team2.color }]}> 
            {maxLineBreaksTeam2 && (
            <>
              <View style={styles.textContent}>
                <Text style={styles.titleItem}>{ maxLineBreaksTeam2.fullName}</Text>
                <Text style={styles.subtitle}>{maxLineBreaksTeam2.lineBreaks}</Text>
              </View>
              <Image source={maxLineBreaksTeam2.imageTeam} style={styles.player2}/>
            </>
            )}
          </View>
        </View>
        <Text style={styles.title}>MOST FANTASY POINTS</Text>
        <View style={styles.wrapItem}>
      
          <View style={[styles.itemfLeft,{backgroundColor:team1.color }]}> 
            {maxFantasyPointsTeam1  && (
            <>
            <Image source={maxFantasyPointsTeam1.imageTeam} style={styles.player1}/>
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{ maxFantasyPointsTeam1.fullName}</Text>
              <Text style={styles.subtitle}>{maxFantasyPointsTeam1.fantasyPoints}</Text>
            </View>
            </>
            )}
          </View>
          <View style={[styles.itemfRight,{backgroundColor:team2.color }]}> 
            {maxFantasyPointsTeam2 && (
            <>
            <View style={styles.textContent}>
              <Text style={styles.titleItem}>{maxFantasyPointsTeam2.fullName}</Text>
              <Text style={styles.subtitle}>{maxFantasyPointsTeam2.fantasyPoints}</Text>
            </View>
            <Image source={maxFantasyPointsTeam2.imageTeam} style={styles.player2}/>
            </>
            )}
          </View>
          
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Switcher
          sections={[Section.PlayByPlay, Section.TeamList, Section.TeamStats, Section.PlayerStats]}
          activeSection={activeSection}
          onSectionChange={(section: string) => {
            setActiveSection(section);
    
          switch (section) {
            case Section.PlayByPlay:
              navigation.navigate(NavigationRoutes.DETAILS_STATS,{roundData, timeComponent});
            break;
            case Section.TeamList:
              navigation.navigate(NavigationRoutes.TEAM_LIST,{roundData, timeComponent});
            break;
            case Section.TeamStats:
              navigation.navigate(NavigationRoutes.TEAM_STATS, {roundData, timeComponent});
            break;
      
            default:
        
           break;
          }
        }}
        />
      
        <PlayerItem/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey2,
  },

  wrapItem: {
    flexDirection:'row',
    alignItems: 'center', 
    borderRadius:12,
    marginBottom:20,
    marginHorizontal:25,
       
  },
  itemfLeft:{
    flexDirection:'row', 
    borderTopStartRadius:12,
    borderBottomStartRadius:12,
    height:100,


  },
  itemfRight:{
    flexDirection:'row',  
    borderTopRightRadius:12,
    borderBottomRightRadius:12,
    paddingLeft:30,
    height:100,
    width: '50%',

  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color:colors.black,
    textAlign:'center',
    marginBottom:20
    
  },
  textContent:{ 
    width:68,
    marginTop:20,
    
  },
  titleItem:{
    fontSize: 11,
    color:colors.white,

  },
  player1: {
    bottom: 8,
    resizeMode:"contain" ,
    borderBottomLeftRadius:16
    
  },
  player2: {
   
    right: 32,
    bottom: 8,
    resizeMode:"contain" ,
    borderBottomRightRadius:16
    
  },
  subtitle:{
    fontSize: 22,
    color:colors.white,
  },

  
});

export default PayerStatsScreen;

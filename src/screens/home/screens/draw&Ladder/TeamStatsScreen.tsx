import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import { colors } from '../../../../components/Colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Switcher from '../../components/Switcher';
import DualProgressBar from '../../components/DualProgressBar';
import CircularProgressBar from '../../components/CircularProgressBar';
import ProgressBar from '../../components/ProgressBar';
import SemiCircleProgressBar from '../../components/SemiCircleProgressBar';
import { NavigationRoutes } from '../../../../components/types/NavigationTypes';
import { TeamStatsScreenProps } from '../../../../components/types/DrawLadderTypes';

import { Section  } from '../../../../components/types/DrawLadderTypes';

const TeamStatsScreen: React.FC<TeamStatsScreenProps> = ({ route }) => {
  const navigation = useNavigation<NavigationProp<Record<string, object>, NavigationRoutes>>();
  const [activeSection, setActiveSection] = useState('Team Stats');
  const { roundData, timeComponent } = route!.params;
  const { teams } = roundData;
  const team1 = teams[0];
  const team2 = teams[1];

  const radius = 50;
  const strokeWidth = 8;
  const backgroundColor = colors.bgCircle;
  

  const renderProgressBarCircular = (title: string, value1: number, value2: number) => {
    
    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{title}</Text>
        <ProgressBar
          percentage1={value1} 
          percentage2={value2} 
          radius={radius} 
          strokeWidth={strokeWidth} 
          color1={team1.color}
          color2={team2.color}
          backgroundColor={backgroundColor}
          
        />
        <Image source={require('../../images/teamScreen/linehorisontal.png')} />
      </View>
    );
  };


  const renderProgressBar = (title: string, value1: number, value2: number, label1: any, label2: any, showImage: boolean) => {
    const maxValue = Math.max(value1, value2);
    const percentage1 = (value1 / maxValue) * 100;
    const percentage2 = (value2 / maxValue) * 100;

    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{title}</Text>
        <DualProgressBar
          value1={percentage1}
          value2={percentage2}
          color1={team1.color}
          color2={team2.color}
          label1={label1}
          label2={label2}
        />
         {showImage && <Image source={require('../../images/teamScreen/linehorisontal.png')} />}
      </View>
    );
  };

  const renderCircularProgressBar = (title: string, value1: number, value2: number, label1: any, label2: any, showImage: boolean)=> {
    
    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{title}</Text>
        
          <CircularProgressBar
            percentage1={value1}
            percentage2={value2}
            radius={radius}
            strokeWidth={strokeWidth}
            color1={team1.color}
            color2={team2.color}
            backgroundColor={backgroundColor}
            label1={label1}
            label2={label2}
          />
          
        {showImage && <Image source={require('../../images/teamScreen/linehorisontal.png')} />}
       
      </View>
    );
  };

  const renderCircularProgressBarDefence = (title: string, value1: number, value2: number, showImage: boolean) => {
    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{title}</Text>
          <CircularProgressBar
            percentage1={value1}
            percentage2={value2}
            radius={radius}
            strokeWidth={strokeWidth}
            color1={team1.color}
            color2={team2.color}
            backgroundColor={backgroundColor}
            
          />         
        {showImage && <Image source={require('../../images/teamScreen/linehorisontal.png')} />}
       
      </View>
    );
  };


  const renderSemiCircleProgressBar =(title: string, value1: number, value2: number)=>{
    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{title}</Text>
          <SemiCircleProgressBar
            percentage1={value1}
            percentage2={value2}
            radius={radius}
            strokeWidth={strokeWidth}
            color1={team1.color}
            color2={team2.color}
            backgroundColor={backgroundColor}
          />         
      </View>
    );
  };

  

  const RenderItem: React.FC = () => {
    return(
      <View >
        <Text style={styles.title}>Possession</Text>
        <View style={styles.wrapItem}>  
          {team1.possessions && team2.possessions && renderProgressBarCircular('Possession', team1.possessions.possession, team2.possessions.possession)}            
          {team1.possessions && team2.possessions && renderProgressBar('Time in Possession', team1.possessions.timeInPossession, team2.possessions.timeInPossession, team1.possessions.timeInPossession, team2.possessions.timeInPossession, true)}
          {team1.possessions && team2.possessions && renderCircularProgressBar('Completion Rate', team1.possessions.completionRate.degrees, team2.possessions.completionRate.degrees,team1.possessions.completionRate.fraction,  team2.possessions.completionRate.fraction, false)}  
        </View>
        <Text style={styles.title}>Attack</Text>
        <View style={styles.wrapItem}>
          {team1.attack && team2.attack && renderProgressBar('All runs', team1.attack.allRuns, team2.attack.allRuns, team1.attack.allRuns, team2.attack.allRuns, true)}
          {team1.attack && team2.attack && renderProgressBar('All run metres', team1.attack.allRunMetres, team2.attack.allRunMetres, team1.attack.allRunMetres, team2.attack.allRunMetres, true)}
          {team1.attack && team2.attack && renderProgressBar('Post contact metres', team1.attack.postContactMetres, team2.attack.postContactMetres, team1.attack.postContactMetres, team2.attack.postContactMetres, false)}
          {team1.attack && team2.attack &&renderSemiCircleProgressBar('Average play the ball speed', team1.attack.averagePlayTheBallSpeed, team2.attack.averagePlayTheBallSpeed)}
        </View>
        <Text style={styles.title}>Passing</Text>
        <View style={styles.wrapItem}>
          {team1.pasiing && team2.pasiing && renderProgressBar('Offloads', team1.pasiing.offloads, team2.pasiing.offloads, team1.pasiing.offloads, team2.pasiing.offloads, true)}
          {team1.pasiing && team2.pasiing && renderProgressBar('Total Passes', team1.pasiing.totalPasses, team2.pasiing.totalPasses, team1.pasiing.totalPasses, team2.pasiing.totalPasses, true)}
          {team1.pasiing && team2.pasiing && renderProgressBar('Dummy Passes', team1.pasiing.dummyPasses, team2.pasiing.dummyPasses, team1.pasiing.dummyPasses, team2.pasiing.dummyPasses, false)}
        </View>
        <Text style={styles.title}>Kicking</Text>
        <View style={styles.wrapItem}>
          {team1.kicking && team2.kicking && renderProgressBar('Kicks', team1.kicking.kicks, team2.kicking.kicks, team1.kicking.kicks, team2.kicking.kicks, true)} 
          {team1.kicking && team2.kicking && renderCircularProgressBar('Kick Defusal', team1.kicking.kickDefusal.degrees,team2.kicking.kickDefusal.degrees,team1.kicking.kickDefusal.fraction,  team2.kicking.kickDefusal.fraction, true)}
          {team1.kicking && team2.kicking && renderProgressBar('Kicking metres', team1.kicking.kickingMetres, team2.kicking.kickingMetres, team1.kicking.kickingMetres, team2.kicking.kickingMetres, false)}           
        </View>
        <Text style={styles.title}>Defence</Text>
        <View style={styles.wrapItem}>
          {team1.defence && team2.defence && renderCircularProgressBarDefence('Effective tackle', team1.defence.effectiveTackle, team2.defence.effectiveTackle, true)}
          {team1.defence && team2.defence && renderProgressBar('Tackles made', team1.defence.tacklesMade, team2.defence.tacklesMade, team1.defence.tacklesMade, team2.defence.tacklesMade, true)} 
          {team1.defence && team2.defence && renderProgressBar('Intercepts', team1.defence.intercepts, team2.defence.intercepts, team1.defence.intercepts, team2.defence.intercepts, false)}           
        </View>
        <Text style={styles.title}>Negative play</Text>
        <View style={styles.wrapItem}>
          {team1.negativePlay && team2.negativePlay && renderProgressBar('Errors', team1.negativePlay.errors, team2.negativePlay.errors, team1.negativePlay.errors, team2.negativePlay.errors, true)}
          {team1.negativePlay && team2.negativePlay && renderProgressBar('Penalties conceded', team1.negativePlay.penaltiesConceded, team2.negativePlay.penaltiesConceded, team1.negativePlay.penaltiesConceded, team2.negativePlay.penaltiesConceded, true)}
          {team1.negativePlay && team2.negativePlay && renderProgressBar('Ruck infringements', team1.negativePlay.ruckIfringements, team2.negativePlay.ruckIfringements, team1.negativePlay.ruckIfringements, team2.negativePlay.ruckIfringements, true)}
          {team1.negativePlay && team2.negativePlay && renderProgressBar('Inside 10 metres', team1.negativePlay.inside10Metres, team2.negativePlay.inside10Metres, team1.negativePlay.inside10Metres, team2.negativePlay.inside10Metres, false)}
        </View>
        <Text style={styles.title}>Interchanges</Text>
        <View style={styles.wrapItem}>
          {team1.interchanges && team2.interchanges && renderProgressBar('Used', team1.interchanges.used, team2.interchanges.used, team1.interchanges.used, team2.interchanges.used, false)}          
        </View>
       
      </View>

    )
  }



  return (
    <ScrollView style={styles.container}>
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
              navigation.navigate(NavigationRoutes.TEAM_LIST, {roundData, timeComponent});
            break;
            case Section.PlayerStats:
              navigation.navigate(NavigationRoutes.PLAYER_STATS, {roundData, timeComponent});
            break;
      
            default:
        
           break;
          }
        }}
      />
       
     <RenderItem/>
    
      
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey2,

  }, 
  wrapItem: {
    borderRadius:12,
    marginBottom:24,
    paddingVertical:10,
    backgroundColor:colors.white,
    marginHorizontal:25,
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 5,
    
    
  },
 
  item:{
    marginBottom:20,
    marginHorizontal:15
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:colors.black,
    marginLeft:28,
    marginBottom:20
    
  },
  titleItem:{
    fontSize: 14,
    fontWeight: 'bold',
    color:colors.black,
    textAlign:'center',
    marginBottom:10
  }, 

  circularProgressBarItem:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginVertical:20,
    
    
    
  }

  

  
})

   
export default TeamStatsScreen ;

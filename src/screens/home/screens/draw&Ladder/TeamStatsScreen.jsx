import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import { colors } from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';
import Switcher from '../../components/Switcher';
import DualProgressBar from '../../components/DualProgressBar';
import CircularProgressBar from '../../components/CircularProgressBar';
import ProgressBar from '../../components/ProgressBar';
import SemiCircleProgressBar from '../../components/SemiCircleProgressBar';




const TeamStatsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [activeSection, setActiveSection] = useState('Team Stats');
  const { roundData, timeComponent } = route.params;
  const { teams } = roundData;
  const team1 = teams[0];
  const team2 = teams[1];

  const radius = 50;
  const strokeWidth = 8;
  const duration = 1000;
  const backgroundColor = colors.bgCircle;
  

  const renderProgressBarCircular= (title, value1, value2) => {
    
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


  const renderProgressBar = (title, value1, value2, label1, label2, showImage) => {
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

  const renderCircularProgressBar = (title, value1, value2, label1, label2, showImage) => {
    
    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{title}</Text>
        
          <CircularProgressBar
            percentage1={value1}
            percentage2={value2}
            radius={radius}
            strokeWidth={strokeWidth}
            duration={duration}
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

  const renderCircularProgressBarDefence = (title, value1, value2, showImage) => {
    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{title}</Text>
          <CircularProgressBar
            percentage1={value1}
            percentage2={value2}
            radius={radius}
            strokeWidth={strokeWidth}
            duration={duration}
            color1={team1.color}
            color2={team2.color}
            backgroundColor={backgroundColor}
          />         
        {showImage && <Image source={require('../../images/teamScreen/linehorisontal.png')} />}
       
      </View>
    );
  };


  const renderSemiCircleProgressBar =(title, value1, value2)=>{
    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{title}</Text>
          <SemiCircleProgressBar
            percentage1={value1}
            percentage2={value2}
            radius={radius}
            strokeWidth={strokeWidth}
            duration={duration}
            color1={team1.color}
            color2={team2.color}
            backgroundColor={backgroundColor}
          />         
      </View>
    );
  };

  

  const RenderItem = ()=>{
    return(
      <View >
        <Text style={styles.title}>Possession</Text>
        <View style={styles.wrapItem}>  
          {renderProgressBarCircular('Possession',team1.possessions.possession, team2.possessions.possession,)}      
          {renderProgressBar('Time in Possession', team1.possessions.timeInPossession, team2.possessions.timeInPossession, team1.possessions.timeInPossession, team2.possessions.timeInPossession, true)}
          {renderCircularProgressBar('Completion Rate', team1.possessions.completionRate.degrees, team2.possessions.completionRate.degrees,team1.possessions.completionRate.fraction,  team2.possessions.completionRate.fraction, false)}  
        </View>
        <Text style={styles.title}>Attack</Text>
        <View style={styles.wrapItem}>
          {renderProgressBar('All runs', team1.attack.allRuns, team2.attack.allRuns, team1.attack.allRuns, team2.attack.allRuns, true)}
          {renderProgressBar('All run metres', team1.attack.allRunMetres, team2.attack.allRunMetres, team1.attack.allRunMetres, team2.attack.allRunMetres, true)}
          {renderProgressBar('Post contact metres', team1.attack.postContactMetres, team2.attack.postContactMetres, team1.attack.postContactMetres, team2.attack.postContactMetres, false)}
          {renderSemiCircleProgressBar('Average play the ball speed', team1.attack.averagePlayTheBallSpeed, team2.attack.averagePlayTheBallSpeed)}
        </View>
        <Text style={styles.title}>Passing</Text>
        <View style={styles.wrapItem}>
          {renderProgressBar('Offloads', team1.pasiing.offloads, team2.pasiing.offloads, team1.pasiing.offloads, team2.pasiing.offloads, true)}
          {renderProgressBar('Total Passes', team1.pasiing.totalPasses, team2.pasiing.totalPasses, team1.pasiing.totalPasses, team2.pasiing.totalPasses, true)}
          {renderProgressBar('Dummy Passes', team1.pasiing.dummyPasses, team2.pasiing.dummyPasses, team1.pasiing.dummyPasses, team2.pasiing.dummyPasses, false)}
        </View>
        <Text style={styles.title}>Kicking</Text>
        <View style={styles.wrapItem}>
          {renderProgressBar('Kicks', team1.kicking.kicks, team2.kicking.kicks, team1.kicking.kicks, team2.kicking.kicks, true)} 
          {renderCircularProgressBar('Kick Defusal', team1.kicking.kickDefusal.degrees,team2.kicking.kickDefusal.degrees,team1.kicking.kickDefusal.fraction,  team2.kicking.kickDefusal.fraction, true)}
          {renderProgressBar('Kicking metres', team1.kicking.kickingMetres, team2.kicking.kickingMetres, team1.kicking.kickingMetres, team2.kicking.kickingMetres, false)}           
        </View>
        <Text style={styles.title}>Defence</Text>
        <View style={styles.wrapItem}>
          {renderCircularProgressBarDefence('Effective tackle', team1.defence.effectiveTackle, team2.defence.effectiveTackle, true)}
          {renderProgressBar('Tackles made', team1.defence.tacklesMade, team2.defence.tacklesMade, team1.defence.tacklesMade, team2.defence.tacklesMade, true)} 
          {renderProgressBar('Intercepts', team1.defence.intercepts, team2.defence.intercepts, team1.defence.intercepts, team2.defence.intercepts, false)}           
        </View>
        <Text style={styles.title}>Negative play</Text>
        <View style={styles.wrapItem}>
          {renderProgressBar('Errors', team1.negativePlay.errors, team2.negativePlay.errors, team1.negativePlay.errors, team2.negativePlay.errors, true)}
          {renderProgressBar('Penalties conceded', team1.negativePlay.penaltiesConceded, team2.negativePlay.penaltiesConceded, team1.negativePlay.penaltiesConceded, team2.negativePlay.penaltiesConceded, true)}
          {renderProgressBar('Ruck infringements', team1.negativePlay.ruckIfringements, team2.negativePlay.ruckIfringements, team1.negativePlay.ruckIfringements, team2.negativePlay.ruckIfringements, true)}
          {renderProgressBar('Inside 10 metres', team1.negativePlay.inside10Metres, team2.negativePlay.inside10Metres, team1.negativePlay.inside10Metres, team2.negativePlay.inside10Metres, false)}
        </View>
        <Text style={styles.title}>Interchanges</Text>
        <View style={styles.wrapItem}>
          {renderProgressBar('Used', team1.interchanges.used, team2.interchanges.used, team1.interchanges.used, team2.interchanges.used, false)}          
        </View>
       
      </View>

    )
  }



  return (
    <ScrollView style={styles.container}>
       <Switcher
          sections={['Play by play', 'Team List', 'Team Stats', 'Player Stats']}
          activeSection={activeSection}
          onSectionChange={(section) => {
            setActiveSection(section);
    
          switch (section) {
            case 'Play by play':
              navigation.navigate('Details Stats',{roundData, timeComponent});
            break;
            case 'Team List':
              navigation.navigate('Team List', {roundData, timeComponent});
            break;
            case 'Player Stats':
              navigation.navigate('Player Stats', {roundData, timeComponent});
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
    shadowOffSet: {
      with:0,
      height:12,
    },
    shadowOpacity:0.58,
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

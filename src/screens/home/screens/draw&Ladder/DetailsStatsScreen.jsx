import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView

  
} from 'react-native';

import { colors } from '../../../../components/Colors';
import { useNavigation } from '@react-navigation/native';
import Switcher from '../../components/Switcher';

import {ErrorIcon, RegbyBallIcon, GoalMadeIcon, RestartIcon, MetresIcon, LinesIcon, ArrowIcon, WhistleIcon } from '../../../../components/icons/DetailsStatsScreenIcons'


const DetailsStatsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [activeSection, setActiveSection] = useState('Play by play');
  const { roundData, timeComponent } = route.params;
  const { teams } = roundData;
  const team1 = teams[0];
  const team2 = teams[1];

  const renderItem =()=>{

    return(
      <View>
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <RegbyBallIcon color={colors.black}/>
              <Text style={styles.subtitle}>80:00</Text>
            </View>
            <Image source={require('../../images/teamScreen/line.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}> FULL TIME</Text>
            </View>            
          </View>
          <Text style={styles.title}></Text>
        </View>
         <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <WhistleIcon color={team2.color }/>
              <Text style={styles.subtitle}>{roundData.penaltyBallStrip.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}>PENALTY – BALL STRIP</Text>
              <Text style={styles.titleName}>{roundData.penaltyBallStrip.fullName} </Text>
              <Text style={styles.subtitle}>{roundData.penaltyBallStrip.command} </Text>
            </View>              
          </View>          
        </View>
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <ArrowIcon color={team2.color }/>
              <Text style={styles.subtitle}>{roundData.interchange.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}>INTERCHANGE</Text>
              <Text style={styles.titleName}>
                <Text style={styles.onText}>ON:</Text> {roundData.interchange.on}
              </Text>
              <Text style={styles.titleName}>
                <Text style={styles.offText}>OFF:</Text> {roundData.interchange.off}
              </Text>
              <Text style={styles.subtitle}>{roundData.interchange.command} </Text>
            </View>              
          </View>  
        </View>
        <View style={[styles.wrapItem, { backgroundColor: team2.color }]}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <GoalMadeIcon color={colors.white }/>
              <Text style={[styles.subtitle ,{ color: colors.white }]}>{roundData.pointfield.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={[styles.title ,{ color: colors.white }]}>1 POINT FIELD GOAL-MADE</Text>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                <Text style={[styles.titleName ,{ color: colors.white }]}>{roundData.pointfield.fullName} </Text>
                <Text style={[styles.subtitle,{ color: colors.white }]}>{roundData.pointfield.command} </Text>
                <Text style={[styles.title,{ color: colors.white }]}>{roundData.pointfield.goalMade} </Text>
                </View>
                <Image source={team2.players.backs[0].image} style={styles.player}/>
              </View>
              
            </View>              
          </View>          
        </View>
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
            <ErrorIcon  color={team2.color }/>
              <Text style={styles.subtitle}>{roundData.error.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}>ERROR</Text>
              <Text style={styles.titleName}>{roundData.error.fullName} </Text>
              <Text style={styles.subtitle}>{roundData.error.command} </Text>
            </View>              
          </View>          
        </View>
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <ErrorIcon  color={team1.color }/>
              <Text style={styles.subtitle}>{roundData.error2.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}>ERROR</Text>
              <Text style={styles.titleName}>{roundData.error2.fullName} </Text>
              <Text style={styles.subtitle}>{roundData.error2.command} </Text>
            </View>              
          </View>          
        </View>
        <View style={[styles.wrapItem, { backgroundColor:team1.color}]}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <GoalMadeIcon color={colors.white }/>
              <Text style={[styles.subtitle ,{ color: colors.white }]}>{roundData.pointfield2.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={[styles.title ,{ color: colors.white }]}>1 POINT FIELD GOAL-MADE</Text>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                <Text style={[styles.titleName ,{ color: colors.white }]}>{roundData.pointfield2.fullName} </Text>
                <Text style={[styles.subtitle ,{ color: colors.white }]}>{roundData.pointfield2.command} </Text>
                <Text style={[styles.title,{ color: colors.white }]}>{roundData.pointfield2.goalMade} </Text>
                </View>
                <Image source={team1.players.backs[0].image}  style={styles.player}/>
              </View>
              
            </View>              
          </View>          
        </View> 
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <ErrorIcon  color={team1.color }/>
              <Text style={styles.subtitle}>{roundData.ruckInfringement.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}>RUCK INFRINGEMENT</Text>
              <Text style={styles.titleName}>{roundData.ruckInfringement.fullName} </Text>
              <Text style={styles.subtitle}>{roundData.ruckInfringement.command} </Text>
            </View>              
          </View>          
        </View> 
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <LinesIcon  color={team1.color }/>
              <Text style={styles.subtitle}>{roundData.linebreak.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}>LINEBREAK</Text>
              <Text style={styles.titleName}>{roundData.linebreak.fullName} </Text>
              <Text style={styles.subtitle}>{roundData.linebreak.command} </Text>
            </View>              
          </View>          
        </View> 
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <MetresIcon  color={team1.color }/>
              <Text style={styles.subtitle}>{roundData.inside10metres.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}>INSIDE 10 METRES</Text>
              <Text style={styles.titleName}>{roundData.inside10metres.fullName} </Text>
              <Text style={styles.subtitle}>{roundData.inside10metres.command} </Text>
            </View>              
          </View>          
        </View>
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <RestartIcon color={team2.color }/>
              <Text style={styles.subtitle}>{roundData.setRestart.time}</Text>
            </View>
            <Image source={require('../../images/teamScreen/line3.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}>SET RESTART</Text>
              <Text style={styles.subtitle}>{roundData.setRestart.command} </Text>
            </View>              
          </View>          
        </View>
        <View style={styles.wrapItem}>
          <View style={styles.item}>
            <View style={styles.itemFirstPart}>
              <RegbyBallIcon color={colors.black}/>
              <Text style={styles.subtitle}>00:00</Text>
            </View>
            <Image source={require('../../images/teamScreen/line.png')} />
            <View style={styles.itemSecondPart}>
              <Text style={styles.title}> KICK OFF</Text>
            </View>
          </View>         
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
            case 'Team List':
              navigation.navigate('Team List',{roundData, timeComponent});
            break;
            case 'Team Stats':
              navigation.navigate('Team Stats', {roundData, timeComponent});
            break;
            case 'Player Stats':
              navigation.navigate('Player Stats', {roundData, timeComponent});
            break;
      
            default:
        
           break;
          }
        }}
        />

        {renderItem()}
     
     </ScrollView >
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey2,

  }, 
  wrapItem: {
    flexDirection:'row',
    alignItems: 'center', 
    borderRadius:12,
    marginBottom:16,
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
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingLeft:25,
    paddingVertical:15
  },

  itemFirstPart:{
    marginRight:25
  },

  subtitle:{
    fontSize:11,
    color:colors.extraDarkGrey,
    marginTop:5,
  },
  itemSecondPart:{
    marginLeft:20

  },
  title:{
    fontSize:11,
    color:colors.green
  },
  titleName:{
    fontSize:14,
    color:colors.black,
    marginTop:10,
    
  },
  onText: {
    color: colors.green,
  },
  offText: {
    color: colors.red,
  },
 player:{
  bottom:-25
 }

  
})

   
export default DetailsStatsScreen ;

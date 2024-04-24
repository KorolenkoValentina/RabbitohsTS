import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  SectionList,
  ScrollView,
} from 'react-native';

import { colors } from '../../../../components/Colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Switcher from '../../components/Switcher';
import { NavigationRoutes} from '../../../../components/types/NavigationTypes';
import { TeamListScreenProps, Section , Player } from '../../../../components/types/DrawLadderTypes';

const PlayerList = ({ data }: { data: Player[] }) => {
  return (
    <View style={styles.playerContainer}>
      {data.map((item: Player) => (
        <View key={item.id} style={styles.playerItem}>
          <Image source={item.imageTeam} style={styles.player} />
          <Text style={styles.titleContent}>{item.fullName}</Text>
          <View style={styles.wrap}>
            <View style={styles.playerStats}>
              <Text style={styles.playerStatText}>1</Text>
              <Image source={require('../../images/teamScreen/line2.png')} />
              <Text style={styles.playerStatText}>2</Text>
            </View>
            <Text style={styles.playerStatText}>{item.type}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const PlayerListTwo = ({ data }: { data: Player[] }) => {
  return (
    <View style={styles.playerContainer}>
      {data.map((item: Player) => (
        <View key={item.id} style={styles.playerItem}>
          <Text style={styles.titleContent}>{item.fullName}</Text>
          <Image source={item.imageTeam} style={styles.player2} />
        </View>
      ))}
    </View>
  );
};

type SectionListData<ItemT, SectionT> = {
  title: string;
  data: ReadonlyArray<ItemT>;
} & SectionT;


const TeamListScreen : React.FC<TeamListScreenProps> = ({ route }) => {
  const navigation = useNavigation<NavigationProp<Record<string, object>, NavigationRoutes>>();
  const [activeSection, setActiveSection] = useState('Team List');
  const { roundData, timeComponent } = route!.params;
  const { teams } = roundData;
  const team1 = teams[0];
  const team2 = teams[1];
  
  const sections: ReadonlyArray<SectionListData<
  { left: Player; right: Player | undefined },
  { title: string; data: ReadonlyArray<{ left: Player; right: Player | undefined }> }
>> = [
  {
    title: "Backs",
    data: team1.players?.backs.map((player, index) => ({ left: player, right: team2.players?.backs[index] })) || [],
  },
  {
    title: "Forwards",
    data: team1.players?.forwards.map((player, index) => ({ left: player, right: team2.players?.forwards[index] })) || [],
  },
];

  const List = () => {

    return (
            <>
            <Text style={styles.title}>Coaches</Text>
            <View style={styles.item}>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text style={styles.titleItem}>{team1.coach?.fullName}</Text>
                <Text style={styles.wrapText}>{team1.coach?.type}</Text>
                <Text style={styles.titleItem}>{team2.coach?.fullName}</Text>
              </View>  
            </View>
            <Text style={styles.title}>Match Officials</Text>
            <View style={styles.item}>
              <View>
                <Text style={styles.titleItem}>{roundData.matchOfficials.referee.fullName}</Text>
                <Text style={styles.wrapText}>{roundData.matchOfficials.referee.type}</Text>
              </View>  
            </View>
            <View style={styles.item}>
              <View>
                <Text style={styles.titleItem}>{roundData.matchOfficials.touchJudge.fullName}</Text>
                <Text style={styles.wrapText}>{roundData.matchOfficials.touchJudge.type}</Text>
              </View>  
            </View>
            <View style={styles.item}>
              <View>
                <Text style={styles.titleItem}>{roundData.matchOfficials.seniorReview.fullName}</Text>
                <Text style={styles.wrapText}>{roundData.matchOfficials.seniorReview.type}</Text>
              </View>  
            </View>
            </>
          
    ); 
  };
 

  return (
    <ScrollView style={styles.container}>
     
       <Switcher
          sections={[Section.PlayByPlay, Section.TeamList, Section.TeamStats, Section.PlayerStats]}
          activeSection={activeSection}
          onSectionChange={(section: string) => {
            setActiveSection(section);
    
          switch (section) {
            case Section.PlayByPlay:
              navigation.navigate(NavigationRoutes.DETAILS_STATS,{roundData,timeComponent});
            break;
            case Section.TeamStats:
              navigation.navigate(NavigationRoutes.TEAM_STATS, { roundData, timeComponent });
              break;
              case Section.PlayerStats:
                navigation.navigate(NavigationRoutes.PLAYER_STATS, { roundData, timeComponent });
                break;
      
            default:
        
           break;
          }
        }}
      />
     
       <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.left.id}_${index}`}
        renderItem={({ item }) => (   
           <View style={styles.wrapItem}>
             <View style={{ flexDirection: 'row',}}>
              <PlayerList data={[item.left]} />
              {item.right && <PlayerListTwo data={[item.right]} />}
              </View> 
           </View> 
          
        )}       
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
        
      />
      <List/>
      
      
    </ScrollView>
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
    height:100,
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
    borderRadius:12,
    marginBottom:16,
    padding:15,
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
  playerContainer:{},
  wrapText:{},

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:colors.black,
    marginLeft:28,
    marginBottom:20
    
  },

  titleItem:{
    fontSize: 14,
    color:colors.black,

  },

  playerItem:{
    flexDirection:'row',
    right: 4,
  },

  playerStats:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  },

  titleContent:{
    fontSize: 11,
    color:colors.black,
    width:68,
    right:18,
    marginTop:20

  },

  subtitleContent:{
    fontSize: 14,
    color:colors.extraDarkGrey,
  },


  player: {
    bottom: 5,
    width: 110, 
    height: 110, 
    resizeMode:"contain" ,
    borderBottomLeftRadius:16
    
  },
  player2: {
   
    right: 67,
    bottom: 5,
    width: 110, 
    height: 110, 
    resizeMode:"contain" ,
    borderBottomRightRadius:16
    
  },
  wrap:{
    bottom:-62,
    right: 40,
  },
  playerStatText:{
    fontSize: 11,
    color:colors.extraDarkGrey,
  }

  
})

   
export default TeamListScreen ;

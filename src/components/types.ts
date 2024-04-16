
import {ImageSourcePropType } from 'react-native';



  
export  interface UserData {
userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
   
}
export enum NavigationRoutes {
    ARTICLE = 'Article',
    SIGN_UP = 'Sign Up',
    LOG_IN = 'Log in',
    HOME = 'MainTabs',
    FORGOT_PASSWORD = 'Forgot password',
    PROFILE = 'Profile',
    UPDATE_PASSWORD = 'Update Password',
    HELP_AND_SUPPORT = 'Help & Support',
    CHOOSE_GENDER='Choose gender',
    MOMENTS = 'Moments',
    DRAW_LADDER = 'DrawLadder',
    LADDER='Ladder',
    MATCH='Match',
    DETAILS_STATS='Details Stats',
    TEAM_LIST='Team List',
    TEAM_STATS='Team Stats',
    PLAYER_STATS='Player Stats',
    TEAMS = 'Teams',
    DETAILS_PLAYER='Details Player',
    VIEW='VIEW player info & Stats',
    ACCOUNT='Account'

}

export interface MomentItem {
    image: ImageSourcePropType;
}

export interface ArticleData {
    title: string;
    subtitle: string;
    
    subtitleItem: string;
    titleItem: string;
    textItem: string;
    textItemTwo:string;
    textItemThree:string;
    textItemFour:string;
    textItemFive:string;
    imageTitle: string;
    quote: {
      text: string;
      author: string;
    };
}

export type AccountStackParamList = {
    [NavigationRoutes.ACCOUNT]: undefined;
    [NavigationRoutes.PROFILE]: undefined;
    [NavigationRoutes.UPDATE_PASSWORD]: undefined;
    [NavigationRoutes.HELP_AND_SUPPORT]: undefined;
    [NavigationRoutes.CHOOSE_GENDER]: undefined;
};



export type DrawLadderStackParamList = {
    [NavigationRoutes.DRAW_LADDER]: undefined;
    [NavigationRoutes.LADDER]: undefined;
    [NavigationRoutes.MATCH]: undefined;
    [NavigationRoutes.ARTICLE]: undefined;
    [NavigationRoutes.DETAILS_STATS]: { roundData: any, timeComponent: JSX.Element };
    [NavigationRoutes.TEAM_LIST]: { roundData: any, timeComponent: JSX.Element };
    [NavigationRoutes.TEAM_STATS]: { roundData: any, timeComponent: JSX.Element };
    [NavigationRoutes.PLAYER_STATS]: { roundData: any, timeComponent: JSX.Element };
};
export type TeamStackParamList = {
    [NavigationRoutes.TEAMS]: undefined;
    [NavigationRoutes.DETAILS_PLAYER]: { item: { fullName: string, type: string } };
    [NavigationRoutes.VIEW]: { item: { fullName: string, type: string } };
};

export interface PlayerItem {
  id: string;
  fullName: string;
  type: string;
  dateOfBirth: string;
  birthPlace: string;
  image: any; 
  imageTeam: any; 
  nickName: string;
  age: string;
  height: string;
  weight: string;
  debutClub: string;
  date: string;
  previousClub: string;
  juniorClub: string;
  biography: string;
  playerInfoStats: {
    careerStats: {
      appearances: string;
      tries: string;
    };
    seasonStats: {
      [year: string]: {
        appearances: string;
        scoring: {
          tries: string;
          goals: string;
        };
        kicking: {
          forcedDropOuts: string;
          goalConversionRate: string;
          tries: string;
        };
        attack: {
          tryAssists: string;
          lineBreakAssists: string;
        };
        passing: {
          offloads: string;
          receipts: string;
        };
        defence: {
          tacklesMade: string;
          tackleEfficiency: string;
        };
        runningMetres: {
          avgrunningMetres: string;
          totalrunningMetres: string;
        };
        fantasy: {
          totalPoints: string;
          avgPoints: string;
        };
      };
    };
  };
}

export enum Section {
  PlayByPlay = 'Play by play',
  TeamList = 'Team List',
  TeamStats = 'Team Stats',
  PlayerStats = 'Player Stats'
}

export interface Player {
  id: string; 
  image: any;
  fullName: string;
  type:string;
  imageTeam: any, 
  tackles: number,
  runMetres: number,
  lineBreaks: number,
  fantasyPoints: number
}
interface Coach {
  fullName: string;
  type: string;
}
interface MatchOfficial {
  referee: {
    fullName: string;
    type: string;
  };
  touchJudge: {
    fullName: string;
    type: string;
  };
  seniorReview: {
    fullName: string;
    type: string;
  };
}
export interface Team {
  image: any;
  title: string;
  color: string;
  goals?: string ;
  p: string;
  w: string;
  d: string;
  l: string;
  b: string;
  pd: string;
  pts: string;
  players: { backs:Player [] ;forwards:Player[]};
  coach: Coach;
  possessions: {
    possession: number;
    timeInPossession: number;
    completionRate: { degrees: number; fraction: string };
  };
  attack: {
    allRuns: number;
    allRunMetres: number;
    postContactMetres: number;
    averagePlayTheBallSpeed: number;
  };
  pasiing: { offloads: number; totalPasses: number; dummyPasses: number };
  kicking: {
    kicks: number;
    kickDefusal: { degrees: number; fraction: string };
    kickingMetres: number;
  };
  defence: { effectiveTackle: number; tacklesMade: number; intercepts: number };
  negativePlay: {
    errors: number;
    penaltiesConceded: number;
    ruckIfringements: number;
    inside10Metres: number;
  };
  interchanges: { used: number };
}

export interface RoundData {
  data: string;
  location: string;
  time: string | JSX.Element;
  penaltyBallStrip: { time: string; fullName: string; command: string };
  interchange: { time: string; on: string; off: string; command: string };
  pointfield: { time: string; fullName: string; command: string; goalMade: string };
  error: { time: string; fullName: string; command: string };
  error2: { time: string; fullName: string; command: string };
  pointfield2: { time: string; fullName: string; command: string; goalMade: string };
  ruckInfringement: { time: string; fullName: string; command: string };
  linebreak: { time: string; fullName: string; command: string };
  inside10metres: { time: string; fullName: string; command: string };
  setRestart: { time: string; command: string };
  teams: Team[];
  matchOfficials: MatchOfficial;
 
}


export interface CircularProgressBarProps {
  percentage1: number;
  percentage2: number;
  radius: number;
  strokeWidth: number;
  color1: string;
  color2: string;
  backgroundColor: string;
  label1?: string; 
  label2?: string; 
}

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
    images: [number, number,number,number]; 
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

import {ImageSourcePropType } from 'react-native';

  
export  interface UserData {
  userId?: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  birthdate?: Date;
  gender?: string;
  number?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tikTok?: string;
  image?: string | null;
}


export interface MomentItem {
  id: number;
  image: any;
  
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



export interface PlayerItem {
  id: string;
  fullName: string;
  type: string;
  dateOfBirth: string;
  birthPlace: string;
  image: any; 
  imageDetails:any;
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

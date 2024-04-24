


export interface DetailsStatsScreenProps {
  route: {
    params: {
      roundData: RoundData;
      timeComponent: JSX.Element;
    };
  };
}

export  interface YearData {
  year: string;
  rounds: { [key: string]: RoundData };
}
export interface LadderScreenProps {
  route: {
    params: {
      mockBacksYears: YearData[];
    };
  };
}

export interface MatchScreenProps {
  route: {
    params: {
      roundData: RoundData;
      roundInfo: string;
      timeComponent: JSX.Element;
    };
  };
}

export interface PlayerStatsScreenProps {
  route: {
    params: {
      roundData: RoundData;
      timeComponent: JSX.Element;
    };
  };
}


export interface TeamListScreenProps {
  route: {
    params: {
      roundData: RoundData;
      timeComponent: JSX.Element;
    };
  };
}

export  interface TeamStatsScreenProps {
  route: {
    params: {
      roundData: RoundData;
      timeComponent: JSX.Element;
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
    id:string;
    fullName: string;
    type: string;
}

interface MatchOfficial {
    referee: {
      id:number;
      fullName: string;
      type: string;
    };
    touchJudge: {
      id:number;
      fullName: string;
      type: string;
    };
    seniorReview: {
      id:number;
      fullName: string;
      type: string;
    };
}

export interface Team {
    image: any;
    title: string;
    color: string;
    goals?: number ;
    p: string;
    w: string;
    d: string;
    l: string;
    b: string;
    pd: string;
    pts: string;
    players?: { backs:Player [] ;forwards:Player[]};
    coach?: Coach;
    possessions?: {
      possession: number;
      timeInPossession: number;
      completionRate: { degrees: number; fraction: string };
    };
    attack?: {
      allRuns: number;
      allRunMetres: number;
      postContactMetres: number;
      averagePlayTheBallSpeed: number;
    };
    pasiing?: { offloads: number; totalPasses: number; dummyPasses: number };
    kicking?: {
      kicks: number;
      kickDefusal: { degrees: number; fraction: string };
      kickingMetres: number;
    };
    defence?: { effectiveTackle: number; tacklesMade: number; intercepts: number };
    negativePlay?: {
      errors: number;
      penaltiesConceded: number;
      ruckIfringements: number;
      inside10Metres: number;
    };
    interchanges?: { used: number };
}
  
// export interface RoundData {
 
//     data: string;
    
//     location: string;
//     time: string | JSX.Element;
//     penaltyBallStrip: { time: string; fullName: string; command: string };
//     interchange: { time: string; on: string; off: string; command: string };
//     pointfield: { time: string; fullName: string; command: string; goalMade: string };
//     error: { time: string; fullName: string; command: string };
//     error2: { time: string; fullName: string; command: string };
//     pointfield2: { time: string; fullName: string; command: string; goalMade: string };
//     ruckInfringement: { time: string; fullName: string; command: string };
//     linebreak: { time: string; fullName: string; command: string };
//     inside10metres: { time: string; fullName: string; command: string };
//     setRestart: { time: string; command: string };
//     teams: Team[];
//     matchOfficials: MatchOfficial;
    
   
// }
export interface RoundData {
 
          id: string;
          data: string;
          location: string;
          time?: string | JSX.Element;
          matchOfficials: MatchOfficial;
          penaltyBallStrip: {
              time: string;
              fullName: string;
              command: string;
          };
          interchange: {
              time: string;
              on: string;
              off: string;
              command: string;
          };
          pointfield: {
              time: string;
              fullName: string;
              command: string;
              goalMade: string;
          };
          pointfield2: {
              time: string;
              fullName: string;
              command: string;
              goalMade: string;
          };
          error: {
              time: string;
              fullName: string;
              command: string;
          };
          error2: {
              time: string;
              fullName: string;
              command: string;
          };
          ruckInfringement: {
              time: string;
              fullName: string;
              command: string;
          };
          linebreak: {
              time: string;
              fullName: string;
              command: string;
          };
          inside10metres: {
              time: string;
              fullName: string;
              command: string;
          };
          setRestart: {
              time: string;
              command: string;
          };
          teams: Team[];
      
  
  
}




  
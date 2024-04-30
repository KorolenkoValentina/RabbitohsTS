import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoundData } from './DrawLadderTypes';
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
    ACCOUNT='Account',
    PURCHASES = 'Purchases',
    MY_BENEFITS='My Benefits',
    REGISTRATIONS='Registrations ',
    NOTIFICATIONS='Notifications',
    LATEST_NEWS='Latest News'

}

export type RouteParamsList = {
   roundData?: RoundData, timeComponent?: JSX.Element 
};

export type DrawLadderStackParamList = {
    [NavigationRoutes.DRAW_LADDER]: undefined;
    [NavigationRoutes.LADDER]: undefined;
    [NavigationRoutes.MATCH]: undefined;
    [NavigationRoutes.ARTICLE]: undefined;
    [NavigationRoutes.DETAILS_STATS]: RouteParamsList ;
    [NavigationRoutes.TEAM_LIST]: RouteParamsList ;
    [NavigationRoutes.TEAM_STATS]: RouteParamsList ;
    [NavigationRoutes.PLAYER_STATS]: RouteParamsList ;
};
type DrawLadderScreenNavigationProp = NativeStackNavigationProp<DrawLadderStackParamList>;

export  interface DrawLadderStackParamListScreenProps {
  navigation: DrawLadderScreenNavigationProp;
}




type AccountStackParamList = {
    [NavigationRoutes.ACCOUNT]: undefined;
    [NavigationRoutes.PROFILE]: undefined;
    [NavigationRoutes.UPDATE_PASSWORD]: undefined;
    [NavigationRoutes.HELP_AND_SUPPORT]: undefined;
    [NavigationRoutes.CHOOSE_GENDER]: undefined;
};

type AccountScreenNavigationProp = NativeStackNavigationProp<AccountStackParamList>;

export  interface AccountScreenProps {
  navigation: AccountScreenNavigationProp;
}

export type RouteParams = {
  item?: { fullName: string, type: string };
};

export type TeamStackParamList = {
  [NavigationRoutes.TEAMS]: undefined;
  [NavigationRoutes.DETAILS_PLAYER]: RouteParams;
  [NavigationRoutes.VIEW]: RouteParams;
  [NavigationRoutes.LATEST_NEWS]: RouteParams;
}

type TeamScreenNavigationProp = NativeStackNavigationProp<TeamStackParamList>;

export interface TeamScreenProps {
  navigation: TeamScreenNavigationProp;
}


export interface ProfileScreenProps {
    navigation: any;
    route: any;
}

export  interface GenderSelectionScreenProps {
    navigation: any;
    route: any;
}
export type DetailsPlayerScreenRouteProps = {
  navigation: any;
  route: any; 
};

export type LatestNewsScreenRouteProps = {
  navigation: any;
  route: any; 
};

export type PlayerInfoStatsScreenRouteProps = {
  navigation: any;
  route: any; 
};

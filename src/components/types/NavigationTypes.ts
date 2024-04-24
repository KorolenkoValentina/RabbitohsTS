import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
    NOTIFICATIONS='Notifications'

}



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

export type TeamStackParamList = {
    [NavigationRoutes.TEAMS]: undefined;
    [NavigationRoutes.DETAILS_PLAYER]: { item: { fullName: string, type: string } };
    [NavigationRoutes.VIEW]: { item: { fullName: string, type: string } };
};

type TeamScreenNavigationProp = NativeStackNavigationProp<TeamStackParamList>;

export  interface TeamtScreenProps {
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
  
import {ImageSourcePropType } from 'react-native';

export interface ItemCarousel {
    id: string;
    image: any;
    title: string;
    subtitle?: string;
    shareLink: string;
}

export interface SwitcherProps {
    sections: string[];
    activeSection: string;
    onSectionChange: (section: string) => void;
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

export interface SemiCircleProgressBarProps {
    percentage1: number;
    percentage2: number;
    radius: number;
    strokeWidth: number;
    color1: string;
    color2: string;
    backgroundColor: string;
}
export interface RoundModalProps {
    isRoundMenuOpen: boolean;
    toggleRoundMenu: () => void;
    selectedRound: string;
    setSelectedRound: (round: string) => void;
}

export interface ProgressBarProps {
    percentage1: number;
    percentage2: number;
    radius: number;
    strokeWidth: number;
    color1: string;
    color2: string;
    backgroundColor: string;
}

export interface DualProgressBarProps {
    value1: number;
    value2: number;
    color1: string;
    color2: string;
    label1: string;
    label2: string;
}

export interface YearModalProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    selectedYear: string;
    setSelectedYear: (year: string) => void;
}
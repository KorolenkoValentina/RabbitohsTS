import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { colors } from '../../../components/Colors';
import { DualProgressBarProps } from '../../../components/types/ComponentTypes';



const DualProgressBar: React.FC<DualProgressBarProps> = ({ value1, value2, color1, color2, label1, label2 }) => {
  const totalWidth: number = 200;
  const maxValue: number = Math.max(value1, value2);
  const width1: number = (value1 / maxValue) * totalWidth;
  const width2: number = (value2 / maxValue) * totalWidth;

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: width1, backgroundColor: color1, borderBottomLeftRadius:8, borderTopStartRadius:8 }]} />
        <View style={[styles.progressBar, { width: width2, backgroundColor: color2,}]} />
      
      </View>
      <View style={styles.labelsContainer}>
        <Text style={[styles.label, { fontWeight: value1 > value2 ? 'bold' : 'normal' }]}>{label1}</Text>
        <Text style={[styles.label, { fontWeight: value2 > value1 ? 'bold' : 'normal' }]}>{label2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginBottom:20
  },

  progressBarContainer: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
  },

  progressBar: {
    height: '100%',
    marginLeft:2
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black, 
  },

});

export default DualProgressBar;

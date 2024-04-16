
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { colors } from '../../../components/Colors';

const CircularProgressBar = ({ percentage1, percentage2, radius, strokeWidth, color1, color2,backgroundColor, label1, label2 }) => {
  const circleCircumference = 2 * Math.PI * radius;
  const strokeDashoffset1 = useRef(new Animated.Value(circleCircumference)).current;
  const strokeDashoffset2 = useRef(new Animated.Value(circleCircumference)).current;

  useEffect(() => {
    animateCircle(strokeDashoffset1, percentage1);
    animateCircle(strokeDashoffset2, percentage2);
  }, [percentage1, percentage2]);

  const animateCircle = (strokeDashoffset, percentage) => {
    Animated.timing(strokeDashoffset, {
      toValue: circleCircumference - (circleCircumference * percentage) / 100,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  
  return (
    <View style={styles.container}>
    <View style={{ alignItems: 'center' }}>
      <Svg width={radius * 2} height={radius * 2}>
      <G rotation="-90" origin={`${radius}, ${radius}`}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <AnimatedCircle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={color1}
          strokeWidth={strokeWidth}
          strokeDasharray={circleCircumference}
          strokeDashoffset={strokeDashoffset1}
          strokeLinecap="butt" 
          fill="transparent"
        />
        <Text style={[styles.progressText,percentage1 > percentage2 ? styles.boldText : null,]}>{percentage1}%</Text>         
        </G>
      </Svg>
      <Text style={[styles.labelText, label1 > label2 ? styles.boldText : null]}>{label1}</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Svg width={radius * 2} height={radius * 2}>
      <G rotation="-90" origin={`${radius}, ${radius}`}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <AnimatedCircle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={color2}
          strokeWidth={strokeWidth}
          strokeDasharray={circleCircumference}
          strokeDashoffset={strokeDashoffset2}
          strokeLinecap="butt" 
          fill="transparent"
        />
      <Text style={[styles.progressText,percentage2 > percentage1 ? styles.boldText : null,]}> {percentage2}%</Text>
      </G>
      </Svg>
      <Text style={[styles.labelText, label2 > label1 ? styles.boldText : null]}>{label2}</Text>
    </View>
    </View>
  );
};
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginVertical:20,
  },
 
  progressText: {
    fontSize: 14,
    color: colors.black,
    textAlign:'center',
    top:40
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.black, 
  },
  labelText:{
    fontSize: 14,
    color: colors.black, 
    marginTop:10
  }
});

export default CircularProgressBar;



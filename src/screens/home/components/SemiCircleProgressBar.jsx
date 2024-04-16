import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import { colors } from '../../../components/Colors';

const SemiCircleProgressBar = ({
  percentage1,
  percentage2,
  radius,
  strokeWidth,
  color1,
  color2,
  backgroundColor,
}) => {
  const circleCircumference = Math.PI * radius;
  const animatedOffset1 = useRef(new Animated.Value(circleCircumference)).current;
  const animatedOffset2 = useRef(new Animated.Value(circleCircumference)).current;
  

  useEffect(() => {
    animateCircle(animatedOffset1, percentage1);
    animateCircle(animatedOffset2, percentage2);
  }, [percentage1, percentage2]);

  const animateCircle = (animatedOffset, percentage) => {
    Animated.timing(animatedOffset, {
      toValue: circleCircumference - (circleCircumference * percentage) / 10,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    
    <View style={styles.container}>
    <View style={{ alignItems: 'center' }}>
      <Svg width={radius * 2} height={radius}>
        <G rotation="-90" origin={`${radius}, ${radius}`}>
          <Path
            d={`M${radius},${strokeWidth / 2} A${radius},${radius} 0 0 1 ${radius * 2},${radius}`}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <AnimatedPath
            d={`M${radius},${strokeWidth / 2} A${radius},${radius} 0 0 1 ${radius * 2},${radius}`}
            stroke={color1}
            strokeWidth={strokeWidth}
            strokeDasharray={[circleCircumference, circleCircumference]}
            strokeDashoffset={animatedOffset1}
            strokeLinecap="butt" 
            fill="transparent"
          />
           <Text style={[styles.progressText,percentage1 > percentage2 ? styles.boldText : null,]}>{percentage1}s</Text>  
          </G>
        </Svg>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Svg width={radius * 2} height={radius}>
          <G rotation="-90" origin={`${radius}, ${radius}`}>
            <Path
              d={`M${radius},${strokeWidth / 2} A${radius},${radius} 0 0 1 ${radius * 2},${radius}`}
              stroke={backgroundColor}
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <AnimatedPath
              d={`M${radius},${strokeWidth / 2} A${radius},${radius} 0 0 1 ${radius * 2},${radius}`}
              stroke={color2}
              strokeWidth={strokeWidth}
              strokeDasharray={[circleCircumference, circleCircumference]}
              strokeDashoffset={animatedOffset2}
              strokeLinecap="butt" 
              fill="transparent"
            />
           
            <Text style={[styles.progressText,percentage2 > percentage1 ? styles.boldText : null,]}> {percentage2}s</Text>
          </G>
        </Svg>
      </View>
    </View>
  );
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  progressText: {
    fontSize: 14,
    color: colors.black,
    textAlign:'center',
    top:35
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.black, 
  },
});

export default SemiCircleProgressBar;
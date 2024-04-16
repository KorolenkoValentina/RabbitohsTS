import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing , Image} from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import { colors } from '../../../components/Colors';

const ProgressBar = ({
  percentage1,
  percentage2,
  radius,
  strokeWidth,
  color1,
  color2,
  backgroundColor
  
}) => {
    const circleCircumference = 2 * Math.PI * radius;
  const animatedOffset1 = useRef(new Animated.Value(0)).current;
  const animatedOffset2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateCircle(animatedOffset1, percentage1);
    animateCircle(animatedOffset2, percentage2);
  }, [percentage1, percentage2]);

  const animateCircle = (animatedOffset, percentage) => {
    const offsetValue = circleCircumference - (circleCircumference * percentage) / 100;
    Animated.timing(animatedOffset, {
      toValue: offsetValue,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };


  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        <G rotation="-90" origin={`${radius}, ${radius}`}>
          <Path
            d={`
              M ${radius},${strokeWidth / 2}
              A ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 1 1 ${radius},${radius * 2 - strokeWidth / 2}
              A ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 0 1 ${radius},${strokeWidth / 2}
              Z
            `}
            stroke={color1}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <AnimatedPath
            d={`
              M ${radius},${strokeWidth / 2}
              A ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 ${percentage2 > 50 ? 1 : 0} 1 ${radius},${radius * 2 - strokeWidth / 2}
              A ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 0 1 ${radius},${strokeWidth / 2}
              Z
            `}
            stroke={color2}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={[circleCircumference]}
            strokeDashoffset={animatedOffset2}
            strokeLinecap="butt" 
           
          />
          <View style={styles.wrapProgress}>
            <Text style={[styles.progressText,percentage1 > percentage2 ? styles.boldText : null,]}> {percentage1}%</Text>
            <Image source={require('../images/teamScreen/slashLine.png')}/>
            <Text style={[styles.progressTextTwo,percentage2 > percentage1 ? styles.boldText : null,]}>{percentage2}%</Text>
          </View>
        </G>
      </Svg>
    </View>
  );
};
const AnimatedPath = Animated.createAnimatedComponent(Path);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  wrapProgress:{
    flexDirection:'row',
    alignItems:'center',
    top:28,
    right:5

  },
  progressText: {
    fontSize: 14,
    color: colors.black,
    left:22,
    bottom:12
    
  },
  progressTextTwo:{
    fontSize: 14,
    color: colors.black,
    right:22,
    top:12
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.black, 
  },
 
});

export default ProgressBar;

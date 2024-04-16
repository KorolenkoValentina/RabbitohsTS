import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { colors } from '../../../components/Colors';
// import Svg, { Rect } from 'react-native-svg';

// const DualProgressBar = ({ value1, value2, color1, color2 }) => {
//   const totalWidth = 300; // Total width of the progress bar
//   const height = 20; // Height of the progress bar
//   const borderRadius = 5;
//   const gapWidth = 4; // Width of the gap between rectangles
//   const rect1Width = (value1 / 100) * totalWidth - gapWidth / 2;
//   const rect2Width = (value2 / 100) * totalWidth - gapWidth / 2;


//   return (
//     <View>
//       <Svg width={totalWidth} height={height}>
//         <Rect x="0" y="0" width={rect1Width} height={height} fill={color1} rx={borderRadius}
//           ry={borderRadius}/>
//         <Rect x={rect1Width + gapWidth} y="0" width={rect2Width - rect1Width} height={height} fill={color2} rx={borderRadius}
//           ry={borderRadius}/>
//       </Svg>
//     </View>
//   );
// };


// export default DualProgressBar;
const DualProgressBar = ({ value1, value2, color1, color2, label1, label2 }) => {
  const totalWidth = 200; // Total width of the progress bar
  const maxValue = Math.max(value1, value2);
  const width1 = (value1 / maxValue) * totalWidth;
  const width2 = (value2 / maxValue) * totalWidth;

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

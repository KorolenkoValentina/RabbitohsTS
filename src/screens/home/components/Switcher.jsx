// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet, 
//   TouchableOpacity, 
  
// } from 'react-native';

// import { colors } from '../../../components/Colors';
// import { Swipeable } from 'react-native-gesture-handler';

// const Switcher = ()=>{

//     const [selectedSection, setSelectedSection] = useState('Season stats');
//     const handleSectionChange = (section) => {
//         setSelectedSection(section);
//     };
    

//     const sections = ['Season stats', 'Round stats', 'Latest news'];

//     const renderSections = () => {
//         return sections.map((section, index) => (
//             <TouchableOpacity key={index} onPress={() => handleSectionChange(section)}>
//                 <View style={[styles.sectionButton, selectedSection === section && styles.activeSection]}>
//                     <Text style={[styles.sectionText, selectedSection === section && styles.activeSectionText]}>{section}</Text>
//                 </View>
//             </TouchableOpacity>
//         ));
//     };

//     const swipeRight = () => {
//         const currentIndex = sections.indexOf(selectedSection);
//         if (currentIndex < sections.length - 1) {
//             handleSectionChange(sections[currentIndex + 1]);
//         }
//     };

//     const swipeLeft = () => {
//         const currentIndex = sections.indexOf(selectedSection);
//         if (currentIndex > 0) {
//             handleSectionChange(sections[currentIndex - 1]);
//         }
//     };

//     return (
        
//         <Swipeable
//             friction={2}
//             leftThreshold={40}
//             rightThreshold={40}
//             renderLeftActions={swipeLeft}
//             renderRightActions={swipeRight}
//         >
//             <View style={styles.sectionSwitcher}>{renderSections()}</View>
//         </Swipeable>
//     );
    
   
// }

// const styles = StyleSheet.create({

//     sectionSwitcher: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginLeft:25,
//         marginVertical: 20,
//         backgroundColor:colors.white,
//         borderRadius:12
//     },
//       sectionButton: {
//         paddingHorizontal: 25,
//         paddingVertical: 15,
//     },
//     activeSection: {
//         backgroundColor: colors.green,
//         borderRadius:9,
//     },
//     sectionText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color:colors.extraDarkGrey
//     },
//     activeSectionText: {
//         color: colors.white, 
//         fontSize: 16,
//         fontWeight: 'bold',
//       },
// })
// export default  Switcher


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../components/Colors';


const Switcher = ({ sections, activeSection, onSectionChange }) => {

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.sectionSwitcher}>
                {sections.map((section, index) => (
                    <TouchableOpacity key={index} onPress={() => onSectionChange(section)}>
                        <View style={[styles.sectionButton, activeSection === section && styles.activeSection]}>
                            <Text style={[styles.sectionText, activeSection === section && styles.activeSectionText]}>{section}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

// const Switcher = ({ sections, onSectionChange }) => {
//     const [selectedSection, setSelectedSection] = useState(sections[0]);

//     const handleSectionChange = (section) => {
//         setSelectedSection(section);
//         onSectionChange(section);
//     };

//     return (
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
//             <View style={styles.sectionSwitcher}>
//                 {sections.map((section, index) => (
//                     <TouchableOpacity key={index} onPress={() => handleSectionChange(section)}>
//                         <View style={[styles.sectionButton, selectedSection === section && styles.activeSection]}>
//                             <Text style={[styles.sectionText, selectedSection === section && styles.activeSectionText]}>{section}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//         </ScrollView>
//     )
// }

const styles = StyleSheet.create({
    sectionSwitcher: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginVertical: 20,
        backgroundColor: colors.white,
        borderRadius: 12,
        height: 50,
        
    },
    sectionButton: {
        paddingHorizontal: 62,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    activeSection: {
        backgroundColor: colors.green,
        borderRadius: 9,
    },
    sectionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.extraDarkGrey,
    },
    activeSectionText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },  
});

export default Switcher;





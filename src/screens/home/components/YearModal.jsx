import React from 'react';
import {
  View,
  Text,
  StyleSheet, 
  TouchableOpacity,
  Modal
  
} from 'react-native';

import { colors } from '../../../components/Colors';

const YearModal =({ isMenuOpen, toggleMenu, selectedYear, setSelectedYear }) => {
  
    const selectYear = (year) => {
        setSelectedYear(year);
        toggleMenu();
    };
    

    const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001'];

    const renderYears = () => {
        return years.map((year, index) => (
            <TouchableOpacity key={index} onPress={() => selectYear(year)}>
                <View style={[styles.yearItem, selectedYear === year && styles.selectedYearItem]}>
                    <Text style={styles.yearText}>{year}</Text>
                </View>
            </TouchableOpacity>
        ));
    }

    return(
        <Modal visible={isMenuOpen} transparent={true} animationType="fade" >
            <TouchableOpacity style={styles.modalContainer} onPress={toggleMenu}>
                <View style={styles.modalContent}>
                    {renderYears()}
                </View>
            </TouchableOpacity>
        </Modal>

    );

}

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 5,
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent: 'center',
        marginHorizontal:25
    },
    yearItem: {
        borderWidth: 1,
        borderColor: colors.lightgrey,
        paddingHorizontal: 10,
        paddingVertical:10,
        margin: 5,
        borderRadius: 5,
    },

    selectedYearItem: {
        borderColor: colors.green,
    },

    yearText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color:colors.black
    },
  
    
})

export default YearModal
  
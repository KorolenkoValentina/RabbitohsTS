import React from 'react';
import {
  View,
  Text,
  StyleSheet, 
  TouchableOpacity,
  Modal
  
} from 'react-native';

import { colors } from '../../../components/Colors';

const RoundModal =({ isRoundMenuOpen, toggleRoundMenu, selectedRound, setSelectedRound }) => {
  
    const selectRound = (round) => {
        setSelectedRound(round);
        toggleRoundMenu();
    };
    

    const rounds = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Round 7', 'Round 8', 'Round 9', 'Round 10', 'Round 11', 'Round 12', 'Round 13', 'Round 14', 'Round 15', 'Round 16', 'Round 17', 'Round 18'];

    const renderRounds = () => {
        return rounds.map((round, index) => (
            <TouchableOpacity key={index} onPress={() => selectRound(round)}>
                <View style={[styles.roundItem, selectedRound === round && styles.selectedRoundItem]}>
                    <Text style={styles.roundText}>{round}</Text>
                </View>
            </TouchableOpacity>
        ));
    }

    return(
        <Modal visible={isRoundMenuOpen} transparent={true} animationType="fade" >
            <TouchableOpacity style={styles.modalContainer} onPress={toggleRoundMenu}>
                <View style={styles.modalContent}>
                    {renderRounds()}
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
    roundItem: {
        borderWidth: 1,
        borderColor: colors.lightgrey,
        paddingHorizontal: 10,
        paddingVertical:10,
        margin: 5,
        borderRadius: 5,
    },

    selectedRoundItem: {
        borderColor: colors.green,
    },

    roundText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color:colors.black
    },
  
    
})

export default RoundModal
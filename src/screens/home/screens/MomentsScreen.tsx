import React,{useState}   from 'react';
import { View, FlatList, Image, TouchableOpacity, Modal, StyleSheet, Text, ImageSourcePropType } from 'react-native';
import { mockMomentsData } from '../components/MockMomentsData';
import { colors } from '../../../components/Colors';
import { MomentItem } from '../../../components/types';


const MomentsScreen: React.FC = () => {
  
  const [selectedImage, setSelectedImage] = useState<ImageSourcePropType | null>(null);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const renderItem = ({ item }: { item: MomentItem}) => (
    <TouchableOpacity onPress={() => { setSelectedImage(item.image); setModalVisible(true); }}>
      <Image source={item.image} style={styles.imageThumbnail} />
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockMomentsData}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item, index: number) => index.toString()}
      />
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          
          <Image source={selectedImage} style={styles.fullImage} resizeMode="contain" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginHorizontal:15,
    backgroundColor:colors.lightgrey2,
    
      
  },
  imageThumbnail: {
    width: 108,
    height: 108,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    color: 'white',
    fontSize: 18,
  },
  fullImage: {
    width: '90%',
    height: '90%',
  },
});

export default MomentsScreen;
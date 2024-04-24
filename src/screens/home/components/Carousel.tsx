
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Dimensions,Share } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { colors } from '../../../components/Colors';
import { ItemCarousel } from '../../../components/types/ComponentTypes';
import ItemImage from '../images/homeScreen/main-image.svg'
import ItemImage2 from '../images/homeScreen/main-image-1.svg'


const data: ItemCarousel[] = [
  {
    id: '1',
    image: ItemImage,
    title: 'Murray and Cook named for Origin Game Two',
    subtitle: 'The South Sydney Rabbitohs are pleased to announce their NRL squad for round 15 against the St George Illawarra...  See more',
    shareLink: 'https://example.com/1'
  },
  {
    id: '2',
    image: ItemImage2,
    title: 'Demetrious stunning Super League Season',
    subtitle: 'Tomy Chats with Jason Demetriou all thing as a player and couch. All thing as a player....  See more',
    shareLink: 'https://example.com/2'
  },
  {
    id: '3',
    image: ItemImage,
    title: 'Murray and Cook named for Origin Game Two',
    subtitle: 'The South Sydney Rabbitohs are pleased to announce their NRL squad for round 15 against the St George Illawarra...  See more',
    shareLink: 'https://example.com/3'
  },
  {
    id: '4',
    image: ItemImage2,
    title: 'Demetrious stunning Super League Season',
    subtitle: 'Tomy Chats with Jason Demetriou all thing as a player and couch. All thing as a player....  See more',
    shareLink: 'https://example.com/4'
  },
  {
    id: '5',
    image: ItemImage,
    title: 'Murray and Cook named for Origin Game Two',
    subtitle: 'The South Sydney Rabbitohs are pleased to announce their NRL squad for round 15 against the St George Illawarra...  See more',
    shareLink: 'https://example.com/5'
  },
  
];

const { width, height } = Dimensions.get('screen');

const CarouseVideolScreen: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(0);

  const handleItemSelect = (id: string, shareLink: string) => {
    setSelectedId(Number(id));
    handleShare(shareLink);
    
  };

  const handleShare =async (shareLink: string)  => {
    try {
      const result = await Share.share({
        message: `Check out this image: ${shareLink}`,
      });
      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  const renderItemCarousel = ({ item, index }: { item: ItemCarousel; index: number }) => (
    <View style={{ width: width / 1}}>
      <TouchableOpacity onPress={() => handleItemSelect(item.id, item.shareLink)}>
        <item.image  width={'100%'} preserveAspectRatio="xMidYMid slice" />
        <View style={styles.carouselText}>
            <Text style={styles.carouselTitle}>{item.title}</Text>
            <Text style={styles.carouselSubtitle}>{item.subtitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {data.map((item, index) => (
        <View
          key={index}
          style={[styles.paginationDot, { backgroundColor: index === selectedId ? 'grey' : 'red' }]}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <Carousel
        data={data}
        renderItem={renderItemCarousel}
        sliderWidth={width}
        itemWidth={width / 1}
        onSnapToItem={(index) => setSelectedId(index)}

      /> 
      {renderPagination()}      
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  carouselText:{
    marginHorizontal:25,
  },

  carouselTitle: {
    fontSize: 20,
    color:colors.black           
  },
  carouselSubtitle:{
    fontSize: 14,
    color:colors.extraDarkGrey
  },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 14,
    marginRight:20
  },
  paginationDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default CarouseVideolScreen;


import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Dimensions , Share} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ItemCarousel } from '../../../components/types/ComponentTypes';
import { colors } from '../../../components/Colors';
import Video from '../images/homeScreen/image-1.svg';
import Video2 from '../images/homeScreen/image-2.svg';
import Video3 from '../images/homeScreen/image-3.svg';


const data: ItemCarousel[] = [
  {
    id: '1',
    title: 'WOT you need to know for',
    image: Video,
    shareLink: 'https://example.com/1'
  },
  {
    id: '2',
    title: 'Fast delivery',
    image: Video2 ,
    shareLink: 'https://example.com/2'
  },
  {
    id: '3',
    title: 'Support service',
    image: Video3,
    shareLink: 'https://example.com/3'
  },
  {
    id: '4',
    title: 'Love for what we do',
    image:Video,
    shareLink: 'https://example.com/4'
  },
  {
    id: '5',
    title: 'Fast delivery',
    image: Video2,
    shareLink: 'https://example.com/5'
  },
  {
    id: '6',
    title: 'Support service',
    image: Video3,
    shareLink: 'https://example.com/6'
  },
];

const { width, height } = Dimensions.get('screen');


const CarouselVideoScreen: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(0);

  const handleItemSelect = (id: string, shareLink: string) => {
    setSelectedId(parseInt(id));
    handleShare(shareLink);
  };

  const handleShare = async (shareLink: string) => {
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

  const renderItemCarousel = ({ item, index }: { item: ItemCarousel; index: number })  => (
    <View style={{ width: width / 3}}>
      <TouchableOpacity style={styles.carouselItem} onPress={() => handleItemSelect(item.id, item.shareLink)}>
        <item.image  />
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItemCarousel}
        sliderWidth={width}
        itemWidth={width / 3}
        loop={true} 
        onSnapToItem={(index) => setSelectedId(index)}
      />       
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  
  carouselItem: {
    alignItems: 'center',
  },
  carouselTitle: {
    fontSize: 14,
    color:colors.black,
    marginTop: 8,
            
  },
});

export default CarouselVideoScreen;

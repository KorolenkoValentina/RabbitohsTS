
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image, 
  ScrollView,
  
} from 'react-native';

import { colors } from '../../../components/Colors';
import { ArticleData } from '../../../components/types';

const articleData: ArticleData = {
  title: "Rabbitohs rue missed opportunities in last-ditch",
  subtitle: "Sponsored by:",
 
  images: [
    require('../images/videoArticle/image-3.png'), 
    require('../images/videoArticle/logo.png'),
    require('../images/videoArticle/image-4.png'),
    require('../images/videoArticle/icon-quotation.png')
  ],
  subtitleItem: "South Sydney Rabbitohs",
  titleItem: "The Rabbitohs have fallen short in the dying stages in the grand final rematch against Penrith, falling 26-22 at Accor Stadium.",
  textItem: "Leading by two points heading into the final five minutes, a late penalty and try with less than two to go effectively ended South Sydney’s top-four hopes.",
  textItemTwo:"But it was the half chances throughout the night that will most sting the Rabbitohs, with a number of chances that went begging, inviting the defending premiers into the game and ultimately allowing them to finish over the top.",
  textItemThree:"The match was riddled with scoring opportunities that went astray, failing to build a sizeable lead against a side they needed to lift another gear for.",
  textItemFour:"The Rabbitohs have made a habit of scoring first in recent weeks, but the side found themselves behind early on after a bit of déjà vu from last year’s grand final, with Stephen Crichton swooping on a loose pass to run 50 metres and score.",
  textItemFive:"Just as the Panthers looked to be slipping away, a big shot on Crichton forced a mistake and South Sydney hit back with a textbook backline movement, with multiple the ball going through multiple sets of hands and finished off with a Campbell Graham.",
  imageTitle: "Match Highlights: Rabbitohs v Panthers",
  quote: {
    text: "The outpouring of emotion and the heartfelt tributes for John over the past few days have been amazing for everyone at the Club and for John’s family.",
    author: "Blake Solly, Rabbitohs CEO"
  }
};

const Articlerscreen: React.FC = ()=> {
  const renderItem = ()=> {
    return (
      <View style={styles.wrap}>
        <ImageBackground source={articleData.images[0]} style={styles.background}>
          <Text style={styles.title}>{articleData.title}</Text>
          <View style={styles.wrapConent}>
            <Text style={styles.subtitle}>{articleData.subtitle}</Text>
            <Image source={articleData.images[1]}/>
          </View>
        </ImageBackground>
        <View style={styles.wrapItem}>
          <Text style={styles.subtitleItem}>{articleData.subtitleItem}</Text>
          <Text style={styles.titleItem}>{articleData.titleItem}</Text>
          <Text style={styles.textItem}>{articleData.textItem}</Text>
          <Text style={styles.textItem}>{articleData.textItemTwo}</Text>
          <Image source={articleData.images[2]} style={styles.image}/>
          <Text style={styles.imageTitle}>{articleData.imageTitle}</Text>
          <Text style={styles.textItem}>{articleData.textItemThree}</Text>
          <Text style={styles.textItem}>{articleData.textItemFour}</Text>
          <Image source={articleData.images[2]} style={styles.image}/>
          <Text style={styles.imageTitle}>{articleData.imageTitle}</Text>
          <Text style={styles.textItem}>{articleData.textItemFive}</Text>
          <View style={styles.wrapQuote}>
          <Image source={articleData.images[3]}  />
            <Text style={styles.textQuote}>{articleData.quote.text}</Text>
            <Text style={styles.titleQuote}>{articleData.quote.author}</Text>
            <View style={styles.separator}></View>
          </View>
          <Text style={styles.textItem}>{articleData.textItemFive}</Text>
        </View>
      </View>
    );
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>{renderItem()}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        
  },
  wrap:{
    marginBottom:25
  },
  
  background: {
    justifyContent:'flex-end',
    width: '100%',
    height:360,
    alignItems:'center',

 },

  wrapConent:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginLeft:"40%"
  },

  title:{
    
    fontSize:20,
    color:colors.white,
  },
  subtitle:{
    fontSize:11,
    color:colors.white
  },

  wrapItem:{
    marginHorizontal:25,
   

  },
  subtitleItem:{
    fontSize:11,
    color:colors.black,
    marginVertical:16
  },
  titleItem:{
    fontSize:14,
    color:colors.black
  },
  image:{
    marginTop:16
  },
  imageTitle:{
    fontSize:11,
    color:colors.extraDarkGrey,
    marginTop:5
  },
  textItem:{
    fontSize:14,
    color:colors.extraDarkGrey,
    marginTop:16
  },
  textQuote:{
    fontSize:14,
    color:colors.black,
    textAlign:'center'
  },
  titleQuote:{
    fontSize:14,
    color:colors.black,
    marginVertical:16,
    textAlign:'center'
  },
  separator: {
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  wrapQuote:{
    marginTop:16
  }


})
export default Articlerscreen
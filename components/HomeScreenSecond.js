import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import ImageSilder from './slider/ImageSilder';
import {ganeshMantra, nadini, sankhPoojan, gannayakay, mahalakshmiMantra, hanumateMantra, shivMantra, durgaPoojaMantra, gaytriMantra, lakshmiganeshMantre, kuberMantra, kaliMantra, diwaliMantra, shantiMantra, swasti, triputibalajiMantra, natrajstruti, radharani, narsinghMantra, maaannapoorna, vishnuMantra, vidhyaManta, ramayanMantra, gangaMantra, shaniMantra } from './constant/mantraContent';

import { Card } from 'react-native-paper';
const DATA = [
  {
    id: "1",
    title: "श्री गणेश मंत्र - वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।",
    image: require('../assets/god/img1.jpg'),
    content: ganeshMantra,
    uri: 'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
  },
  {
    id:"30",
    title: " लक्ष्मी-गणेश मंत्र",
    image: require('../assets/god/img34.jpg'),
    content: lakshmiganeshMantre,
  },
  {
    id: "2",
    title: "माँ महालक्ष्मी मंत्र - ॐ ह्रीं श्रीं लक्ष्मीभयो नमः",
    image: require('../assets/god/img28.jpg'),
    content: mahalakshmiMantra,
  },
  {
    id: "3",
    title: "महिषासुरमर्दिनि स्तोत्रम् - अयि गिरिनन्दिनि",
    image: require('../assets/god/mahsasur1.jpg'),
    content: nadini,
  },
  {
    id: "4",
    title: "हनुमान मंत्र - ॐ श्री हनुमते नमः॥",
    image: require('../assets/god/img19.jpeg'),
    content: hanumateMantra,
  },
  {
    id: "5",
    title: "ॐ जय शिव मूल मंत्र- ॐ नमः शिवाय॥",
    image: require('../assets/god/img16.jpg'),
    content: shivMantra,
  },
    {
    id: "6",
    title: "शंख पूजन मन्त्र",
    image: require('../assets/god/shankh.jpg'),
    content: sankhPoojan,
  },
  {
    id: "7",
    title: "माँ दुर्गा माता - सर्वमंगल मांगल्ये शिवे।",
    image: require('../assets/god/img2.jpg'),
    content: durgaPoojaMantra,
  },
  {
    id: "8",
    title: "जय गायत्री माता - ॐ भूर्भुवः स्वः",
    image: require('../assets/god/img4.jpg'),
    content: gaytriMantra,
  },
  {
    id: "31",
    title:"कुबेर मंत्र - ॐ यक्षाय कुबेराय",
    image: require('../assets/god/img39.jpg'),
    content: kuberMantra,
  },
  {
    id: "20",
    title: "जय माँ काली - श्री दक्षिण काली मंत्र",
    image: require('../assets/god/img9.jpg'),
    content: kaliMantra,
  },
  {
     id: "32",
    title:"दिवाली मन्त्र - गोवत्स द्वादशी मन्त्र",
    image: require('../assets/god/img41.jpg'),
    content: diwaliMantra,
  },
  {
     id: "33",
    title:"शांति पाठ मंत्र - ॐ द्यौ: शान्तिरन्तरिक्षँ शान्ति: ",
    image: require('../assets/god/img40.jpg'),
    content: shantiMantra,
  },
  {
    id: "34",
    title:"ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः",
    image: require('../assets/god/img35.jpg'),
    content: swasti,
  },
  {
    id: "35",
    title:"तिरुपति बालाजी - शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ",
    image: require('../assets/god/img32.jpg'),
    content: triputibalajiMantra,
  },
    {
    id: "36",
    title:"नटराज स्तुति - तसत सृष्टि तांडव रचयिता",
    image: require('../assets/god/img31.jpg'),
    content: natrajstruti,
  },
   {
    id: "37",
    title:"राधा रानी मंत्र - मुनीन्द्र–वृन्द–वन्दिते",
    image: require('../assets/god/img38.jpg'),
    content: radharani,
  },
  {
    id: "38",
    title:"श्री लक्ष्मी नृसिंह सर्वसिद्धिकर ऋणमोचन स्तोत्र।",
    image: require('../assets/god/img33.jpg'),
    content: narsinghMantra,
  },
  {
    id: "39",
    title:"अन्नपूर्णा स्तोत्रम् - नित्यानन्दकरी वराभयकरी सौन्दर्यरत्नाकरी",
    image: require('../assets/god/img36.jpg'),
    content: maaannapoorna,
  },
   {
    id: "40",
    title:"ॐ श्री विष्णु मंत्र: मङ्गलम् भगवान विष्णुः",
    image: require('../assets/god/img37.jpg'),
    content: vishnuMantra,
  },
  {
    id: "9",
    title: "जय सरस्वती माता - विद्यां ददाति विनयं",
    image: require('../assets/god/img6.jpg'),
    content: vidhyaManta,
  },
  {
    id: "21",
    title: "श्री रामायण जी - राम रामेति रामेति",
    image: require('../assets/god/img27.jpg'),
    content: ramayanMantra,
  },
  {
    id: "19",
    title: "ॐ जय गंगे माता - श्री गंगा जी की स्तुति",
    image: require('../assets/god/img10.jpg'),
    content: gangaMantra,
  },
  {
    id: "10",
    title: "ॐ जय शनि महाराज मंत्र",
    image: require('../assets/god/img14.jpg'),
    content: shaniMantra,
  },
  // {
  //   id: "11",
  //   title: "तुलसी महारानी",
  //   image: require('../assets/god/img12.jpg'),
  //   content: tulsi,
  // },
  // {
  //   id: "12",
  //   title: "ॐ जय साईं हरे",
  //   image: require('../assets/god/img8.jpg'),
  //   content: sai,
  // },
  // {
  //   id: "13",
  //   title: "जय वैष्णवी माता",
  //   image: require('../assets/god/img18.jpg'),
  //   content: maaVaishno,
  // },
  // {
  //   id: "14",
  //   title: "श्री गोवर्धन महाराज",
  //   image: require('../assets/god/img3.jpg'),
  //   content: goverdhan,
  // },
  // {
  //   id: "15",
  //   title: "श्री बांके बिहारी",
  //   image: require('../assets/god/img13.jpg'),
  //   content: bankebihari,
  // },
  // {
  //   id: "16",
  //   title: "जय बालाजी",
  //   image: require('../assets/god/img20.jpg'),
  //   content: balaji,
  // },
  // {
  //   id: "17",
  //   title: "गणनायकाय गणदेवताय गणाध्यक्षाय धीमहि।",
  //   image: require('../assets/god/img15.jpg'),
  //   content: gannayakay,
  // },
  // {
  //   id: "18",
  //   title: "जय भैरव देवा",
  //   image: require('../assets/god/img26.jpg'),
  //   content: bhairav,
  // },
  // {
  //   id: "22",
  //   title: "जय पार्वती माता",
  //   image: require('../assets/god/img21.jpg'),
  //   content: parwati,
  // },
  // {
  //   id: "23",
  //   title: "श्री कबीरदास",
  //   image: require('../assets/god/img24.jpg'),
  //   content: kabir,
  // },
  // {
  //   id: "24",
  //   title: "ॐ जय श्री श्याम हरे",
  //   image: require('../assets/god/img25.png'),
  //   content: khatushyam
  // },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}> 
  <View style={{ flex: 1, flexDirection: 'row' }}>
  <Image style={{ height: 50, width: 50, borderRadius: 15 }} source={item.image} />  
    <View style={styles.titles}>
    <Text style={styles.title}>{item.title}</Text>
    </View>
  </View>
  
  </TouchableOpacity>
);

export default function HomeScreenSecond(props) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#fc802d";

    return (
      <Item
        item={item}
        onPress={() => props.navigation.navigate('Mantra', {artiItems: item})}
        // onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };
  return (
    <ScrollView>
    <ImageSilder />
    <View style={styles.container}>   
       <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 15,
  },
 item: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    // marginHorizontal: 16,
  },
  titles: {
    justifyContent: 'center',
    // textAlign: 'center',
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginRight: 30,
  },
});

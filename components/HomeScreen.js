import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import ImageSlider from './slider/ImageSilder';
import {ganesh, mahalakshmi, vishnu, saraswati, santoshi, shani, ganga, gayatri, maaDurga, kunj, jagdish, hanuman, bankebihari, tulsi, sai , maaVaishno, goverdhan, lordShiv, kali, parwati, khatushyam, balaji, ramayan, kabir, bhairav } from './constant/content';
import { Card } from 'react-native-paper';

const DATA = [
  {
    id: "1",
    title: "श्री गणेश आरती",
    image: require('../assets/god/img1.jpg'),
    content: ganesh,
    uri: 'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
  },
  {
    id: "2",
    title: "माँ महालक्ष्मी",
    image: require('../assets/god/img28.jpg'),
    content: mahalakshmi,
  },
  {
    id: "3",
    title: "श्री जगदीश जी की आरती",
    image: require('../assets/god/img5.jpg'),
    content: jagdish,
  },
  {
    id: "4",
    title: "आरती कीजै हनुमान",
    image: require('../assets/god/img19.jpeg'),
    content: hanuman,
  },
  {
    id: "5",
    title: "जय सरस्वती माता",
    image: require('../assets/god/img6.jpg'),
    content: saraswati,
  },
    {
    id: "6",
    title: "जय सन्तोषी माता",
    image: require('../assets/god/img7.jpg'),
    content: santoshi,
  },
  {
    id: "7",
    title: "जय दुर्गा माता",
    image: require('../assets/god/img2.jpg'),
    content: maaDurga,
  },
  {
    id: "8",
    title: "आरती कुंजबिहारी की",
    image: require('../assets/god/img15.jpg'),
    content: kunj,
  },
  {
    id: "9",
    title: "श्री बांके बिहारी",
    image: require('../assets/god/img13.jpg'),
    content: bankebihari,
  },
  {
    id: "10",
    title: "ॐ जय जय शनि महाराज",
    image: require('../assets/god/img14.jpg'),
    content: shani,
  },
  {
    id: "11",
    title: "तुलसी महारानी",
    image: require('../assets/god/img12.jpg'),
    content: tulsi,
  },
  {
    id: "12",
    title: "ॐ जय साईं हरे",
    image: require('../assets/god/img8.jpg'),
    content: sai,
  },
  {
    id: "13",
    title: "जय वैष्णवी माता",
    image: require('../assets/god/img18.jpg'),
    content: maaVaishno,
  },
  {
    id: "14",
    title: "श्री गोवर्धन महाराज",
    image: require('../assets/god/img3.jpg'),
    content: goverdhan,
  },
  {
    id: "15",
    title: "ॐ जय शिव ओंकारा",
    image: require('../assets/god/img16.jpg'),
    content: lordShiv,
  },
  {
    id: "16",
    title: "जय बालाजी",
    image: require('../assets/god/img20.jpg'),
    content: balaji,
  },
  {
    id: "17",
    title: "जय गायत्री माता",
    image: require('../assets/god/img4.jpg'),
    content: gayatri,
  },
  {
    id: "18",
    title: "जय भैरव देवा",
    image: require('../assets/god/img26.jpg'),
    content: bhairav,
  },
  {
    id: "19",
    title: "ॐ जय गंगे माता",
    image: require('../assets/god/img10.jpg'),
    content: ganga,
  },
  {
    id: "20",
    title: "जय काली माता",
    image: require('../assets/god/img9.jpg'),
    content: kali,
  },
  {
    id: "21",
    title: "आरती श्री रामायण जी की",
    image: require('../assets/god/img27.jpg'),
    content: ramayan,
  },
  {
    id: "22",
    title: "जय पार्वती माता",
    image: require('../assets/god/img21.jpg'),
    content: parwati,
  },
  {
    id: "23",
    title: "श्री कबीरदास",
    image: require('../assets/god/img24.jpg'),
    content: kabir,
  },
  {
    id: "24",
    title: "ॐ जय श्री श्याम हरे",
    image: require('../assets/god/img25.png'),
    content: khatushyam
  },
  {
    id: "25",
    title: "kshamapan Stotra",
  },
];

const NewItem = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}> 
  <View style={{ flex: 1, flexDirection: 'row' }}>
  <Image style={{ height: 50, width: 50, borderRadius: 15 }} source={item.image} />  
    <View style={styles.titles}>
    <Text style={styles.title}>{item.title}</Text>
    </View>
  </View>
  
  </TouchableOpacity>
);

export default function HomeScreen(props) {
  const [selectedId, setSelectedId] = useState(null);

  const abc = ({ item }) => {
    // console.log('abc', item);
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#fc802d";

    return (
      <NewItem
        item={item}
        onPress={() => props.navigation.navigate('AssetExample', {artiItem: item})}
        // onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };
  return (
    <ScrollView>
      <ImageSlider style={styles.logo} />  
    <View style={styles.container}>
       <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={(item) => abc(item)}
        // keyExtractor={(item) => item.id}
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
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    // alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    // padding: 15,
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
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  logo: {
    // resizeMode: "center",
    // marginRight: 10,
    // marginVertical: 10,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // width: '100%',
    // height: 200,
    // borderRadius: 10,
    // marginTop: 10,
  }
});

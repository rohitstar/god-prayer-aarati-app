 import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import ImageSilder from './slider/ImageSilder';
import { kedarnath, goldenTemple, vaishanoDevi, tirupati, kashi, dilvada, akshardham, meenakshi, shreeShailam, kandariya, brahdishwar, padmabhswami, yamnotri, amarnath, badrinath, mahabalipuram, jagannath, krishnaJanamBhumi, ramshram, gangotri, somnath, shridiSaiBaba, brahma, ujjain, duwarika, neelkanth, krishanbhavnamrat, rangnath, sabrimlay, harKiPodi, shankracharya, kailas, vaidhnath, sidhivinayak, bhimasankar, prem, beludMath, saniShignapur, nageshwar, chindbaram, mahabodhi, kamakhya, truvannamalai,  shravanbelgola, shreeNath, ghrasneshwar, virupaksh, chamudeshwari, bidla, lotus, konakra, trynabkeshwar, ranakpur, murudeshwar, aonkareshwar, lingraj, kalighat, dakshineshwar } from './constant/templeContent';

import { Card } from 'react-native-paper';
const DATA = [
  {
    id: "1",
    title: "केदारनाथ मन्दिर",
    image: require('../assets/temple/kedarnath.jpg'),
    content: kedarnath,
  },
  {
    id: "2",
    title: "स्वर्ण मंदिर अमृतसर",
    image: require('../assets/temple/golder.jpg'),
    content: goldenTemple,
  },
  {
    id: "3",
    title: "वैष्णो देवी मंदिर",
    image: require('../assets/temple/vaishnoDevi.jpg'),
    content: vaishanoDevi,
  },
  {
    id: "4",
    title: "तिरुपति मंदिर",
    image: require('../assets/temple/tirupati.jpg'),
    content: tirupati,
  },
  {
    id: "5", 
    title: " काशी विश्वनाथ मन्दिर",
    image: require('../assets/temple/kashiVishwnath.jpg'),
    content: kashi,
  },
  {
    id: "6",
    title: " दिलवाड़ा जैन मंदिर",
    image: require('../assets/temple/dilwara.jpg'),
    content: dilvada,
  },
  {
    id: "7",
    title: "अक्षरधाम मंदिर",
    image: require('../assets/temple/akshaedham.jpg'),
    content: akshardham,
  },
  {
    id: "8",
    title: " मीनाक्षी सुन्दरेश्वर मन्दिर",
    image: require('../assets/temple/meenakshi.jpg'),
    content:  meenakshi,
  },
  {
    id: "9",
    title: " श्री शैलम देवस्थानम",
    image: require('../assets/temple/srisailam-mallikarjuna.jpg'),
    content: shreeShailam,
  },
  {
    id: "10",
    title: " कन्दारिया महादेव", 
    image: require('../assets/temple/kandariya.jpg'),
    content: kandariya,
  },
  {
    id: "11",
    title: " बृहदीश्वर मन्दिर",
    image: require('../assets/temple/brihadeshwara.jpg'),
    content: brahdishwar,
  },
  {
    id: "12",
    title: " पद्मनाभस्वामी मंदिर",
    image: require('../assets/temple/padmanabhaswamy.jpg'),
    content: padmabhswami, 
  },
  {
    id: "13",
    title: "यमुनोत्री मंदिर",
    image: require('../assets/temple/yamnotri.jpeg.jpg'),
    content: yamnotri,
  },
  {
    id: "14",
    title: " अमरनाथ",
    image: require('../assets/temple/amarnath.jpg'),
    content: amarnath,
  },
  {
    id: "15",
    title: " बद्रीनाथ मन्दिर",
    image: require('../assets/temple/badrinath.jpg'),
    content: badrinath,
  },
  {
    id: "16",
    title: "महाबलिपुरम मंदिर",
    image: require('../assets/temple/mahabalipuram.jpg'),
    content: mahabalipuram, 
  },
  {
    id: "17",
    title: "जगन्नाथ मंदिर",
    image: require('../assets/temple/jagannath.jpg'),
    content: jagannath,
  },
  {
    id: "18",
    title: " कृष्ण जन्म भूमि",
    image: require('../assets/temple/krishnajanmmabhoomi.jpg'),
    content: krishnaJanamBhumi,
  },
  {
    id: "19",
    title: " रामेश्वरम तीर्थ",
    image: require('../assets/temple/rameshwar.jpg'),
    content: ramshram,
  },
  {
    id: "20",
    title: "गंगोत्री मंदिर",
    image: require('../assets/temple/gangotri.jpg'),
    content: gangotri,
  },
  {
    id: "21",
    title: "सोमनाथ मंदिर",
    image: require('../assets/temple/Somnath.jpeg.jpg'),
    content: somnath,
  },
  {
    id: "22",
    title: "शिरडी साईं बाबा",
    image: require('../assets/temple/saibaba.jpg'),
    content: shridiSaiBaba,
  },
  {
    id: "23",
    title: "ब्रह्मा मंदिर",
    image: require('../assets/temple/brahma.jpg'),
    content: brahma,
  },
  {
    id: "24",
    title: " उज्जैन का महाकालेश्वर मंदिर",
    image: require('../assets/temple/mahakaleshwar.jpg'),
    content: ujjain,
  },
  {
    id: "25",
    title: "द्वारका मंदिर",
    image: require('../assets/temple/dwarika.jpg'),
    content:  duwarika,
  },
  {
    id: "26",
    title: "नीलकंठ महादेव मंदिर",
    image: require('../assets/temple/neelkanthtemple.jpg'),
    content: neelkanth,
  },
  {
    id: "27",
    title: "अंतर्राष्ट्रीय कृष्णभावनामृत संघ",
    image: require('../assets/temple/krishnajanmmabhoomi.jpg'),
    content: krishanbhavnamrat,
  },
  {
    id: "28",
    title: "श्री रंगनाथस्वामी मंदिर",
    image: require('../assets/temple/sriranganathaswamy.jpg'),
    content: rangnath,
  },
  {
    id: "29",
    title: "सबरिमलय मंदिर ",
    image: require('../assets/temple/ayyappa.jpg'),
    content: sabrimlay,
  },
  {
    id: "30",
    title: "हर की पौड़ी",
    image: require('../assets/temple/harkipauri.jpg'),
    content: harKiPodi,
  },
  {
    id: "31",
    title: "शंकराचार्य मंदिर",
    image: require('../assets/temple/sankracharya.jpg'),
    content: shankracharya,
  },
  {
    id: "32",
    title: "कैलास मंदिर",
    image: require('../assets/temple/kailasa.jpg'),
    content: kailas,
  },
  {
    id: "33",
    title: "वैद्यनाथ मंदिर",
    image: require('../assets/temple/baidyanath.jpg'),
    content: vaidhnath,
  },
  {
    id: "34",
    title: "सिद्धिविनायक मंदिर",
    image: require('../assets/temple/shiddhivinayak.webp'),
    content: sidhivinayak,
  },
  {
    id: "35",
    title: "भीमाशंकर मंदिर",
    image: require('../assets/temple/bhimashankar.jpg'),
    content: bhimasankar,
  },
  {
    id: "36",
    title: "प्रेम मंदिर",
    image: require('../assets/temple/Premmandir.jpg'),
    content: prem,
  },
  {
    id: "37",
    title: "बेलुड़ मठ मंदिर",
    image: require('../assets/temple/belurmath.jpg'),
    content: beludMath,
  },
  {
    id: "38",
    title: "शनि शिंगणापुर मंदिर",
    image: require('../assets/temple/shanitemple.jpg'),
    content: saniShignapur,
  },
  {
    id: "39",
    title: "नागेश्वर मंदिर",
    image: require('../assets/temple/nageshwartemple.jpg'),
    content: nageshwar,
  },
  {
    id: "40",
    title: "चिदंबरम मंदिर",
    image: require('../assets/temple/thillainataraja.jpg'),
    content: chindbaram,
  },
  {
    id: "41",
    title: "महाबोधि विहार",
    image: require('../assets/temple/mahabodhi.jpg'),
    content: mahabodhi,
  },
  {
    id: "42",
    title: "माँ कामाख्या",
    image: require('../assets/temple/MaaKamakhya.jpg'),
    content: kamakhya,
  },
  {
    id: "43",
    title: "तिरुवन्नामलई",
    image: require('../assets/temple/annamalaiyar.jpg'),
    content: truvannamalai,
  },
  {
    id: "44",
    title: "श्रवणबेलगोला",
    image: require('../assets/temple/gomateshwara.jpg'),
    content: shravanbelgola,
  },
  {
    id: "45",
    title: "श्रीनाथजी मंदिर",
    image: require('../assets/temple/Shrinathji.jpg'),
    content: shreeNath,
  },
  {
    id: "46",
    title: "घृष्णेश्वर मंदिर",
    image: require('../assets/temple/grishneshwar.jpg'),
    content: ghrasneshwar,
  },
  {
    id: "47",
    title: "विरुपाक्ष मंदिर",
    image: require('../assets/temple/kedarnath.jpg'),
    content: virupaksh,
  },
  {
    id: "48",
    title: "चामुण्डेश्वरी मंदिर",
    image: require('../assets/temple/chamundeshwari.jpg'),
    content: chamudeshwari,
  },
  {
    id: "49",
    title: "बिड़ला मंदिर",
    image: require('../assets/temple/birlatemplejaipur.jpg'),
    content: bidla,
  },
  {
    id: "50",
    title: "कमल मंदिर",
    image: require('../assets/temple/Lotus.jpg'),
    content: lotus,
  },
  {
    id: "51",
    title: "कोणार्क मंदिर",
    image: require('../assets/temple/kedarnath.jpg'),
    content: konakra,
  },
  {
    id: "52",
    title: "रणकपुर जैन मंदिर",
    image: require('../assets/temple/ranakpur.jpg'),
    content: ranakpur,
  },
  {
    id: "53",
    title: "त्र्यंबकेश्वर मंदिर",
    image: require('../assets/temple/Trimbakeshwar.jpg'),
    content: trynabkeshwar,
  },
  {
    id: "54",
    title: "मुरुदेश्वर मंदिर",
    image: require('../assets/temple/murudeshwara.jpg'),
    content: murudeshwar,
  },
  {
    id: "55",
    title: "ओंकारेश्वर मंदिर",
    image: require('../assets/temple/omkareshwar.jpg'),
    content: aonkareshwar,
  },
  {
    id: "56",
    title: "लिंगराज मंदिर",
    image: require('../assets/temple/lingaraj.jpg'),
    content: lingraj,
  },
  {
    id: "57",
    title: "कालीघाट शक्तिपीठ",
    image: require('../assets/temple/kalighat.jpg'),
    content: kalighat,
  },
  {
    id: "58",
    title: "दक्षिणेश्वर मंदिर",
    image: require('../assets/temple/dakshineshwarkali.jpg'),
    content: dakshineshwar,
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}> 
  <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
  <Image style={{ height: 200, width: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} source={item.image} />
    <View style={styles.titles}>
    <Text style={styles.title}>{item.title}</Text>
    </View> 
  </View>
  </TouchableOpacity>
);

export default function TempleHomeScreen(props) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#fc802d";

    return (
      <Item
        item={item}
        onPress={() => props.navigation.navigate('Temples', {artiItemspass: item})}
        style={{ backgroundColor }}
      />
    );
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
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
    textAlign: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

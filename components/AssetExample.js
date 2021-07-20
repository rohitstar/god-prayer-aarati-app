import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function AssetExample(props) {
  // console.log('pass the data', props.route.params.artiItem.title);
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.logo} source={props.route.params.artiItem.image} />
      <Text style={styles.paragraph1}>
      {props.route.params.artiItem.title}
      </Text>
      
      <Text style={styles.paragraph2}>
      {props.route.params.artiItem?.content}
      </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  paragraph1: {
    // margin: 24,
    marginTop: 20,
    fontSize: 25,
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#fc802d',
    padding: 10,
    borderRadius: 10,
    color: '#fff'
  }, 
  paragraph2: {
    marginTop: 10,
      fontSize: 17,
  },
  logo: {
    height: 200,
    resizeMode: "contain",
    width: '100%',
  }
});
  // require('../../assets/aarti-img.png'),
  //       require('../../assets/mantra1.jpg'),
  //       require('../../assets/mantra2.jpg'),
  //       require('../../assets/god/img6.jpg'),
  //       require('../../assets/god/img14.jpg'),
  //       require('../../assets/god/img28.jpg'),
  //       require('../../assets/god/img5.jpg'),
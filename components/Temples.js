import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Gallery from 'react-native-image-gallery';
// import TrackPlayer from 'react-native-track-player';

export default function Tamples(props) {

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.logo} source={props.route.params.artiItemspass.image} />
      <Text style={styles.textStyle}>
      {props.route.params.artiItemspass.title}
      </Text>
      <Text style={styles.paragraph2}>
      {props.route.params.artiItemspass?.content}
      </Text>
    <View>
      
    </View>
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

  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10
  },
  //  paragraph1: {
  //   // margin: 24,
  //   marginTop: 20,
  //   fontSize: 20,
  //   width: '100%',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   backgroundColor: '#a503fc',
  //   padding: 10,
  //   borderRadius: 10,
  //   color: '#fff'
  // },
  paragraph2: {
    marginTop: 20,
      fontSize: 17,
      // textAlign: 'center'
  },
  logo: {
    height: 200,
    resizeMode: "contain",
    width: '100%',
  }
});

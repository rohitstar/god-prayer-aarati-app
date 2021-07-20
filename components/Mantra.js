import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function Mantra(props) {
  // console.log('pass the data', props.route.params.artiItems.title);
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.logo} source={props.route.params.artiItems.image} />
      <Text style={styles.paragraph1}>
      {props.route.params.artiItems.title}
      </Text>
      <Text style={styles.paragraph2}>
      {props.route.params.artiItems?.content}
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
    fontSize: 20,
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#a503fc',
    padding: 10,
    borderRadius: 10,
    color: '#fff'
  },
  paragraph2: {
    marginTop: 20,
      fontSize: 17,
  },
  logo: {
    height: 200,
    resizeMode: "contain",
    width: '100%',
  }
});

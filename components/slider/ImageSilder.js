import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
 
export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/aarti-img.png'),
        require('../../assets/mantra1.jpg'),
        require('../../assets/mantra2.jpg'),
        require('../../assets/god/img6.jpg'),
        require('../../assets/god/img14.jpg'),
        require('../../assets/god/img28.jpg'),
        require('../../assets/god/img5.jpg'),
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
  }
});
import React from 'react'
import {
  Text,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

var styles = {
  wrapper: {
    backgroundColor: 'transparent'
  },
  innerSwiper: {
    width: window.width,
    height: window.height / 3,
    marginTop: 60,
    backgroundColor: '#92BBD9'
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () =>
  <Swiper style={styles.wrapper} showsButtons>

    <View style={styles.slide1}>
      <View style={styles.innerSwiper}>
          <Swiper style={styles.wrapper} showsButtons>

            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>

            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>

            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
          </View>

          </Swiper>
      </View>
    </View>

    <View style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>

    <View style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>

  </Swiper>

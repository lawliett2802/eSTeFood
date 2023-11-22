import React, {useRef, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  LogBox,
  Animated,
} from 'react-native';
import {
  SearchNormal1,
  NotificationCircle,
  Sun1,
  Moon,
  Book1,
  People,
  Star,
  User,
} from 'iconsax-react-native';
import {Navigation} from 'react-native-navigation';
import logo from '../../assets/images/logo.png';
import bubur from '../../assets/images/bubur.jpg';
import gudeg from '../../assets/images/gudeg.jpeg';
import sate from '../../assets/images/sate.jpg';

LogBox.ignoreAllLogs(true);

const win = Dimensions.get('window');

const Status = () => {
  return <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>;
};

export default function App() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -20],
  });
  return (
    <View style={styles.container}>
      <Status />
      <Animated.View
        style={[
          styles.header,
          {transform: [{translateY: translateY}]},
        ]}></Animated.View>
      <Animated.Image
        style={[styles.logoHeader, {transform: [{translateY: translateY}]}]}
        source={logo}
      />
      <Animated.View
        style={[
          styles.searchContainer,
          {transform: [{translateY: translateY}]},
        ]}>
        <SearchNormal1 variant="Linear" color="grey" style={{marginLeft: 12}} />
        <TextInput
          style={styles.search}
          placeholder="Cari Resep"
          placeholderTextColor={'grey'}></TextInput>
      </Animated.View>
      <Animated.Text
        style={[styles.iklanCategory, {transform: [{translateY: translateY}]}]}>
        Pencarian Resep
      </Animated.Text>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        style={{marginBottom: -42,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 142],
                outputRange: [0, -50],
              }),
            },
          ],
        }}>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Resep Bubur 1</Text>
          <Image style={styles.iklanImage} source={bubur} />
          <Text style={styles.iklanTextHeader}>Masak sendiri lebih asyik</Text>
          <Text style={styles.iklanTextSponsored}>Sarapan</Text>
        </View>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Resep Bubur 1</Text>
          <Image style={styles.iklanImage} source={bubur} />
          <Text style={styles.iklanTextHeader}>Masak sendiri lebih asyik</Text>
          <Text style={styles.iklanTextSponsored}>Sarapan</Text>
        </View>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Resep Bubur 1</Text>
          <Image style={styles.iklanImage} source={bubur} />
          <Text style={styles.iklanTextHeader}>Masak sendiri lebih asyik</Text>
          <Text style={styles.iklanTextSponsored}>Sarapan</Text>
        </View>
        <View style={styles.iklanContainer2}>
          <Text style={styles.iklanHeader}>Resep Bubur 1</Text>
          <Image style={styles.iklanImage} source={bubur} />
          <Text style={styles.iklanTextHeader}>Masak sendiri lebih asyik</Text>
          <Text style={styles.iklanTextSponsored}>Sarapan</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 180,
    backgroundColor: '#eaeaea',
  },

  logoHeader: {
    width: win.width,
    height: 55,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'flex-start',
    top: 45,
    left: 0, // Mengatur posisi ke sisi kiri
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 15,
    borderRadius: 20,
    marginTop: -50,
  },

  search: {
    marginHorizontal: 8,
    color: 'grey',
    width: win.width - 112,
  },

  categoryContainer: {
    marginHorizontal: 32,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center', // Menengahkan secara vertikal
    justifyContent: 'center', // Menengahkan secara horizontal
  },

  categoryContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    padding: 6,
    marginHorizontal: 4,
  },

  category: {
    marginHorizontal: 4,
    color: 'black',
    fontSize: 12,
  },

  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 112,
    marginHorizontal: 32,
  },

  fiturContainer2: {
    alignItems: 'center',
    marginTop: 14,
  },

  fiturText: {
    color: 'black',
    marginTop: 6,
    fontSize: 12,
  },

  iklanContainer: {
    marginTop: 0,
    height: 300,
    marginHorizontal: 8,
  },

  iklanContainer2: {
    marginTop: 2,
    marginHorizontal: 8,
  },

  iklanCategory: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 15,
    marginHorizontal: 14,
  },

  iklanHeader: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: 14,
  },

  iklanImage: {
    marginTop: 6,
    borderRadius: 15,
    width: win.width - 45,
    height: 212,
    marginHorizontal: 14,
  },

  iklanTextHeader: {
    fontSize: 16,
    marginTop: 6,
    color: 'black',
    marginHorizontal: 14,
    // fontWeight: 'bold',
  },

  iklanTextSponsored: {
    marginTop: 2,
    color: 'grey',
    marginHorizontal: 14,
  },

  headerText: {
    color: 'black',
    fontSize: 16,
  },
});

// Account
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  DollarCircle,
  Coin,
  Personalcard,
  Heart,
  Lock,
  Message,
} from 'iconsax-react-native';
import profile from '../../assets/images/kobo.jpg';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {formatNumber} from '../../utils/formatNumber';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {formatDate} from '../../utils/formatDate';

export default function Account() {
  const navigation = useNavigation();
   const handleLogout = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={profile} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Ludytio Akhsanul In'am</Text>
            <Text style={styles.profileAccount}>@Lawliette</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Profile Setting</Text>
        <TouchableOpacity style={styles.menuContent}>
          <View style={styles.menuInfo}>
            <Personalcard size={20} variant="Linear" color="black" />
            <Text style={styles.menuText}>Info Akun</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuContent}>
          <View style={styles.menuInfo}>
            <Heart size={20} variant="Linear" color="black" />
            <Text style={styles.menuText}>Resep Saya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuContent}>
          <View style={styles.menuInfo}>
            <Lock size={20} variant="Linear" color="black" />
            <Text style={styles.menuText}>Keamanan Akun</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuContent}>
          <View style={styles.menuInfo}>
            <Message size={20} variant="Linear" color="black" />
            <Text style={styles.menuText}>Saran dan Masukkan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.buttonSignOut}>
          <Text style={styles.buttonText}>Keluar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Versi 6.9</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  headerContainer: {
    backgroundColor: '#FF5757',
    height: 224,
    justifyContent: 'center',
  },

  profileContainer: {
    marginTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  profileImage: {
    height: 112,
    width: 112,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: 'white',
  },

  profileInfo: {
    flexDirection: 'column',
  },

  profileName: {
    marginLeft: 16,
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },

  profileAccount: {
    marginTop: 2,
    marginLeft: 18,
    color: 'white',
    fontSize: 16,
  },

  saldoContainer: {
    justifyContent: 'space-between',
    padding: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 4,
    marginHorizontal: 8,
    marginTop: -12,
    borderRadius: 12,
  },

  saldoInfoContainer: {
    backgroundColor: '#f1f2f3',
    width: 128,
    borderRadius: 8,
    padding: 6,
  },

  saldoTittle: {
    color: 'grey',
    fontSize: 15,
  },

  saldoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },

  saldoText: {
    color: 'black',
    fontWeight: '700',
  },

  appIcon: {
    height: 24,
    width: 30,
    resizeMode: 'contain',
    borderRadius: 8,
  },

  menuContainer: {
    padding: 8,
    marginTop: 16,
    marginHorizontal: 8,
  },

  menuContent: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
  },

  menuInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.6,
  },

  menuText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 8,
  },

  footerContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerText: {
    color: 'grey',
  },

  buttonSignOut: {
    marginTop: 16,
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: '#FF5757',
    borderRadius: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    letterSpacing: 0.4,
  },
});

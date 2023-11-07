import React from 'react'
import {Splash} from './src/screens'
import {Home} from './src/screens'
import {Discover} from './src/screens'
import {Account} from './src/screens'

export default function App() {
  return <Account />
}

// import React, {useState} from 'react';
// import {
//   Dimensions,
//   ScrollView,
//   StyleSheet,
//   TextInput,
//   View,
//   StatusBar,
//   Text,
//   Image,
//   Touchable,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   SearchNormal1,
//   NotificationCircle,
//   Sun1,
//   Moon,
//   Book1,
//   People,
//   Star,
//   User,
// } from 'iconsax-react-native';
// import {Navigation} from 'react-native-navigation';
// import logo from './src/assets/images/logo.png';
// import bubur from './src/assets/images/bubur.jpg';
// import gudeg from './src/assets/images/gudeg.jpeg';
// import sate from './src/assets/images/sate.jpg';
// const win = Dimensions.get('window');

// const Status = () => {
//   return <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>;
// };

// export default function App() {
//   const [choose, setChoose] = useState(1);
//   return (
//     <ScrollView style={styles.container}>
//       <Status />
//       <View style={styles.header}></View>
//       <Image style={styles.logoHeader} source={logo} />
//       <View style={styles.searchContainer}>
//         <SearchNormal1 variant="Linear" color="grey" style={{marginLeft: 12}} />
//         <TextInput
//           style={styles.search}
//           placeholder="Cari Resep"
//           placeholderTextColor={'grey'}></TextInput>
//       </View>
//       <View style={styles.categoryContainer}>
//         <TouchableOpacity
//           style={[
//             styles.categoryContainer2,
//             {backgroundColor: choose == 1 ? '#FF5757' : '#f3f3f3'},
//           ]}
//           onPress={() => setChoose(1)}>
//           <NotificationCircle
//             size={16}
//             variant="Linear"
//             color={choose == 1 ? '#eaeaea' : 'black'}
//           />
//           <Text
//             style={[
//               styles.category,
//               {
//                 fontWeight: choose == 1 ? '600' : 'normal',
//                 color: choose == 1 ? '#eaeaea' : 'black',
//               },
//             ]}>
//             Sarapan
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.categoryContainer2,
//             {backgroundColor: choose == 2 ? '#FF5757' : '#f3f3f3'},
//           ]}
//           onPress={() => setChoose(2)}>
//           <Sun1
//             size={16}
//             variant="Linear"
//             color={choose == 2 ? '#eaeaea' : 'black'}
//           />
//           <Text
//             style={[
//               styles.category,
//               {
//                 fontWeight: choose == 2 ? '600' : 'normal',
//                 color: choose == 2 ? '#eaeaea' : 'black',
//               },
//             ]}>
//             Makan Siang
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.categoryContainer2,
//             {backgroundColor: choose == 3 ? '#FF5757' : '#f3f3f3'},
//           ]}
//           onPress={() => setChoose(3)}>
//           <Moon
//             size={16}
//             variant="Linear"
//             color={choose == 3 ? '#eaeaea' : 'black'}
//           />
//           <Text
//             style={[
//               styles.category,
//               {
//                 fontWeight: choose == 3 ? '600' : 'normal',
//                 color: choose == 3 ? '#eaeaea' : 'black',
//               },
//             ]}>
//             Makan Malam
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.fiturContainer}>
//         <TouchableOpacity style={styles.fiturContainer2}>
//           <Book1 size={54} variant="Linear" color="black" />
//           <Text style={styles.fiturText}>Resep</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.fiturContainer2}>
//           <People size={54} variant="Linear" color="black" />
//           <Text style={styles.fiturText}>Komunitas</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.fiturContainer2}>
//           <Star size={54} variant="Linear" color="black" />
//           <Text style={styles.fiturText}>Rating</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.fiturContainer2}>
//           <User size={54} variant="Linear" color="black" />
//           <Text style={styles.fiturText}>Akun</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.iklanCategory}>Resep Untuk Sarapan</Text>
//       <ScrollView horizontal style={styles.iklanContainer}>
//         <View style={styles.iklanContainer2}>
//           <Text style={styles.iklanHeader}>Resep Bubur 1</Text>
//           <Image style={styles.iklanImage} source={bubur} />
//           <Text style={styles.iklanTextHeader}>Masak sendiri lebih asyik</Text>
//           <Text style={styles.iklanTextSponsored}>Sarapan</Text>
//         </View>
//         <View style={styles.iklanContainer2}>
//           <Text style={styles.iklanHeader}>Resep Bubur 2</Text>
//           <Image style={styles.iklanImage} source={bubur} />
//           <Text style={styles.iklanTextHeader}>Masak sendiri lebih asyik</Text>
//           <Text style={styles.iklanTextSponsored}>Sarapan</Text>
//         </View>
//       </ScrollView>
//       <Text style={styles.iklanCategory}>Resep Untuk Makan Siang</Text>
//       <ScrollView horizontal style={styles.iklanContainer}>
//         <View style={styles.iklanContainer2}>
//           <Text style={styles.iklanHeader}>Resep Gudeg 1</Text>
//           <Image style={styles.iklanImage} source={gudeg} />
//           <Text style={styles.iklanTextHeader}>Lebih Hemat</Text>
//           <Text style={styles.iklanTextSponsored}>Makan Siang</Text>
//         </View>
//         <View style={styles.iklanContainer2}>
//           <Text style={styles.iklanHeader}>Resep Gudeg 2</Text>
//           <Image style={styles.iklanImage} source={gudeg} />
//           <Text style={styles.iklanTextHeader}>Lebih Hemat</Text>
//           <Text style={styles.iklanTextSponsored}>Makan Siang</Text>
//         </View>
//       </ScrollView>
//       <Text style={styles.iklanCategory}>Resep Untuk Makan Malam</Text>
//       <ScrollView horizontal style={styles.iklanContainer}>
//       <View style={styles.iklanContainer2}>
//           <Text style={styles.iklanHeader}>Resep Sate Madura 1</Text>
//           <Image style={styles.iklanImage} source={sate} />
//           <Text style={styles.iklanTextHeader}>Lebih sehat</Text>
//           <Text style={styles.iklanTextSponsored}>Makan Malam</Text>
//         </View>
//         <View style={styles.iklanContainer2}>
//           <Text style={styles.iklanHeader}>Resep Sate Madura 2</Text>
//           <Image style={styles.iklanImage} source={sate} />
//           <Text style={styles.iklanTextHeader}>Lebih sehat</Text>
//           <Text style={styles.iklanTextSponsored}>Makan Malam</Text>
//         </View>
//       </ScrollView>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },

//   header: {
//     height: 180,
//     backgroundColor: '#eaeaea',
//   },

//   logoHeader: {
//     width: win.width,
//     height: 55,
//     resizeMode: 'contain',
//     position: 'absolute',
//     alignSelf: 'flex-start',
//     top: 45,
//     left: 0, // Mengatur posisi ke sisi kiri
//   },

//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: 40,
//     backgroundColor: 'white',
//     elevation: 3,
//     marginHorizontal: 15,
//     borderRadius: 20,
//     marginTop: -50,
//   },

//   search: {
//     marginHorizontal: 8,
//     color: 'grey',
//     width: win.width - 112,
//   },

//   categoryContainer: {
//     marginHorizontal: 32,
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center', // Menengahkan secara vertikal
//     justifyContent: 'center', // Menengahkan secara horizontal
//   },

//   categoryContainer2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f3f3f3',
//     borderRadius: 16,
//     padding: 6,
//     marginHorizontal: 4,
//   },

//   category: {
//     marginHorizontal: 4,
//     color: 'black',
//     fontSize: 12,
//   },

//   fiturContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     height: 112,
//     marginHorizontal: 32,
//   },

//   fiturContainer2: {
//     alignItems: 'center',
//     marginTop: 14,
//   },

//   fiturText: {
//     color: 'black',
//     marginTop: 6,
//     fontSize: 12,
//   },

//   iklanContainer: {
//     marginTop: 0,
//     height: 300,
//     marginHorizontal: 8,
//   },

//   iklanContainer2: {
//     marginTop: 2,
//     marginHorizontal: 8,
//   },

//   iklanCategory: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 22,
//     marginTop: 15,
//     marginHorizontal: 14,
//   },

//   iklanHeader: {
//     color: 'black',
//     fontWeight: '500',
//     fontSize: 20,
//   },

//   iklanImage: {
//     marginTop: 6,
//     borderRadius: 15,
//     width: win.width - 64,
//     height: 212,
//   },

//   iklanTextHeader: {
//     fontSize: 16,
//     marginTop: 6,
//     color: 'black',
//     // fontWeight: 'bold',
//   },

//   iklanTextSponsored: {
//     marginTop: 2,
//     color: 'grey',
//   },

//   headerText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

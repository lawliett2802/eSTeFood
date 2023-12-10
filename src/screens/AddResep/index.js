import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const winWidht = Dimensions.get('screen').width;
const winHeight = Dimensions.get('screen').height;

export default function AddResep() {
  const nav = useNavigation();
  const [inputTitle, setInputTitle] = useState();
  const [inputDesc, setInputDesc] = useState();
  const [inputImage, setInputImage] = useState();
  const [inputName, setInputName] = useState();

  async function postData() {
    try {
      const data = await fetch(
        'https://65645833ceac41c0761df458.mockapi.io/este/resep',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            title: inputTitle,
            image: inputImage,
            desc: inputDesc,
            name: inputName,
          }),
        },
      );
      console.log(await data.json());
      nav.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>Tambahkan Resep</Text>
      </View>
      <View style={styles.cardContent}>
        <TextInput
          style={styles.cardTextInput}
          autoFocus
          value={inputTitle}
          onChangeText={text => setInputTitle(text)}
          placeholder="Judul Resep"
          placeholderTextColor="#DDD"
        />
        <TextInput
          style={styles.cardTextInput}
          autoFocus
          value={inputImage}
          onChangeText={text => setInputImage(text)}
          placeholder="Gambar Makanan"
          placeholderTextColor="#DDD"
        />
        <TextInput
          style={styles.cardTextInput}
          multiline
          numberOfLines={3}
          textAlignVertical="top"
          value={inputDesc}
          onChangeText={text => setInputDesc(text)}
          placeholder="Deskripsi Singkat"
          placeholderTextColor="#DDD"
        />
        <TextInput
          style={styles.cardTextInput}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          value={inputName}
          onChangeText={text => setInputName(text)}
          placeholder="Bahan dan Cara"
          placeholderTextColor="#DDD"
        />
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.cardButton} onPress={postData}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 64,
  },
  cardHeader: {
    justifyContent: 'center',
    marginHorizontal: 16,
    width: winWidht - 32,
    height: 64,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardContent: {
    padding: 8,
    width: winWidht - 32,
    borderColor: '#DDD',
    borderWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 16,
  },
  cardTextInput: {
    borderRadius: 4,
    borderColor: '#DDD',
    borderWidth: 1,
    color: '#000',
    paddingLeft: 8,
    fontSize: 16,
    marginBottom: 8,
  },
  cardFooter: {
    width: winWidht - 32,
    marginHorizontal: 16,
    padding: 8,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  cardButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    width: winWidht - 48,
    backgroundColor: '#FF5757',
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {Add, AddSquare} from 'iconsax-react-native';

const winWidht = Dimensions.get('screen').width;
const winHeight = Dimensions.get('screen').height;

export default function EditResep({route}) {
  const {resepId} = route.params;
  const [image, setImage] = useState(null);
  const [oldImage, setoldImage] = useState(null);
  const nav = useNavigation();
  const [resepData, setResepData] = useState({
    title: '',
    name: '',
    desc: '',
  });

  const handleChange = (key, value) => {
    setResepData({
      ...resepData,
      [key]: value,
    });
  };
  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1500,
      height: 1500,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('resep')
      .doc(resepId)
      .onSnapshot(documentSnapshot => {
        const resep = documentSnapshot.data();
        if (resep) {
          console.log('Blog data: ', resep);
          setResepData(resep);
          setImage(resep.image);
          setoldImage(resep.image);
        } else {
          console.log(`Blog with ID ${resepId} not found.`);
        }
      });
    return () => subscriber();
  }, [resepId]);

  const handleUpdate = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`resepImages/${filename}`);
    try {
      if (image !== oldImage && oldImage) {
        const oldImageRef = storage().refFromURL(oldImage);
        await oldImageRef.delete();
      }
      if (image !== oldImage) {
        await reference.putFile(image);
      }
      const url =
        image !== oldImage ? await reference.getDownloadURL() : oldImage;
      await firestore().collection('resep').doc(resepId).update({
        title: resepData.title,
        image: url,
        desc: resepData.desc,
        name: resepData.name,
      });
      console.log('Blog Updated!');
      nav.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await firestore()
        .collection('resep')
        .doc(resepId)
        .delete()
        .then(() => {
          console.log('Resep deleted!');
        });
      if (image) {
        const imageRef = storage().refFromURL(image);
        await imageRef.delete();
      }
      console.log('Resep deleted!');
      setResepData(null);
      nav.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>Tambahkan Resep</Text>
      </View>
      <View style={styles.cardContent}>
        <TextInput
          style={styles.cardTextInput}
          autoFocus
          value={resepData.title}
          onChangeText={text => handleChange('title', text)}
          placeholder="Judul Resep"
          placeholderTextColor="#DDD"
        />
        {image ? (
          <View style={{position: 'relative'}}>
            <Image
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
              }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: '#000',
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={'#000'}
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                styles.cardTextInput,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color={'#000'} variant="Linear" size={42} />
              <Text
                style={{
                  fontSize: 12,
                  color: '#000',
                }}>
                tambah gambar makanan
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <TextInput
          style={styles.cardTextInput}
          multiline
          numberOfLines={3}
          textAlignVertical="top"
          value={resepData.desc}
          onChangeText={text => handleChange('desc', text)}
          placeholder="Deskripsi Singkat"
          placeholderTextColor="#DDD"
        />
        <TextInput
          style={styles.cardTextInput}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          value={resepData.name}
          onChangeText={text => handleChange('name', text)}
          placeholder="Bahan dan Cara"
          placeholderTextColor="#DDD"
        />
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.cardButton} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cardButton, {marginTop: 20}]}
          onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
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

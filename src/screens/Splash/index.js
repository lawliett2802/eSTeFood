// Splash
import React from 'react'
import { StyleSheet, View, Image, StatusBar} from 'react-native'
import logo from '../../assets/images/logo.png'

export default function Splash() {
  return (
      <View style={ styles.container }>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <Image style={ styles.logo } source={ logo }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AA13',
  },

  logo: {
    width: 256,
    height:256,
    resizeMode: 'contain',
  },
})

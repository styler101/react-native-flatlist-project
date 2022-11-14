import React from 'react';
import instagramLogo from '../../assets/img/logo.png';
import sendLogo from '../../assets/img/send.png';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.instagramContainer}>
        <Image source={instagramLogo} style={styles.instagramImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendContainer}>
        <Image source={sendLogo} style={styles.sendImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 24,
    shadowColor: 'rgba(0,0,0,0.3)',
    elevation: 1,
  },

  instagramContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },

  instagramImage: {
    width: 130,
    height: 20,
    resizeMode: 'contain',
  },

  sendContainer: {
    justifyContent: 'flex-end',
  },
  sendImage: {
    width: 20,
    height: 20,
  },
});
export default Header;

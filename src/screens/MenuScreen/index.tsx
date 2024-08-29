import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation, onClose }) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={() => { onClose && onClose(); navigation.navigate('HomeScreen'); }}>
        <Text style={styles.menuText}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => { onClose && onClose(); navigation.navigate('LoginScreen'); }}>
        <Text style={styles.menuText}>Favoriler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => { onClose && onClose(); navigation.navigate('LoginScreen'); }}>
        <Text style={styles.menuText}>Sepetim</Text>
      </TouchableOpacity>
      
      {/* Giriş Yap ve Kaydol Butonları */}
      <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.authButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.authButtonText}>Üye Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#FA0050',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    padding: 15,
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
  },
  authButton: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  authButtonText: {
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MenuScreen;

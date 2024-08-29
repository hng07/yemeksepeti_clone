import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

function FavoritesScreen() {
  return (
    <View style={styles.container}>
        <Image
        source={require('../../../assets/favori.jpg')}
        style={{width:200,height:200}}
        resizeMode="contain"/>
      <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Favori mağazanız yok</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    backgroundColor:'#e5e5e5'
  },
});

export default FavoritesScreen;
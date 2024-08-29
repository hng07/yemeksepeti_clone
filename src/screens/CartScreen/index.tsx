import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

function CartScreen() {
  return (
    <View style={styles.container}>
        <Image
        source={require('../../../assets/logo1.jpg')}
        style={{width:200,height:200}}
        resizeMode="contain"/>
      <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Sepetiniz şu an boş görünüyor</Text>
      
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

export default CartScreen;
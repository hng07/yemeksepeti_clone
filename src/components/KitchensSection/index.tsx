import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

function KitchensSection() {
  
  const kitchens = [
    { id: 1, name: 'Pizza', image: require('../../../assets/pizza.jpeg'), backgroundColor: '#f3f3c3' },
    { id: 2, name: 'Tavuk', image: require('../../../assets/tavuk.jpg'), backgroundColor: '#f3d3a3' },
    { id: 3, name: 'Kebap', image: require('../../../assets/kebap.jpg'), backgroundColor: '#f3a3b3' },
    { id: 4, name: 'Pide', image: require('../../../assets/pide.jpeg'), backgroundColor: '#f3a3e3' },
    { id: 5, name: 'Çiğ Köfte', image: require('../../../assets/cigkofte.jpg'), backgroundColor: '#a3f3b3' },
    { id: 6, name: 'Döner', image: require('../../../assets/doner.jpeg'), backgroundColor: '#f3f3c3' },
    { id: 7, name: 'Hamburger', image: require('../../../assets/hamburger.jpg'), backgroundColor: '#f3d3a3' },
    { id: 8, name: 'Tatlı', image: require('../../../assets/pasta.jpg'), backgroundColor: '#f3a3b3' },
    { id: 9, name: 'Kahve', image: require('../../../assets/kahve.jpg'), backgroundColor: '#f3a3e3' },
    
  ];

  return (
    <View style={styles.kitchensSection}>
      <Text style={styles.sectionTitle}>Mutfaklar</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {kitchens.map((kitchen) => (
          <View key={kitchen.id} style={[styles.kitchenCard, { backgroundColor: kitchen.backgroundColor }]}>
            <Image source={kitchen.image} style={styles.kitchenImage} />
            <Text style={styles.kitchenName}>{kitchen.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  kitchensSection: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  kitchenCard: {
    width: 100,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 10,
  },
  kitchenImage: {
    width: 65,
    height: 65,
    marginBottom: 5,
  },
  kitchenName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
});

export default KitchensSection;

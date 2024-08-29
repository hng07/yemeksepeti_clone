import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

function BrandsSection() {
  
  const brands = [
    { id: 1, name: 'KFC', image: require('../../../assets/kfc.png'), backgroundColor: '#e4042c' },
    { id: 2, name: 'Köfteci Yusuf', image: require('../../../assets/kofteci.png'), backgroundColor: '#FF7F00' },
    { id: 3, name: 'Burger King', image: require('../../../assets/burger.png'), backgroundColor: '#f4ebdc' },
    { id: 4, name: 'Starbucks', image: require('../../../assets/Starbucks.png'), backgroundColor: '#fffff' },
    { id: 5, name: 'McDonald\'s', image: require('../../../assets/Mc.jpg'), backgroundColor: '#e61300' },
    { id: 6, name: 'Popeyes', image: require('../../../assets/popeyes.jpg'), backgroundColor: '#fff' },
    { id: 7, name: 'Little Caesars Pizza', image: require('../../../assets/little.png'), backgroundColor: '#ff5a01' },
    
  ];

  return (
    <View style={styles.brandsSection}>
      <Text style={styles.sectionTitle}>Popüler Markalar</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {brands.map((brand) => (
          <View key={brand.id} style={[styles.brandCard, { backgroundColor: brand.backgroundColor }]}>
            <Image source={brand.image} style={styles.brandImage} />
            <Text style={styles.brandName}>{brand.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  brandsSection: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  brandCard: {
    width: 100,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 10,
  },
  brandImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  brandName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
});

export default BrandsSection;

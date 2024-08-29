import React from 'react';
import { View, Text, ScrollView } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface Restaurant {
  id: string;
  name: string;
  address: string;
  menuItems: MenuItem[];
}

interface RestoranDetayProps {
  route: {
    params: {
      restaurant: Restaurant;
    };
  };
}

const RestoranDetay: React.FC<RestoranDetayProps> = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{restaurant.name}</Text>
      <Text style={{ marginBottom: 20 }}>{restaurant.address}</Text>
      {restaurant.menuItems.map((item) => (
        <View key={item.id} style={{ marginBottom: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{item.price} TL</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default RestoranDetay;
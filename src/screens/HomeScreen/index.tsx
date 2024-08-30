import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import styles from './style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import KitchensSection from '../../components/KitchensSection';
import BrandsSection from '../../components/BrandsSection';
import CampaignsSection from '../../components/CampaignsSection';
import RestoranSection from '../../components/RestoranSection'

const GET_DATA = gql`
  query {
    allRestaurants {
      id
      name
      address
      menuItems {
        id
        name
        description
        price
      }
    }
  }
`;

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

interface HomeScreenProps {
  navigation: any; // Tipi daha da belirgin hale getirmek için uygun bir tip belirleyin
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const { loading, error, data } = useQuery<{ allRestaurants: Restaurant[] }>(GET_DATA);

  if (loading) return <Text>Yükleniyor...</Text>;
  if (error) return <Text>Hata: {error.message}</Text>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerMain}>
        <View style={styles.headerOne}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
            <Octicons name="three-bars" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 18, paddingRight: 25 }}>Pınarbaşı AR-GE 2 {"\n"} Antalya/Konyaaltı</Text>
          <View style={styles.headerOneView}>
            <AntDesign name="hearto" size={24} color="#fff" onPress={() => navigation.navigate('FavoritesScreen')} />
          </View>
          <View style={styles.headerOneViewTwo}>
            <MaterialCommunityIcons name="shopping-outline" size={24} color="#fff" onPress={() => navigation.navigate('CartScreen')} />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Restoran veya mağaza arayın"
            autoCorrect={false}
            autoCapitalize='none'
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>
      <ScrollView style={{ paddingBottom: 120 }}>
        <CampaignsSection />
        <KitchensSection />
        <BrandsSection />
        <RestoranSection/>
        {data?.allRestaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            onPress={() => navigation.navigate('RestoranDetay', { restaurant })}
          >
            <View style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ddd' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{restaurant.name}</Text>
              <Text>{restaurant.address}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
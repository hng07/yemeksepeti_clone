import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

function CampaignsSection() {
  
  const campaigns = [
    { id: 1, image: require('../../../assets/kampanya1.jpg') },
    { id: 2, image: require('../../../assets/kampanya2.jpg') },
    { id: 3, image: require('../../../assets/kampanya3.jpg') },
    { id: 4, image: require('../../../assets/kampanya4.png') },
  ];

  return (
    <View style={styles.campaignsSection}>
      <Text style={styles.sectionTitle}>Kampanyalar</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {campaigns.map((campaign) => (
          <View key={campaign.id} style={styles.campaignCard}>
            <Image source={campaign.image} style={styles.campaignImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  campaignsSection: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  campaignCard: {
    width: 200,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  campaignImage: {
    width: 200,
    height: 100,
    marginBottom: 5,
  },
});

export default CampaignsSection;

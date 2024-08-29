import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

function RestoranSection() {
    return (
        <View style={styles.restoranSection}>
            <Text style={styles.title}>Restoranlar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    restoranSection: {
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})
export default RestoranSection;
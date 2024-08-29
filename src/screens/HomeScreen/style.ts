import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    headerMain: {
        height: height * 0.13,
        backgroundColor: '#FA0050',
    },
    headerOne: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%',
        justifyContent: 'space-between',
    },
    headerOneView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:'3%',
    },
    headerOneViewTwo:{
        padding:15
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 8,
        margin: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        color: '#000',
    },
    menu: {
        backgroundColor: '#333',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        paddingTop: 50,
      },
})

export default styles;
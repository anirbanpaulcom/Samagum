import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import { Size } from '../../../constants'
import Svg from '../../../assets/svg'
import MText from '../../../components/Text'
import { Colors } from '../../../styles'

export default function SearchBar() {
    return (
        <SpaceBetweenRow style={styles.searchContainer}>
            <Svg.SearchBIcon width="24" />
            <View style={styles.divider} />
            <TextInput
                placeholder='Search.'
                placeholderTextColor="#000"
                onChangeText={(val) => { }}
                style={styles.searchInput}
                onPressIn={() => { }}
            />
            <TouchableOpacity onPress={() => { }} style={styles.filter}>
                <Row>
                    <Svg.FilterIcon />
                    <MText style={styles.Filters}>Filters</MText>
                </Row>
            </TouchableOpacity>
        </SpaceBetweenRow>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        width: Size.wWidth / 1.1,
        alignSelf: "center",
        borderRadius: 6,
        height: 51,
        backgroundColor: "#FFF",
        // paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10
    },
    divider: {
        width: 1,
        height: 20,
        backgroundColor: Colors.primary,
        opacity: 0.2,
        marginHorizontal: -12,
        // marginRight: -12
    },
    searchInput: {
        fontSize: 16,
        fontWeight: "300",
        color: "#FFF",
        opacity: 0.3,
        width: Size.wWidth / 1.9
    },
    filter: {
        backgroundColor: Colors.primary,
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 30
    },
    Filters: {
        fontSize: 12,
        fontWeight: "400",
        color: "#FFF",
        marginLeft: 6
    }
})
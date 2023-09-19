import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SpaceBetweenRow } from '../../../components/Wrapper'
import Svg from '../../../assets/svg'
import MText from '../../../components/Text'

export default function ExploreGroups() {
    return (
        <SpaceBetweenRow style={styles.container}>
            <Svg.SearchBIcon />
            <View>
                <MText style={styles.title}>Explore groups you may like</MText>
                <MText style={styles.subTitle}>Find groups which match your interests</MText>
            </View>
            <Svg.ArrowRightIcon />
        </SpaceBetweenRow>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 9,
        shadowColor: "#CCC",
        borderRadius: 15,
        backgroundColor: "#FFF",
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 8,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000"
    },
    subTitle: {
        fontSize: 10,
        fontWeight: "400",
        color: "#000"
    }
})
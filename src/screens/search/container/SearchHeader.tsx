import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Row } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import Svg from '../../../assets/svg'

export default function SearchHeader() {
    return (
        <View style={styles.container}>
            <Row>
                <TouchableOpacity>
                    <Svg.BackIcon />
                </TouchableOpacity>
                <MText style={styles.title}>Search</MText>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%", height: 56,
        paddingHorizontal: 16,
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000",
        marginLeft: 14,
    },
})
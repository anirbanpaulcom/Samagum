import { View, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import images from '../../../assets/images'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import HeaderLeft from '../../../components/HeaderLeft'
import MText from '../../../components/Text'
import Svg from '../../../assets/svg'
import { Styles } from '../../../styles'

export default function EventDetailsHeader() {
    return (
        <ImageBackground
            source={images.eventDetails}
            style={{ width: "100%", height: 244, paddingTop: 32 }}
        >
            <SpaceBetweenRow>
                <Row>
                    <HeaderLeft />
                    <MText style={styles.title}>Event Details</MText>
                </Row>

                <View style={styles.savedIcon}>
                    <Svg.BookmarkIcon />
                </View>
            </SpaceBetweenRow>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
    },
    savedIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: "#A57275",
        ...Styles.centered,
        marginRight: 16
    }
})
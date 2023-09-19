import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import MText from '../../../components/Text'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import images from '../../../assets/images'
import { Styles } from '../../../styles'

export default function EventDetailsAbout() {
    return (
        <View style={styles.container}>
            <MText style={styles.title}>About Event</MText>
            <MText style={styles.subTitle}>
                Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...
            </MText>

            <SpaceBetweenRow style={{ marginTop: 40 }}>
                <Row>
                    <Image
                        source={images.eventUser}
                        style={{ width: 44, height: 44 }}
                    />
                    <View style={Styles.horizontalMargin}>
                        <MText style={styles.userName}>Ashfak Sayem</MText>
                        <MText style={styles.designation}>Organizer</MText>
                    </View>
                </Row>

                <Row>
                    <Image
                        source={images.eventUser}
                        style={{ width: 20, height: 20, borderRadius: 100 }}
                    />
                    <Image
                        source={images.eventUser}
                        style={{ width: 20, height: 20, borderRadius: 100, marginLeft: -8 }}
                    />
                    <Image
                        source={images.eventUser}
                        style={{ width: 20, height: 20, borderRadius: 100, marginLeft: -8 }}
                    />
                    <MText style={styles.count}>+20 Going</MText>
                </Row>
            </SpaceBetweenRow>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
        lineHeight: 34
    },
    subTitle: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000",
        lineHeight: 22
    },
    userName: {
        fontSize: 15,
        fontWeight: "400",
        color: "#000",
    },
    designation: {
        fontSize: 12,
        fontWeight: "400",
        color: "#706E8F"
    },
    count: {
        fontSize: 10,
        fontWeight: "400",
        color: "#3F38DD",
        marginLeft: 6
    }
})
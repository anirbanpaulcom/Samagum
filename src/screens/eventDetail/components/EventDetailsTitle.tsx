import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import MText from '../../../components/Text'
import { Row } from '../../../components/Wrapper'
import Svg from '../../../assets/svg'
import { Colors, Styles } from '../../../styles'
import images from '../../../assets/images'

export default function EventDetailsTitle() {
    return (
        <View style={{ padding: 16 }}>
            <MText style={styles.title}>International Band Music Concert</MText>

            <Row style={Styles.marginTopXL}>
                <View style={styles.iconbg}>
                    <Svg.BlueCalanderIcon />
                </View>
                <View style={Styles.horizontalMarginM}>
                    <MText style={styles.date}>14 December, 2023</MText>
                    <MText style={styles.time}>Tuesday, 4:00PM - 9:00PM</MText>
                </View>
            </Row>

            <Row style={Styles.marginTopXL}>
                <View style={styles.iconbg}>
                    <Svg.LiveBlueIcon />
                </View>
                <View style={Styles.horizontalMarginM}>
                    <MText style={styles.date}>Online Event</MText>
                </View>
            </Row>

            <Row style={Styles.marginTopXL}>
                <View style={styles.iconbg}>
                    <MText style={styles.dollar}>$</MText>
                </View>
                <View style={Styles.horizontalMarginM}>
                    <MText style={styles.date}>Free</MText>
                </View>
            </Row>

            <Row style={{ marginTop: 40 }}>
                <Image
                    source={images.eventUser}
                    style={{ width: 62, height: 62 }}
                />
                <View style={Styles.horizontalMargin}>
                    <MText style={styles.userName}>Career Transition Coching meetup Group</MText>
                    <MText style={styles.designation}>India - Public</MText>
                </View>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "500",
        color: "#000",
        width: "85%"
    },
    iconbg: {
        width: 48,
        height: 48,
        backgroundColor: "#D8DCFF",
        borderRadius: 12,
        ...Styles.centered,
    },
    date: {
        fontSize: 16,
        fontWeight: "500",
        color: "#120D26",
    },
    time: {
        fontSize: 12,
        fontWeight: "400",
        color: "#747688",
    },
    dollar: {
        fontSize: 22,
        fontWeight: "600",
        color: Colors.primary,
    },
    userName: {
        fontSize: 15,
        fontWeight: "400",
        color: "#000",
        width: "70%"
    },
    designation: {
        fontSize: 12,
        fontWeight: "400",
        color: "#706E8F"
    },
})
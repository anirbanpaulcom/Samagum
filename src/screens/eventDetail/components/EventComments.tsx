import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MText from '../../../components/Text'
import { Row } from '../../../components/Wrapper'
import Svg from '../../../assets/svg'
import { Styles } from '../../../styles'

export default function EventComments() {
    return (
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <MText style={styles.heading}>Comments</MText>
            <Row>
                <View style={styles.userIcon}>
                    <Svg.UserIcon />
                </View>
                <View>
                    <MText style={styles.title}>Join this group to comment</MText>
                    <MText style={styles.joinGroup}>Join  group</MText>
                </View>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: "500",
        color: "#120D26",
        marginTop: 26,
        marginBottom: 8,
    },
    title: {
        fontSize: 12,
        fontWeight: "400",
        color: "#706E8F",
    },
    joinGroup: {
        fontSize: 12,
        fontWeight: "400",
        color: "#5669FF",
    },
    userIcon: {
        width: 38,
        height: 38,
        borderRadius: 100,
        backgroundColor: "#D9D9D9",
        ...Styles.centered,
        marginRight: 10
    }
})
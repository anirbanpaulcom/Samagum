import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import MText from '../../../components/Text'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import images from '../../../assets/images'
import { Styles } from '../../../styles'

interface GroupDetailsAboutProps {
    title: string;
    subTitle: string;
}

export default function GroupDetailsAbout({ title, subTitle }: GroupDetailsAboutProps) {
    return (
        <View style={styles.container}>
            <SpaceBetweenRow>
                <Row>
                    <Image
                        source={images.eventUser}
                        style={{ width: 44, height: 44 }}
                    />
                    <View style={Styles.horizontalMargin}>
                        <MText style={styles.userName}>{title}</MText>
                        <MText style={styles.designation}>{subTitle}</MText>
                    </View>
                </Row>
            </SpaceBetweenRow>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
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
})
import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import MText from '../../../components/Text'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import Svg from '../../../assets/svg'
import { Colors, Styles } from '../../../styles'
import images from '../../../assets/images'
import { Button } from 'react-native-paper'
import ImageButton from '../../../components/ImageButton'

interface GroupDetailsTitleProps {
    title: string;
    membersCount: string;
}

export default function GroupDetailsTitle({ title, membersCount }: GroupDetailsTitleProps) {
    function handleSubmit() { }

    return (
        <View style={{ padding: 16 }}>
            <MText style={styles.title}>{title}</MText>

            <SpaceBetweenRow style={Styles.marginTopMid}>
                <Row>
                    <Image
                        source={images.eventUser}
                        style={{ width: 30, height: 30, borderRadius: 100 }}
                    />
                    <Image
                        source={images.eventUser}
                        style={{ width: 30, height: 30, borderRadius: 100, marginLeft: -8 }}
                    />
                    <Image
                        source={images.eventUser}
                        style={{ width: 30, height: 30, borderRadius: 100, marginLeft: -8 }}
                    />
                    <MText style={styles.membersCount}>{membersCount} Members</MText>
                </Row>
                <Button labelStyle={styles.seeAll}>
                    See All ▶
                </Button>
            </SpaceBetweenRow>

            <ImageButton
                title="JOIN GROUP"
                onPress={handleSubmit}
            />

            <MText style={styles.subTitle}>
                Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...
            </MText>
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
    membersCount: {
        color: "#3F38DD",
        marginLeft: 12
    },
    seeAll: {
        color: "#747688",
        marginRight: 0
    },
    subTitle: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000",
        lineHeight: 22,
        marginTop: 32
    },
})
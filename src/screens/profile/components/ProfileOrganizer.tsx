import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MText from '../../../components/Text';
import { Row, SpaceBetweenRow } from '../../../components/Wrapper';
import Svg from '../../../assets/svg';
import { Styles } from '../../../styles';

interface ProfileOrganizerProps {
    title: string;
    text: string;
    subText: string;
    data: any;
}

export default function ProfileOrganizer({ title, text, subText, data }: ProfileOrganizerProps) {
    return (
        <View>
            <MText style={styles.title}>{title}</MText>

            <SpaceBetweenRow style={{ marginHorizontal: 20, marginTop: 12 }}>
                <Row>
                    <View style={styles.plus}>
                        <Svg.PlusIcon width="20" height="20" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <MText style={styles.text}>{text}</MText>
                        <MText style={styles.subText}>{subText}</MText>
                    </View>
                </Row>
                <Svg.ArrowRightIcon width="15" height="15" />
            </SpaceBetweenRow>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#120D26",
        marginHorizontal: 20,
        marginTop: 40
    },
    plus: {
        width: 44, height: 44,
        backgroundColor: "#EAEAEF",
        borderRadius: 10,
        ...Styles.centered,
    },
    text: {
        fontSize: 12,
        color: "#706E8F",
    },
    subText: {
        fontSize: 12,
        color: "#5669FF",
    }
})
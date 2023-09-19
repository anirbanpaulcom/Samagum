import { View, Text, StyleSheet, TouchableOpacity, TextStyle } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../styles'
import { Row } from './Wrapper';
import MText from './Text';

interface CustomSwitchProps {
    onPress: () => void;
    swiched?: boolean;
    title?: string;
    titleStyle?: TextStyle;
}

export default function CustomSwitch({ onPress, swiched, title, titleStyle = {} }: CustomSwitchProps) {
    const [isSwich, setIsSwich] = useState(swiched);

    return (
        <Row>
            <TouchableOpacity activeOpacity={0.8}
                style={[styles.switch, {
                    backgroundColor: isSwich ? Colors.primary : "#D9D9D9"
                }]}
                onPress={() => { setIsSwich(!isSwich); onPress(); }}
            >
                {isSwich
                    ? <View style={styles.switchCircleRight} />
                    : <View style={styles.switchCircleLeft} />}
            </TouchableOpacity>

            {title && <MText style={[styles.title, titleStyle]}>{title}</MText>}
        </Row>
    )
}

const styles = StyleSheet.create({
    switch: {
        width: 36,
        height: 19,
        backgroundColor: Colors.primary,
        borderRadius: 30,
        justifyContent: "center"
    },
    switchCircleLeft: {
        width: 15,
        height: 15,
        borderRadius: 100,
        backgroundColor: "#fff",
        marginHorizontal: 1.5,
    },
    switchCircleRight: {
        width: 16,
        height: 16,
        borderRadius: 100,
        backgroundColor: "#fff",
        marginHorizontal: 0.8,
        alignSelf: "flex-end",
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        marginLeft: 8
    }
})
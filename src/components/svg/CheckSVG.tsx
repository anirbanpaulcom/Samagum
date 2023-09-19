import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Svg from '../../assets/svg'
import { Colors, Styles } from '../../styles'
import { StyleSheet } from 'react-native'

interface CheckSVGProps {
    isChecked?: boolean;
}

export default function CheckSVG({ isChecked }: CheckSVGProps) {
    return (
        <View style={isChecked ? styles.container : styles.checkedContainer}>
            <Svg.CheckedIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 16, height: 16,
        backgroundColor: Colors.blue,
        borderRadius: 100,
        ...Styles.centered
    },
    checkedContainer: {
        width: 16, height: 16,
        backgroundColor: "#CDCDCD",
        borderRadius: 100,
        ...Styles.centered
    }
})
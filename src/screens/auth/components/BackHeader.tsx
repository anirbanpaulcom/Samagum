import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles';
import Svg from '../../../assets/svg';

interface BackHeaderProps {
    onPress: () => void;
}

export default function BackHeader({ onPress }: BackHeaderProps) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
                <Svg.BackIcon />
            </TouchableOpacity>
        </View>
    )
}
import React from 'react'

import { TouchableOpacity, View, ViewStyle } from 'react-native'

import styles from './styles';

export interface MyCardProps {
    children?: React.ReactNode;
    style?: ViewStyle;
    onPress?: () => void;
}

const MyCard = ({
    children,
    style,
    onPress
}: MyCardProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.myCard, style]}>
            {children}
        </TouchableOpacity>
    )
};
export default MyCard;
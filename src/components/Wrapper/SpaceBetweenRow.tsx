import React from 'react'

import { TouchableOpacity, View, ViewStyle } from 'react-native'

import styles from './styles';

export interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
  onPress?: () => void;
}

export const SpaceBetweenRow = ({
  children,
  backgroundColor,
  style,
  onPress
}: Props) => {
  return (
    <TouchableOpacity style={[styles.spaceBetweenRow, { backgroundColor }, style]}
      onPress={onPress} activeOpacity={0.9}
    >
      {children}
    </TouchableOpacity>
  )
};

export default SpaceBetweenRow
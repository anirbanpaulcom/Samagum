import React from 'react'

import { View } from 'react-native'

import styles from './styles';

export interface ContainerProps {
  children?: React.ReactNode;
  style?: object;
}

const Container = ({
  children,
  style,
}: ContainerProps) => {
  return (
    <View style={[styles.container, style]}>{children}</View>
  )
};
export default Container;
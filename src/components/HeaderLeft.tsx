import React from 'react'

import { useTheme } from '@react-navigation/native';
import { BackHandler, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'

import { Icon, Icons } from './Icon';
import NavigationService from '../navigation/NavigationService';
import { Size } from '../constants';
import { Styles } from '../styles';
import { h } from '../utils';
import Svg from '../assets/svg';


interface HeaderProps {
  // title?: String;
  onPress?: () => void;
  iconType?: any;
  iconName?: string;
  style?: ViewStyle;
  color?: string;
  backgroundColor?: string;
}

const HeaderLeft = ({ iconType, iconName, onPress, color, backgroundColor, style }: HeaderProps) => {
  const onButtonPress = () => {
    onPress ? onPress() : (
      NavigationService.goCanBack() ? NavigationService.goBack() : BackHandler.exitApp()
    )
  }

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <TouchableOpacity style={styles.button}
        onPress={onButtonPress}>
        <Svg.BackWhiteIcon />
      </TouchableOpacity>
    </View>
  )
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
    height: h(6),
    paddingHorizontal: Size.m,
    ...Styles.rowView,
  },
  button: {
    paddingHorizontal: Size.vs,
  },
});

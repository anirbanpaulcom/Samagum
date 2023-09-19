import React, { useState } from 'react'

import { useTheme } from '@react-navigation/native';
import { StyleSheet, TextInput, View, ViewStyle, KeyboardType, ReturnKeyTypeOptions, TouchableOpacity, TextStyle } from 'react-native'

import * as Animatable from 'react-native-animatable';

import { Icon, Icons } from './Icon';
import MText from './Text';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import Svg from '../assets/svg';


type autoCapitalize = 'none' | 'sentences' | 'words' | 'characters' | undefined;
interface InputProp {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onBlur?: (value: any) => void;
  onFocus?: () => void;
  inputRef?: React.Ref<any>;
  inputContainer?: ViewStyle | ViewStyle[];
  inputStyle?: ViewStyle | ViewStyle[] | TextStyle;
  keyboardType?: KeyboardType;
  onPress?: (value: any) => void;
  error?: string;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number | undefined;
  editable?: boolean;
  autoCapitalize?: autoCapitalize;
  textContentType?: "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | undefined;
  multiline?: boolean;
  onPressButton?: () => void;
  buttonText?: string;
  showButton?: boolean;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  placeholderTextColor?: string;
  secureTextEntry?: boolean,
  LeftIcon?: any;
}

const InputBox = ({
  inputRef,
  value,
  onChangeText,
  placeholder,
  onBlur,
  onFocus,
  inputContainer,
  inputStyle,
  keyboardType,
  onSubmitEditing,
  blurOnSubmit,
  returnKeyType,
  maxLength,
  onPress,
  error,
  editable,
  autoCapitalize,
  textContentType,
  multiline,
  onPressButton,
  buttonText,
  showButton,
  textAlignVertical,
  placeholderTextColor,
  secureTextEntry,
  LeftIcon,
}: InputProp) => {
  const theme = useTheme();
  const [focused, setFocused] = useState<boolean>(false);

  const borderColor = error ? Colors.red :
    focused ? Colors.primary : Colors.gray3;
  const color = theme.colors.text;

  return (
    <View>
      <View style={[styles.inputContainer, { borderColor }, inputContainer]}>
        <TextInput style={[styles.input, { color }, inputStyle, { paddingLeft: LeftIcon ? 42 : 12 }]}
          textAlignVertical={textAlignVertical}
          onPressIn={onPress}
          ref={inputRef}
          autoCapitalize={autoCapitalize}
          placeholder={placeholder || ''}
          placeholderTextColor={placeholderTextColor}
          defaultValue={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          onFocus={() => {
            onFocus && onFocus()
            setFocused(true)
          }}
          maxLength={maxLength}
          multiline={multiline}
          editable={editable}
          onBlur={(e) => {
            onBlur && onBlur(e)
            setFocused(false)
          }}
          onSubmitEditing={() => {
            onSubmitEditing && onSubmitEditing()
            setFocused(false)
          }}
          blurOnSubmit={blurOnSubmit}
          returnKeyType={returnKeyType}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
        />
        {showButton && <TouchableOpacity
          onPress={onPressButton}
          style={styles.absButton}>
          <MText marginHorizontal={Size.s}>{buttonText}</MText>
          <Icon type={Icons.Feather} name='chevron-down' />
        </TouchableOpacity>}

        {!!error && <Animatable.View animation="fadeInRight" duration={300}>
          <MText style={Styles.error}>{error}</MText>
        </Animatable.View>}
      </View>
      <View style={{ position: "absolute", left: 12, top: 25 }}>
        {LeftIcon && LeftIcon}
      </View>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  input: {
    padding: Size.s,
    color: Colors.dark,
    height: 56,
    fontSize: 13.5,
    paddingLeft: 42,
    marginTop: -2,
    justifyContent: "center"
  },
  inputContainer: {
    marginVertical: Size.s,
    width: Size.wWidth / 1.1,
    height: 56,
    borderRadius: Size.s12,
    backgroundColor: "#FFF",
    borderWidth: 0.8,
    borderColor: Colors.border,
  },
  errorMsg: {
    fontSize: Size._12,
    color: Colors.red,
    marginTop: 1
  },
  absButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: Size.s12,
    ...Styles.rowView,
  },
})

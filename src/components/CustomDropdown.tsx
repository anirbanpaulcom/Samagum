import React from 'react'

import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { Size } from '../constants';
import { Colors, Styles } from '../styles';
import { w } from '../utils';
import Svg from '../assets/svg';

interface InputListProp {
    label: string,
    value: string,
}

interface DropdownProp {
    value?: string;
    onChange?: (text: string) => void;
    placeholder?: string;
    data?: any;
    dropdownStyle?: ViewStyle | TextStyle;
    containerStyles?: ViewStyle | TextStyle;
    error?: string;
    leftIcon?: any;
}

export default function CustomDropdownComponent({
    value,
    placeholder,
    data,
    onChange,
    dropdownStyle,
    containerStyles,
    error,
    leftIcon,
}: DropdownProp) {
    const [isFocus, setIsFocus] = React.useState(false);
    const [dropdownData, setDropdownData] = React.useState(value);

    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={[styles.container, containerStyles]}>
            <Dropdown
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : '...'}
                searchPlaceholder="Search..."
                value={dropdownData}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setDropdownData(item.value);
                    setIsFocus(false);
                    onChange(item.value.toString())
                }}
                renderItem={renderItem}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                style={[styles.dropdown, dropdownStyle]}
            />
            {leftIcon && <View style={{ position: "absolute", left: 12, top: 15 }}>
                {leftIcon}
            </View>}
            {error && <Text style={styles.errorMsg}>{error} !</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        fontSize: 13.5,
        color: Colors.red,
        marginTop: 1,
        marginLeft: -8
    },
    container: {
        padding: Size.s,
        color: Colors.black,
        borderRadius: 12,
        backgroundColor: "#FFF",
        height: 56,
        paddingHorizontal: Size.s,
        borderWidth: 0.8,
        borderColor: Colors.border,
        width: Size.wWidth / 1.1,
        alignSelf: "center",
        paddingLeft: 42,
        marginTop: Size.s,
        // marginBottom: Size.xs,
    },
    dropdown: {},
    icon: {
        marginRight: Size.vs,
        width: Size.ml
    },
    placeholderStyle: {
        fontSize: 13,
        color: Colors.subText,
    },
    selectedTextStyle: {
        fontSize: 13,
        color: Colors.black
    },
    iconStyle: {
        width: Size.xl,
        height: Size.xl,
    },
    inputSearchStyle: {
        height: Size.vl,
        fontSize: w(3.4),
    },
    item: {
        padding: Size.m,
        ...Styles.row_space
    },
    textItem: {
        fontSize: w(3.4),
        color: Colors.black,
        height: Size.l
    },
})
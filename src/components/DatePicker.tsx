import React, { useState } from "react";

import { useTheme } from "@react-navigation/native";
import moment from 'moment';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import { Icon, Icons } from "./Icon";
import MText from "./Text";
import { Size } from "../constants";
import { w } from "../utils";
import { Colors, Styles } from "../styles";
import Svg from "../assets/svg";
import { Row } from "./Wrapper";


export default function DatePicker(props: any) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [initialDate, setInitialDate] = useState(props.initialDate)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        setInitialDate(moment(date).format("YYYY-MM-DD"))
        props.onDateSelected(moment(date).format("YYYY-MM-DD"));
        hideDatePicker();
    };

    const theme = useTheme();

    return (
        <View style={[styles.container]}>
            <TouchableOpacity activeOpacity={0.5}
                onPress={showDatePicker}
                style={[styles.inputContainer, props?.containerStyle]}
            >
                <MText style={[initialDate ? styles.inputBlack : styles.input, {
                    marginLeft: props?.DOBIcon ? 34 : 6
                }]}>
                    {initialDate ? initialDate : props.placeholderText}
                </MText>
                {props.mode === "date"
                    ? <Svg.CalanderIcon />
                    : <Icon type={Icons.Ionicons} name='time-outline' color={theme.colors.primary} />}
            </TouchableOpacity>
            {props?.DOBIcon && <View style={{ position: "absolute", left: 12, top: 16 }}>
                <Svg.DOBIcon />
            </View>}
            {props?.error && <MText style={styles.errorMsg}>{props.error} !</MText>}
            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode={props.mode}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={props?.minimumDate ? props.minimumDate : null}
                maximumDate={props?.maximumDate ? props.maximumDate : null}
            // maximumDate={moment().subtract(18, "years").toDate()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Size.s,
        marginBottom: Size.xs,
    },
    inputContainer: {
        width: '100%',
        height: 56,
        paddingHorizontal: Size.s,
        ...Styles.row_space,
        borderRadius: Size.s12,
        backgroundColor: "#FFF",
    },
    input: {
        color: Colors.subText,
        fontSize: 13,
        marginLeft: 34,
    },
    inputBlack: {
        color: Colors.black,
        fontSize: 13,
        marginLeft: 34,
    },
    errorMsg: {
        fontSize: Size.s14,
        color: Colors.red,
        marginTop: 1
    },
});
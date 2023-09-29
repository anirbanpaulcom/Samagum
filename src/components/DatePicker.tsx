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

export default function DatePicker(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [initialDate, setInitialDate] = useState(props.initialDate || "");
  const [mode, setMode] = useState(props.mode || "date");

  const showDatePicker = () => {
    setMode(props.mode || "date"); 
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = moment(date).format(props.mode === "date" ? "YYYY-MM-DD" : "HH:mm");
    setInitialDate(formattedDate);
    props.onDateSelected(formattedDate);
    hideDatePicker();
  };

  const theme = useTheme();

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={showDatePicker}
        style={[styles.inputContainer, props?.containerStyle]}
      >
        <MText
          style={[
            initialDate ? styles.inputBlack : styles.input,
            { marginLeft: props?.DOBIcon ? 34 : 6 },
          ]}
        >
          {initialDate ? initialDate : props.placeholderText}
        </MText>
        {props.mode === "date" ? <Svg.CalanderIcon /> : <Svg.ClockIcon />}
      </TouchableOpacity>
      {props?.DOBIcon && (
        <View style={{ position: "absolute", left: 12, top: 16 }}>
          <Svg.DOBIcon />
        </View>
      )}
      {props?.error && (
        <MText style={styles.errorMsg}>{props.error} !</MText>
      )}
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode={mode} 
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date("1900-01-01")}
        maximumDate={new Date("3030-12-31")}
      />
    </View>
  );
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
    marginTop: 1,
  },
});

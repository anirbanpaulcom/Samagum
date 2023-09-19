import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import SimpleModal from '../../../components/SimpleModal'
import MText from '../../../components/Text';
import { SpaceBetweenRow } from '../../../components/Wrapper';
import { Colors, Styles } from '../../../styles';
import { Size } from '../../../constants';
import Button from '../../../components/Button';
import Svg from '../../../assets/svg';

interface FilterModal {
    visible: boolean;
    setVisible: Function;
}

export default function FilterModal({ visible, setVisible }: FilterModal) {
    const [day, setDay] = useState("today");

    return (
        <SimpleModal
            visible={visible}
            dismiss
            setVisible={setVisible}
            modalContainer={{}}
            style={{}}
        >
            <MText style={styles.heading}>{"Select a Category"}</MText>

            <TextInput
                placeholder='Choose a category'
                placeholderTextColor="#CDCDCD"
                style={styles.searchInput}
            />

            <MText style={styles.heading}>{"Time & date"}</MText>

            <SpaceBetweenRow style={Styles.marginTop}>
                <Button title="Today" style={styles.dayButton}
                    background={day === "today" ? Colors.primary : "#fff"}
                    textStyle={day === "today" ? styles.selectedDayText : styles.dayText}
                    onPress={() => { setDay("today") }}
                />
                <Button title="Tomorrow" style={styles.dayButton}
                    background={day === "tomorrow" ? Colors.primary : "#fff"}
                    textStyle={day === "tomorrow" ? styles.selectedDayText : styles.dayText}
                    onPress={() => { setDay("tomorrow") }}
                />
                <Button title="This week" style={styles.dayButton}
                    background={day === "thisWeek" ? Colors.primary : "#fff"}
                    textStyle={day === "thisWeek" ? styles.selectedDayText : styles.dayText}
                    onPress={() => { setDay("thisWeek") }}
                />
            </SpaceBetweenRow>

            <View>
                <Button
                    title="Choose from calender"
                    background='#fff'
                    SvgIcon={<Svg.CalendarIcon />}
                    style={styles.calendarBtn}
                    textStyle={styles.calendarBtnText}
                />
                <View style={{ position: "absolute", right: "33%", bottom: 15 }}>
                    <Svg.ArrowRightIcon />
                </View>
            </View>

            {/* <MText style={styles.heading}>{"Location"}</MText>
            <View>
                <Button
                    title="New Yourk, USA"
                    background='#fff'
                    SvgIcon={<Svg.CalendarIcon />}
                    style={styles.calendarBtn}
                    textStyle={styles.calendarBtnText}
                />
                <View style={{ position: "absolute", right: "33%", bottom: 15 }}>
                    <Svg.ArrowRightIcon />
                </View>
            </View> */}
        </SimpleModal>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000",
        marginTop: 40
    },
    searchInput: {
        width: "100%",
        height: 56,
        borderRadius: 14,
        color: "#000",
        fontSize: 12,
        fontWeight: "500",
        elevation: 6,
        shadowColor: "#CCC",
        backgroundColor: "#FFF",
        paddingHorizontal: 16,
        marginTop: 10
    },
    dayButton: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: "#E6E6E6",
        width: "31%"
    },
    selectedDayText: {
        fontSize: 15,
        fontWeight: "300",
        color: "#FFF"
    },
    dayText: {
        fontSize: 15,
        fontWeight: "300",
        color: "#807A7A"
    },
    calendarBtn: {
        borderWidth: 0.8,
        borderColor: "#E6E6E6",
        borderRadius: 10,
        width: "70%",
        marginTop: 14,
        height: 42
    },
    calendarBtnText: {
        fontSize: 15,
        color: "#807A7A",
        marginLeft: 12
    }
})
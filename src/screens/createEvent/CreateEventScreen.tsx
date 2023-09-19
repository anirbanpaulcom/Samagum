import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Container, Row, SpaceBetweenRow } from '../../components/Wrapper'
import SettingsHeader from '../settings/container/SettingsHeader'
import { Size } from '../../constants'
import { Colors, Styles } from '../../styles'
import MText from '../../components/Text'
import { RenderSwitch } from '../settings/NotificationsSettings'
import InputBox from '../../components/InputBox'
import CustomScroll from '../../components/CustomScroll'
import Svg from '../../assets/svg'

export default function CreateEventScreen() {
    const [checked, setChecked] = useState(false);
    const [askQuestion, setAskQuestion] = useState(false);
    const [allowedQuests, setAllowedQuests] = useState(false);

    return (
        <Container>
            <StatusBar translucent backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='Create a event' />

            <CustomScroll>
                <View style={{ padding: 20 }}>
                    <CreateEventInput
                        placeholder='...'
                        label='Title'
                        onChange={() => { }}
                    />

                    <SpaceBetweenRow>
                        <CreateEventInput
                            placeholder='...'
                            label='Start'
                            width={Size.wWidth / 2.3}
                            onChange={() => { }}
                        />
                        <CreateEventInput
                            placeholder='...'
                            label='Time'
                            width={Size.wWidth / 2.3}
                            onChange={() => { }}
                        />
                    </SpaceBetweenRow>

                    <SpaceBetweenRow>
                        <CreateEventInput
                            placeholder='...'
                            label='End'
                            width={Size.wWidth / 2.3}
                            onChange={() => { }}
                        />
                        <CreateEventInput
                            placeholder='...'
                            label='Time'
                            width={Size.wWidth / 2.3}
                            onChange={() => { }}
                        />
                    </SpaceBetweenRow>

                    <CreateEventInput
                        placeholder='...'
                        label='Upload event image'
                        onChange={() => { }}
                        height={140}
                    />

                    <CreateEventInput
                        placeholder='...'
                        label='Description'
                        onChange={() => { }}
                        height={140}
                    />


                    <MText style={styles.checkTitle}>This is an online event</MText>
                    <Row>
                        <RenderSwitch
                            swiched={checked}
                            onPress={() => { setChecked(true) }}
                        />
                        <MText style={styles.checkYes}>Yes</MText>
                    </Row>

                    <MText style={styles.checkTitle}>Location</MText>
                    <InputBox
                        placeholder='...'
                        onChangeText={() => { }}
                        LeftIcon={<Svg.LocationIcon />}
                    />

                    <CreateEventInput
                        placeholder=''
                        label='How to find us (Optional)'
                        onChange={() => { }}
                    />

                    <MText style={styles.title}>Optional Settings</MText>
                    <RenderSwitch
                        title='New Tips Available'
                        swiched={askQuestion}
                        onPress={() => { setAskQuestion(true) }}
                    />
                    <View style={{ height: 20 }} />
                    <RenderSwitch
                        title='Allowed Quests'
                        swiched={allowedQuests}
                        onPress={() => { setAllowedQuests(true) }}
                    />
                    <View style={{ height: 20 }} />
                    <RenderSwitch
                        title='Event Fees'
                        swiched={allowedQuests}
                        onPress={() => { setAllowedQuests(true) }}
                    />
                </View>

                <View style={{ height: 80 }} />
            </CustomScroll>
        </Container>
    )
}

interface CreateEventInputProps {
    label: string;
    onChange: ((text: string) => void) | undefined;
    placeholder: string;
    width?: number;
    height?: number;
}

export function CreateEventInput({ label, onChange, placeholder, width, height }: CreateEventInputProps) {
    return (
        <View style={{ width: width ? width : Size.wWidth / 1.1 }}>
            <MText style={styles.label}>{label}</MText>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.gray6}
                style={[styles.inputStyle, { height: height }]}
                onChangeText={onChange}
                textAlignVertical="top"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: "600",
        color: "#120D26",
        marginVertical: 20
    },
    inputStyle: {
        width: "100%",
        height: 52,
        borderWidth: 1,
        borderColor: "#B8B7C8",
        borderRadius: 14,
        alignSelf: "center",
        paddingHorizontal: 16,
        marginTop: 10,
        fontSize: 12,
        fontWeight: "400",
        color: "#3C3E56",
        backgroundColor: "#FAFAFA",
        paddingTop: 12
    },
    profile: {
        width: 96,
        height: 96,
        borderRadius: 100,
        marginTop: -50,
        alignSelf: "center"
    },
    label: {
        fontSize: 12,
        fontWeight: "500",
        color: "#120D26",
        marginBottom: -5,
        marginTop: 16
    },
    datePickerContainer: {
        width: Size.wWidth / 1.1,
        borderWidth: 1,
        borderColor: "#B8B7C8",
        fontWeight: "500",
        fontSize: 14,
        borderRadius: 14,
        alignSelf: "center",
        paddingLeft: 12,
        marginBottom: -10
    },
    dropdownContainer: {
        width: Size.wWidth / 1.1,
        borderWidth: 1,
        borderColor: "#B8B7C8",
        fontWeight: "500",
        fontSize: 14,
        borderRadius: 14,
        alignSelf: "center",
        paddingLeft: 16
    },
    edit: {
        width: 28,
        height: 28,
        borderRadius: 4,
        backgroundColor: Colors.primary,
        ...Styles.centered,
        position: "absolute",
        bottom: 4,
        right: 4
    },
    checkTitle: {
        fontSize: 12,
        fontWeight: "500",
        color: "#000",
        marginTop: 16
    },
    checkYes: {
        fontSize: 12,
        fontWeight: "400",
        color: "#747688",
        marginTop: 8,
        marginLeft: 6
    }
})
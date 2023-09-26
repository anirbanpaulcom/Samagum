import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
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
import ImageButton from '../../components/ImageButton'
import { createEventAPI } from '../../API/api'
import DatePicker from '../../components/DatePicker'
import moment from 'moment'
import CustomDropdownComponent from '../../components/CustomDropdown'


export const currencyList = [
    { label: "10", value: "10" },
    { label: "20", value: "20" },
    { label: "30", value: "30" },
    { label: "40", value: "40" },
    { label: "50", value: "50" },
    { label: "60", value: "60" },
]


export default function CreateEventScreen() {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [eventImage, setEventImage] = useState(null);
    const [description, setDescription] = useState('');
    const [isOnlineEvent, setIsOnlineEvent] = useState(false);
    const [address, setAddress] = useState('');
    const [howToFindUs, setHowToFindUs] = useState('');
    const [newTipsAvailable, setNewTipsAvailable] = useState(false);
    const [allowedQuests, setAllowedQuests] = useState(false);
    const [eventFees, setEventFees] = useState(false);
    const [currency, setCurrency] = useState("");


    const handleEventPublish = async () => {
        const eventData = {
            title: title,
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            endTime: endTime,
            eventImage: eventImage,
            description: description,
            isOnlineEvent: isOnlineEvent,
            address: address,
            howToFindUs: howToFindUs,
            newTipsAvailable: newTipsAvailable,
            allowedQuests: allowedQuests,
            eventFees: eventFees,
        };

        await createEvent(eventData, (result) => {
            if (result !== null) {
                console.log('Event created successfully:', result);
            } else {
                console.error('Error creating event');
            }
        });
    };


    return (
        <Container>
            <StatusBar translucent backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='Create a event' />

            <CustomScroll>
                <View style={{ padding: 20 }}>
                    <CreateEventInput
                        value={title}
                        placeholder='Name of sponsors'
                        label='Title'
                        onChange={(text) => setTitle(text)}
                    />

                    <SpaceBetweenRow>
                        <View>
                            <MText style={styles.label}>Start</MText>
                            <DatePicker
                                placeholderText="DOB"
                                minimumDate=""
                                mode="date"
                                maximumDate={moment().subtract(18, "years").toDate()}
                                value={startDate}
                                DOBIcon={true}
                                containerStyle={styles.datePickerContainer}
                                onDateSelected={(val: string) => {
                                    setStartDate(val);
                                }}
                            />
                        </View>
                        <View>
                            <MText style={styles.label}>Time</MText>
                            <DatePicker
                                placeholderText="DOB"
                                minimumDate=""
                                mode="time"
                                maximumDate={moment().subtract(18, "years").toDate()}
                                value={startDate}
                                DOBIcon={true}
                                containerStyle={styles.datePickerContainer}
                                onDateSelected={(val: string) => {
                                    setStartDate(val);
                                }}
                            />
                        </View>
                    </SpaceBetweenRow>

                    <SpaceBetweenRow>
                        <View>
                            <MText style={styles.label}>End</MText>
                            <DatePicker
                                placeholderText="DOB"
                                minimumDate=""
                                mode="date"
                                maximumDate={moment().subtract(18, "years").toDate()}
                                value={startDate}
                                DOBIcon={true}
                                containerStyle={styles.datePickerContainer}
                                onDateSelected={(val: string) => {
                                    setStartDate(val);
                                }}
                            />
                        </View>
                        <View>
                            <MText style={styles.label}>Time</MText>
                            <DatePicker
                                placeholderText="DOB"
                                minimumDate=""
                                mode="time"
                                maximumDate={moment().subtract(18, "years").toDate()}
                                value={startDate}
                                DOBIcon={true}
                                containerStyle={styles.datePickerContainer}
                                onDateSelected={(val: string) => {
                                    setStartDate(val);
                                }}
                            />
                        </View>
                    </SpaceBetweenRow>

                    <View>
                        <MText style={styles.label}>Upload event image</MText>
                        <TouchableOpacity style={styles.fileContainer}>
                            <Svg.UploadFilledIcon />
                            <MText style={styles.BrowseFile}>Browse File</MText>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <MText style={styles.label}>Description</MText>
                        <InputBox
                            value={""}
                            onChangeText={(e) => { }}
                            placeholder={""}
                            placeholderTextColor="#8D8D8D"
                            inputContainer={styles.fileContainer}
                        />
                    </View>

                    <MText style={styles.checkTitle}>This is an online event</MText>
                    <Row>
                        <RenderSwitch
                            swiched={isOnlineEvent}
                            onPress={() => setIsOnlineEvent(!isOnlineEvent)}
                        />
                        <MText style={styles.checkYes}>Yes</MText>
                    </Row>

                    <MText style={styles.checkTitle}>Location</MText>
                    <InputBox
                        placeholder=''
                        onChangeText={(text) => setAddress(text)}
                        LeftIcon={<Svg.LocationFillIcon />}
                    />

                    <CreateEventInput
                        value={title}
                        placeholder=''
                        label='How to find us (Optional)'
                        onChange={(text) => setTitle(text)}
                    />

                    <CreateEventInput
                        placeholder=''
                        label='How to find us (Optional)'
                        onChange={(text) => setHowToFindUs(text)}
                    />

                    <MText style={styles.title}>Optional Settings</MText>
                    <View style={styles.optionalSettings}>
                        <RenderSwitch
                            title='New Tips Available'
                            swiched={newTipsAvailable}
                            onPress={() => setNewTipsAvailable(!newTipsAvailable)}
                        />
                    </View>
                    {newTipsAvailable && <View>
                        <InputBox
                            value={""}
                            onChangeText={(e) => { }}
                            placeholder=""
                            placeholderTextColor="#8D8D8D"
                            inputContainer={styles.inputStyle}
                        />
                        <MText style={[styles.label, { marginTop: -6 }]}>
                            {' '}Do not ask for sensitive or private personal information.
                        </MText>
                    </View>}
                    <View style={{ height: 20 }} />

                    <View style={styles.optionalSettings}>
                        <RenderSwitch
                            title='Allowed Quests'
                            swiched={allowedQuests}
                            onPress={() => setAllowedQuests(!allowedQuests)}
                        />
                    </View>
                    {allowedQuests && <View>
                        <InputBox
                            value={""}
                            onChangeText={(e) => { }}
                            placeholder=""
                            keyboardType="number-pad"
                            placeholderTextColor="#8D8D8D"
                            inputContainer={styles.inputStyle}
                        />
                    </View>}
                    <View style={{ height: 20 }} />

                    <View style={styles.optionalSettings}>
                        <RenderSwitch
                            title='Event Fees'
                            swiched={eventFees}
                            onPress={() => setEventFees(!eventFees)}
                        />
                    </View>
                    {eventFees && <View>
                        <MText style={styles.label}>Method</MText>
                        <InputBox
                            value={""}
                            onChangeText={(e) => { }}
                            placeholder=""
                            keyboardType="number-pad"
                            placeholderTextColor="#8D8D8D"
                            inputContainer={styles.inputStyle}
                        />

                        <SpaceBetweenRow>
                            <CustomDropdownComponent
                                data={currencyList}
                                placeholder=''
                                value={currency}
                                leftIcon={<Svg.IcRoundIcon />}
                                onChange={(val) => {
                                    setCurrency(val);
                                }}
                                containerStyles={{ width: Size.wWidth / 2.3 }}
                            />
                            <CustomDropdownComponent
                                data={currencyList}
                                placeholder=''
                                value={currency}
                                leftIcon={<Svg.IcRoundIcon />}
                                onChange={(val) => {
                                    setCurrency(val);
                                }}
                                containerStyles={{ width: Size.wWidth / 2.3 }}
                            />
                        </SpaceBetweenRow>

                        <MText style={styles.label}>Additional refund policy (Optional)</MText>
                        <InputBox
                            value={""}
                            onChangeText={(e) => { }}
                            placeholder=""
                            keyboardType="number-pad"
                            placeholderTextColor="#8D8D8D"
                            inputContainer={styles.inputStyle}
                        />
                    </View>}
                </View>
                <ImageButton
                    title="PUBLISH"
                    onPress={handleEventPublish}
                />

                <View style={{ height: 100 }} />
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
    value?: string;
}

export function CreateEventInput({ label, onChange, placeholder, width, height, value }: CreateEventInputProps) {
    return (
        <View style={{ width: width ? width : Size.wWidth / 1.1 }}>
            <MText style={styles.label}>{label}</MText>
            <InputBox
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor="#8D8D8D"
                inputContainer={styles.inputStyle}
            />
        </View>
    )
}

export function CreateEventDatePicker({ label, onChange, placeholder, width, height, value }: CreateEventInputProps) {
    return (
        <View style={{ width: width ? width : Size.wWidth / 1.1 }}>
            <MText style={styles.label}>{label}</MText>
            <DatePicker
                placeholderText="DOB"
                minimumDate=""
                mode="date"
                maximumDate={moment().subtract(18, "years").toDate()}
                value={value}
                DOBIcon={true}
                containerStyle={styles.datePickerContainer}
                onDateSelected={onChange}
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
    BrowseFile: {
        fontSize: 14,
        fontWeight: "400",
        color: "#747688",
    },
    fileContainer: {
        borderWidth: 1,
        borderColor: "#B8B7C8",
        width: "100%",
        height: 130,
        backgroundColor: "#FAFAFA",
        borderRadius: 14,
        ...Styles.centered,
        marginTop: 10
    },
    optionalSettings: {
        paddingHorizontal: 14,
        backgroundColor: "#F9F9F9",
        paddingBottom: 16,
        borderRadius: 15,
        paddingTop: 6,
    },
    inputStyle: {
        width: "100%",
        minHeight: 52,
        borderWidth: 1,
        borderColor: "#B8B7C8",
        borderRadius: 14,
        alignSelf: "center",
        paddingHorizontal: 8,
        marginTop: 10,
        fontSize: 12,
        fontWeight: "400",
        color: "#3C3E56",
        backgroundColor: "#FAFAFA",
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
        width: Size.wWidth / 2.3,
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
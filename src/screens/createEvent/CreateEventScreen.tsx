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
import ImageButton from '../../components/ImageButton'
import { createEventAPI } from '../../API/api'

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
                        placeholder=''
                        label='Title'
                        onChange={(text) => setTitle(text)}
                        />

                    <SpaceBetweenRow>
                        <CreateEventInput
                            placeholder=''
                            label='Start'
                            width={Size.wWidth / 2.3}
                            onChange={(text) => setStartDate(text)}
                            />
                        <CreateEventInput
                            placeholder=''
                            label='Time'
                            width={Size.wWidth / 2.3}
                            onChange={(text) => setStartTime(text)}
                            />
                    </SpaceBetweenRow>

                    <SpaceBetweenRow>
                        <CreateEventInput
                            placeholder=''
                            label='End'
                            width={Size.wWidth / 2.3}
                            onChange={(text) => setEndDate(text)}
                            />
                        <CreateEventInput
                            placeholder=''
                            label='Time'
                            width={Size.wWidth / 2.3}
                            onChange={(text) => setEndTime(text)}
                            />
                    </SpaceBetweenRow>

                    <CreateEventInput
                        placeholder=''
                        label='Upload event image'
                        onChange={(text) => setEventImage(text)}
                        height={140}
                    />

                    <CreateEventInput
                        placeholder=''
                        label='Description'
                        onChange={(text) => setDescription(text)}
                        height={140}
                    />


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
                        LeftIcon={<Svg.LocationIcon />}
                    />

                    <CreateEventInput
                        placeholder=''
                        label='How to find us (Optional)'
                        onChange={(text) => setHowToFindUs(text)}
                        />

                    <MText style={styles.title}>Optional Settings</MText>
                    <RenderSwitch
                        title='New Tips Available'
                        swiched={newTipsAvailable}
                        onPress={() => setNewTipsAvailable(!newTipsAvailable)}
                        />
                    <View style={{ height: 20 }} />
                    <RenderSwitch
                        title='Allowed Quests'
                        swiched={allowedQuests}
                        onPress={() => setAllowedQuests(!allowedQuests)}
                        />
                    <View style={{ height: 20 }} />
                    <RenderSwitch
                        title='Event Fees'
                        swiched={eventFees}
                        onPress={() => setEventFees(!eventFees)}
                        />
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
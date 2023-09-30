import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
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
import DatePicker from '../../components/DatePicker'
import moment from 'moment'
import CustomDropdownComponent from '../../components/CustomDropdown'
import { margin } from '../../styles/mixins'
import { createEventAPI } from '../../API/new api'
import UploadFile from './UploadFile'
import { launchImageLibrary } from 'react-native-image-picker';


export const currencyList = [
    { label: "INR", value: "INR" },
]

export const MethodList = [
   { label: "Cash", value: "Cash"},
   { label: "Others", value: ""}
]

export const ImageOption ={
        title: 'Select Image',
        type: 'library',
        options: {
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: false,
        },
    }

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
    const [eventFeesButton, setEventFeesButton] = useState(false);
    const [currency, setCurrency] = useState('');
    const [Method, setMethod] = useState('');
    const [Fees, setFees] = useState('');


   
    const handleEventPublish = async () => {
        const data = {
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
            eventFees: Fees,
            currency: currency,
            Method: Method,
        };
        
       createEventAPI(data);
    };

    
   const openGallary = async()=>{
    const image = await launchImageLibrary(ImageOption);
    console.log(image,"00000000000000000000000");
    setEventImage(image.assets[0].uri);
   }

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
                                minimumDate=""
                                mode="date"
                                maximumDate={moment().subtract(18, "years").toDate()}
                                value={startDate}
                                containerStyle={styles.datePickerContainer}
                                onDateSelected={(val: string) => {
                                    setStartDate(val);
                                }}
                            />
                        </View>
                        <View>
                            <MText style={styles.label}>Time</MText>
                            <DatePicker
                                minimumDate=""
                                mode="time"
                                maximumDate={moment().subtract(18, "years").toDate()}
                                value={startTime}
                                containerStyle={styles.datePickerContainer}
                                onDateSelected={(val: string) => {
                                    setStartTime(val);
                                }}
                            />
                        </View>
                    </SpaceBetweenRow>

                    <SpaceBetweenRow>
                        <View>
                            <MText style={styles.label}>End</MText>
                            <DatePicker
                                minimumDate=""
                                mode="date"
                                maximumDate={moment().subtract(18, "years").toDate()}
                                value={endDate}
                                containerStyle={styles.datePickerContainer}
                                onDateSelected={(val: string) => {
                                    setEndDate(val);
                                }}
                            />
                        </View>
                        <View>
                            <MText style={styles.label}>Time</MText>
                            <DatePicker
                                minimumDate=""
                                mode="time"
                                maximumDate={moment().subtract(18, "years").toDate()}
                                value={endTime}
                                containerStyle={styles.datePickerContainer}
                                onDateSelected={(val: string) => {
                                    setEndTime(val);
                                }}
                            />
                        </View>
                    </SpaceBetweenRow>

                    <View>
    <MText style={styles.label}>Upload event image</MText>
    <TouchableOpacity onPress={openGallary} style={styles.fileContainer}>
        {eventImage ? (
            <ImageBackground
                source={{ uri: eventImage }}
                style={{ width: "100%", height: "100%",borderRadius: 14 }}
            />
        ) : (
            <>
                <Svg.UploadFilledIcon />
                <Text style={styles.BrowseFile}>Browse File</Text>
            </>
        )}
    </TouchableOpacity>
</View>


                    <View>
                        <MText style={styles.label}>Description</MText>
                        <InputBox
                            value={""}
                            onChangeText={(text) => { setDescription(text)}}
                            placeholder={""}
                            placeholderTextColor="#B8B7C8"
                            inputContainer={{width:355, height:130, backgroundColor:"#F9F9F9"}}
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
                        placeholder=''
                        label='How to find us (Optional)'
                        onChange={(text) => setHowToFindUs(text)}
                    />

                        <View>
                        <MText style={styles.label}>Registration Notification (Optional)</MText>
                        <InputBox
                        value={""}
                        onChangeText={(e) => { }}
                        placeholder="Fee once payed is non-refundable"
                        placeholderTextColor="#8D8D8D"
                        inputContainer={styles.inputStyle}
                        />
                        </View>

                    <MText style={styles.title}>Optional Settings</MText>
                    <View style={styles.optionalSettings}>
                        <RenderSwitch
                            title='Ask members a question'
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
                            swiched={eventFeesButton}
                            onPress={() => setEventFeesButton(!eventFeesButton)}
                        />
                    </View>
                    {eventFeesButton && <View>
                        <MText style={styles.label}>Method</MText>
                        <CustomDropdownComponent
                                data={MethodList}
                                placeholder=''
                                value={{Method}}
                                onChange={(val) => {
                                    setMethod(val);
                                }}
                            />

                        <SpaceBetweenRow>
                            <View>
                            <MText style={styles.label}>Currency</MText>
                            <CustomDropdownComponent
                                data={currencyList}
                                placeholder='INR'
                                value={"INR"}
                                onChange={(val) => {
                                    setCurrency(val);
                                }}
                                containerStyles={{ width:160,marginVertical:5}}
                            />
                            </View>
                            <View>
                            <MText style={styles.label}>Amount</MText>
                            <InputBox
                            value={""}
                            onChangeText={(val) => { setFees(val)}}
                            placeholder=""
                            keyboardType="number-pad"
                            placeholderTextColor="#8D8D8D"
                            inputContainer={{width:160, marginTop:10}}
                        />
                            </View>
                        </SpaceBetweenRow>

                     {Method && 

                     <View>
                     <MText style={styles.label}>Cash Collection Notification</MText>
                        <InputBox
                            value={""}
                            onChangeText={(e) => { }}
                            placeholder=""
                            placeholderTextColor="#8D8D8D"
                            inputContainer={styles.inputStyle}
                        />
                      </View>
                    }
                        <MText style={styles.label}>Additional refund policy (Optional)</MText>
                        <InputBox
                            value={""}
                            onChangeText={(e) => { }}
                            placeholder="Fee once payed is non-refundable"
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
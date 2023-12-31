import { View, Text, StatusBar, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomScroll from '../../components/CustomScroll'
import ProfileHeader from './components/ProfileHeader'
import { Colors, Styles } from '../../styles'
import MText from '../../components/Text'
import DatePicker from '../../components/DatePicker'
import moment from 'moment'
import { Countries, Size, genderList } from '../../constants'
import CustomDropdownComponent from '../../components/CustomDropdown'
import ImageButton from '../../components/ImageButton'
import images from '../../assets/images'
import Svg from '../../assets/svg'
import { updateUserProfile } from '../../API/new api'
import { getUserProfile } from '../../API/api'
import Toast from 'react-native-simple-toast';
import { Row } from '../../components/Wrapper'
import HeaderLeft from '../../components/HeaderLeft'
import SettingsHeader from '../settings/container/SettingsHeader'

export default function EditProfileScreen() {

    

    const [loading, setLoading] = useState(false);
    const [profileData, setProfiledata] = useState([]);

    useEffect(() => {
        if (profileData.length === 0) {
            getUserProfile((res) => {
                if (res !== null) {
                    if (res?.success === true) {
                        setProfiledata(res?.data)
                    }
                }
            });
        }
    }, []);




    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [DOB, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    


    const countriesList: Array<any> = [];
    Countries.map((item) => {
        countriesList.push({
            label: item?.name,
            value: item?.name,
        })
    });

    function handleClick(){
        if (!email && !phone && !firstName && !lastName && !DOB) {
            Toast.show("Please enter all fields", 1000)
            return;
        }
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            dob: DOB,
            gender: gender,
            country: country,
            city: city,
            timezone: country,
            userName : userName,
        };

        updateUserProfile(data, (res) => {
            console.log(res,"lllllllllllllllll")
            if (res.success) {
                navigation.navigate('UserProfile');
              } else {
                Toast.show("Please enter Currect Information")
            }
        });
      }

    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            

            <SettingsHeader title='Edit intro' />

            <MText style={{fontSize:20, fontWeight:"500", marginHorizontal:20, marginVertical:15}}>Personal Info</MText>
            <MText style={{fontSize:15, fontWeight:"400", marginHorizontal:20,}}>General</MText>

            <View style={{ marginHorizontal: 20 }}>

            <EditProfileInput
                    placeholder={profileData?.username || "Enter User Name"}
                    label='User Name'
                    value={userName}
                    onChange={(val) => {
                        setUserName(val)
                    }}
                />
                <EditProfileInput
                    placeholder={profileData?.first_name || "Enter First Name"}
                    label='First Name'
                    value={firstName}
                    onChange={(val) => {
                    setFirstName(val)
                    }}
                />

                <EditProfileInput
                    placeholder={profileData?.last_name || "Enter Last Name"}
                    label='Last Name'
                    value={lastName}
                    onChange={(val) => {
                        setLastName(val)
                    }}
                />

               <MText style={styles.label}>Date Of Birth</MText>
                <DatePicker
                    placeholderText={profileData?.birthdate || "DOB"}
                    minimumDate=""
                    mode="date"
                    maximumDate={moment().subtract(18, "years").toDate()}
                    value={DOB}
                    containerStyle={styles.datePickerContainer}
                    onDateSelected={(val: string) => {
                        setDOB(val);
                    }}
                />

                <EditProfileInput
                    placeholder={profileData?.email || "Enter Email"}
                    label='Email Address'
                    KeyboardType="email-address"
                    value={email}
                    onChange={(val) => {
                        setEmail(val)
                    }}
                />

                <EditProfileInput
                    placeholder={profileData?.phone || "Enter Phone Number"}
                    label='Phone Number'
                    KeyboardType="number-pad"
                    value={phone}
                    onChange={(val) => {
                        setPhone(val)
                    }}
                />

              <MText style={{fontSize:15, fontWeight:"400",marginTop:20}}>Miscellaneous</MText>

                <MText style={styles.label}>Gender</MText>
                <CustomDropdownComponent
                    data={genderList}
                    placeholder={profileData?.gender || "Gender"}
                    value={gender}
                    onChange={(val) => {
                        setGender(val);
                    }}
                    containerStyles={styles.dropdownContainer}
                />

                <MText style={styles.label}>Country</MText>
                <CustomDropdownComponent
                    data={countriesList}
                    placeholder={profileData?.country || "Country"}
                    value={country}
                    onChange={(val) => {
                        setCountry(val);
                    }}
                    containerStyles={styles.dropdownContainer}
                />

                <EditProfileInput
                    placeholder={profileData?.city || "City"}
                    label='City'
                    value={city}
                    onChange={(val) => {
                        setCity(val)
                    }}
                />

<ImageButton
    title="SAVE"
    onPress={() => handleClick()}
/>


                <MText />
            </View>
        </CustomScroll>
    )
}

type KeyboardType =
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';

interface EditProfileInputProps {
    label: string;
    value: string;
    KeyboardType?: KeyboardType;
    onChange: ((text: string) => void) | undefined;
    placeholder: string;
}

function EditProfileInput({ label, value, KeyboardType, onChange, placeholder }: EditProfileInputProps) {
    return (
        <View style={{}}>
            <MText style={styles.label}>{label}</MText>
            <TextInput
                placeholder={placeholder}
                value={value}
                keyboardType={KeyboardType}
                placeholderTextColor={Colors.gray6}
                style={styles.inputStyle}
                onChangeText={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
        backgroundColor: "#FAFAFA"
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
    }
})
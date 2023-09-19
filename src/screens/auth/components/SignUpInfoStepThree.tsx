import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MText from '../../../components/Text'
import styles from '../styles'
import InputBox from '../../../components/InputBox'
import Svg from '../../../assets/svg'
import ImageButton from '../../../components/ImageButton'
import { useNavigation } from '@react-navigation/native'
import BackHeader from './BackHeader'
import DatePicker from '../../../components/DatePicker'
import moment from 'moment'
import { Styles } from '../../../styles'
import CustomDropdownComponent from '../../../components/CustomDropdown'
import Toast from 'react-native-simple-toast';
import CustomLoader, { CustomPanel } from '../../../components/CustomLoader'

export const genderList = [
    { label: "Male", value: "male" },
    { label: "FeMale", value: "female" },
    { label: "Others", value: "others" },
]

interface SignUpInfoStepThreeProps {
    setSteps: Function;
    navigation: any;
    email: string;
    password: string;
    cPassword: string;
    setLoading: Function;
}

export default function SignUpInfoStepThree({ setSteps, navigation, email, password, cPassword, setLoading }: SignUpInfoStepThreeProps) {
    const [fullName, setFullName] = useState("");
    const [dob, setDOB] = useState("");
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");

    // function handleOnPress() { navigation?.navigate("VerifyOtpScreen") }
    const handleLogin = () => {
        if (!fullName && !email && !password && !cPassword && !dob && !location && !gender) {
            Toast.show("Please enter all fields", 1000)
            return;
        }
        var formdata = new FormData();
        formdata.append("first_name", fullName?.split(" ")[0]);
        formdata.append("last_name", fullName?.split(" ")[1]);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("password_confirmation", cPassword);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        setLoading(true);
        fetch("https://dev.samagum.com/api/v1/register", requestOptions)
            .then(response => response.json())
            .then(async (result: any) => {
                console.log('\n\n\n\n registerregisterregister: ', result);
                setLoading(false);
                if (result?.success === true) {
                    Toast.show(result?.message, 1000);
                    navigation.navigate('LoginScreen');
                    // navigation?.navigate("VerifyOtpScreen", {
                    //     phone: "9988776655",
                    // })
                } else if (result?.success === false) {
                    Toast.show(result?.message, 1000);
                }
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    return (
        <View>
            <BackHeader onPress={() => { setSteps(1) }} />
            <MText style={styles.heading}>Sign up Information</MText>

            <View style={Styles.alignCenter}>
                <View style={{ marginTop: 32 }}>
                    <MText style={styles.labelText}>Name</MText>
                    <InputBox
                        value={fullName}
                        onChangeText={(val) => {
                            setFullName(val)
                        }}
                        placeholder='Full name'
                        placeholderTextColor="#8D8D8D"
                        LeftIcon={<Svg.AccountIcon />}
                    />
                </View>

                <View>
                    <MText style={styles.labelText}>Date of birth</MText>
                    <DatePicker
                        placeholderText="DOB"
                        minimumDate=""
                        mode="date"
                        maximumDate={moment().subtract(18, "years").toDate()}
                        value={dob}
                        DOBIcon={true}
                        containerStyle={styles.datePickerContainer}
                        onDateSelected={(val: string) => {
                            setDOB(val);
                        }}
                    />
                </View>

                <View>
                    <MText style={styles.labelText}>Location</MText>
                    <InputBox
                        value={location}
                        onChangeText={(val) => {
                            setLocation(val)
                        }}
                        placeholder='Location'
                        placeholderTextColor="#8D8D8D"
                        LeftIcon={<Svg.LocationIcon />}
                    />
                </View>

                <View>
                    <MText style={styles.labelText}>Gender</MText>
                    <CustomDropdownComponent
                        data={genderList}
                        placeholder='Gender'
                        value={gender}
                        leftIcon={<Svg.IcRoundIcon />}
                        onChange={(val) => {
                            setGender(val);
                        }}
                    />
                </View>

                <ImageButton
                    title="SIGN UP"
                    onPress={handleLogin}
                />
            </View>
        </View>
    )
}
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MText from '../../../components/Text'
import styles from '../styles'
import InputBox from '../../../components/InputBox'
import Svg from '../../../assets/svg'
import ImageButton from '../../../components/ImageButton'
import { useNavigation } from '@react-navigation/native'
import BackHeader from './BackHeader'

interface SignUpStepTwoProps {
    setSteps: Function;
    email: string;
    setEmail: Function;
    password: string;
    setPassword: Function;
    cPassword: string;
    setCPassword: Function;
    navigation: any;
}

export default function SignUpStepTwo({ setSteps, email, setEmail, password, setPassword, cPassword, setCPassword, navigation }: SignUpStepTwoProps) {
    const [phone, setPhone] = useState("");

    function handleOnPress() { setSteps(2) }

    return (
        <View>
            <BackHeader onPress={() => { setSteps(0) }} />
            <MText style={styles.heading}>Sign up</MText>

            <View style={{ marginTop: 32 }}>
                <MText style={styles.labelText}>Email</MText>
                <InputBox
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(val) => {
                        setEmail(val)
                    }}
                    placeholder='abc@email.com'
                    placeholderTextColor="#8D8D8D"
                    LeftIcon={<Svg.MessageIcon />}
                />
            </View>

            <View>
                <MText style={styles.labelText}>Password</MText>
                <InputBox
                    value={password}
                    onChangeText={(val) => {
                        setPassword(val)
                    }}
                    secureTextEntry
                    placeholder='Password'
                    placeholderTextColor="#8D8D8D"
                    LeftIcon={<Svg.LockIcon />}
                />
            </View>

            <View>
                <MText style={styles.labelText}>Confirm Password</MText>
                <InputBox
                    value={cPassword}
                    onChangeText={(val) => {
                        setCPassword(val)
                    }}
                    secureTextEntry
                    placeholder='Confirm password'
                    placeholderTextColor="#8D8D8D"
                    LeftIcon={<Svg.LockIcon />}
                />
            </View>

            <ImageButton
                title="Next"
                onPress={handleOnPress}
            />
        </View>
    )
}
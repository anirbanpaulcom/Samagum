import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Svg from '../../../assets/svg'
import { Row } from '../../../components/Wrapper'
import svg from '../../../assets/svg'
import styles from '../styles'
import MText from '../../../components/Text'
import Button from '../../../components/Button'
import { useNavigation } from '@react-navigation/native'
import BackHeader from './BackHeader'

const loginList = [
    { icon: svg.GoogleIcon },
    { icon: svg.AppleIcon },
    { icon: svg.XXXIcon },
    { icon: svg.FacebookIcon },
    { icon: svg.LinkedinIcon },
    { icon: svg.YahooIcon },
]

interface SignUpStepOneProps {
    setSteps: Function;
    navigation: any;
}

export default function SignUpStepOne({ setSteps, navigation }: SignUpStepOneProps) {
    function handleOnPress() { setSteps(1) }

    return (
        <>
            <BackHeader onPress={() => { navigation?.goBack() }} />
            <View style={{ alignItems: "center" }}>
                <MText style={styles.heading}>Sign up</MText>

                <Row style={{ flexWrap: "wrap", paddingHorizontal: 20, justifyContent: "center", marginTop: 32 }}>
                    {loginList.map((item, indx) => {
                        return (
                            <View style={styles.socialLogin} key={indx}>
                                <item.icon />
                            </View>
                        )
                    })}
                </Row>

                <TouchableOpacity onPress={handleOnPress}>
                    <Row style={styles.continueWithEmail}>
                        <Svg.MailIcon />
                        <MText style={styles.label}>Continue With Email</MText>
                    </Row>
                </TouchableOpacity>

                <Row style={{ marginTop: 10 }}>
                    <MText style={styles.alreadyAUser}>Already have an account?  </MText>
                    <Button
                        title="Signin"
                        background='#fff'
                        style={{ height: 20 }}
                        onPress={() => { navigation.navigate("RegisterScreen") }}
                    />
                </Row>
            </View>
        </>
    )
}
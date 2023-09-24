import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Container } from '../../components/Wrapper'
import SettingsHeader from '../settings/container/SettingsHeader'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'

export default function CreateGroupScreen() {
    const [steps, setSteps] = useState(1);

    return (
        <Container>
            <StatusBar translucent backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='Create a group' />

            <StepOne
                steps={steps}
                setSteps={setSteps}
                visible={steps === 1}
            />

            <StepTwo
                steps={steps}
                setSteps={setSteps}
                visible={steps === 2}
            />

            <StepThree
                steps={steps}
                setSteps={setSteps}
                visible={steps === 3}
            />

            <StepFour
                steps={steps}
                setSteps={setSteps}
                visible={steps === 4}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000",
        textAlign: "center",
        marginBottom: 16
    },
    labelText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        marginBottom: -4,
        marginTop: 40
    }
})
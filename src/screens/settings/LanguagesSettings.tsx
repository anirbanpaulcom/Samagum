import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Container, SpaceBetweenRow } from '../../components/Wrapper'
import SettingsHeader from './container/SettingsHeader'
import MText from '../../components/Text'
import { Styles } from '../../styles'
import { RadioButton } from 'react-native-paper'

export default function LanguagesSettings() {
    const [checked, setChecked] = useState({
        generalNotification: "",
        sound: "",
        vibrate: "",
        appUpdate: "",
        billReminder: "",
        promotion: "",
        discountAvailable: "",
        paymentRequest: "",
        serviceAvailable: "",
        tipsAvailable: "",
    });

    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='Notifications' />

            <View style={{ padding: 20 }}>
                <MText style={styles.title}>Common</MText>

                <RenderRadioBtn
                    title='English (US)'
                    checked={checked.generalNotification}
                    onPress={() => { setChecked({ ...checked, generalNotification: "English (US)" }) }}
                />

                <RenderRadioBtn
                    title="English (UK)"
                    checked={checked.sound}
                    onPress={() => { setChecked({ ...checked, sound: "English (UK)" }) }}
                />
            </View>

            <View style={{ padding: 20 }}>
                <MText style={styles.title}>Others</MText>

                <RenderRadioBtn
                    title='Mandarin'
                    checked={checked.appUpdate}
                    onPress={() => { setChecked({ ...checked, appUpdate: "Mandarin" }) }}
                />

                <RenderRadioBtn
                    title='Hindi'
                    checked={checked.billReminder}
                    onPress={() => { setChecked({ ...checked, billReminder: "Hindi" }) }}
                />

                <RenderRadioBtn
                    title="Spanish"
                    checked={checked.promotion}
                    onPress={() => { setChecked({ ...checked, promotion: "Spanish" }) }}
                />

                <RenderRadioBtn
                    title="French"
                    checked={checked.discountAvailable}
                    onPress={() => { setChecked({ ...checked, discountAvailable: "French" }) }}
                />

                <RenderRadioBtn
                    title='Arabic'
                    checked={checked.paymentRequest}
                    onPress={() => { setChecked({ ...checked, paymentRequest: "Arabic" }) }}
                />

                <RenderRadioBtn
                    title='Russian'
                    checked={checked.serviceAvailable}
                    onPress={() => { setChecked({ ...checked, serviceAvailable: "Russian" }) }}
                />

                <RenderRadioBtn
                    title='Indonesia'
                    checked={checked.tipsAvailable}
                    onPress={() => { setChecked({ ...checked, tipsAvailable: "Indonesia" }) }}
                />

                <RenderRadioBtn
                    title='Vietnamese'
                    checked={checked.tipsAvailable}
                    onPress={() => { setChecked({ ...checked, tipsAvailable: "Vietnamese" }) }}
                />
            </View>
        </Container>
    )
}

interface RenderRadioBtnProps {
    title: string;
    checked: string;
    onPress: (val: string) => void;
}

const RenderRadioBtn = ({ title, checked, onPress }: RenderRadioBtnProps) => {
    return (
        <SpaceBetweenRow style={Styles.marginTop}>
            <MText style={styles.switchText}>{title}</MText>
            <RadioButton
                value="first"
                status={checked === title ? 'checked' : 'unchecked'}
                onPress={() => onPress('first')}
            />
        </SpaceBetweenRow>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000000"
    },
    switchText: {
        color: "#000000"
    }
})
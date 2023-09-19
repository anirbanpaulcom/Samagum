import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Container, SpaceBetweenRow } from '../../components/Wrapper'
import SettingsHeader from './container/SettingsHeader'
import MText from '../../components/Text'
import CustomSwitch from '../../components/CustomSwitch'
import { Styles } from '../../styles'

export default function NotificationsSettings() {
    const [checked, setChecked] = useState({
        generalNotification: false,
        sound: false,
        vibrate: false,
        appUpdate: false,
        billReminder: false,
        promotion: false,
        discountAvailable: false,
        paymentRequest: false,
        serviceAvailable: false,
        tipsAvailable: false,
    });

    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='Notifications' />

            <View style={{ padding: 20 }}>
                <MText style={styles.title}>Common</MText>

                <RenderSwitch
                    title='General Notification'
                    swiched={checked.generalNotification}
                    onPress={() => { setChecked({ ...checked, generalNotification: true }) }}
                />

                <RenderSwitch
                    title='Sound'
                    swiched={checked.sound}
                    onPress={() => { setChecked({ ...checked, sound: true }) }}
                />

                <RenderSwitch
                    title='Vibrate'
                    swiched={checked.vibrate}
                    onPress={() => { setChecked({ ...checked, vibrate: true }) }}
                />
            </View>

            <View style={{ padding: 20 }}>
                <MText style={styles.title}>System & services update</MText>

                <RenderSwitch
                    title='App update'
                    swiched={checked.appUpdate}
                    onPress={() => { setChecked({ ...checked, appUpdate: true }) }}
                />

                <RenderSwitch
                    title='Bill Reminder'
                    swiched={checked.billReminder}
                    onPress={() => { setChecked({ ...checked, billReminder: true }) }}
                />

                <RenderSwitch
                    title='Promotion'
                    swiched={checked.promotion}
                    onPress={() => { setChecked({ ...checked, promotion: true }) }}
                />

                <RenderSwitch
                    title='Discount Avaiable'
                    swiched={checked.discountAvailable}
                    onPress={() => { setChecked({ ...checked, discountAvailable: true }) }}
                />

                <RenderSwitch
                    title='Payment Request'
                    swiched={checked.paymentRequest}
                    onPress={() => { setChecked({ ...checked, paymentRequest: true }) }}
                />
            </View>

            <View style={{ padding: 20 }}>
                <MText style={styles.title}>Others</MText>

                <RenderSwitch
                    title='New Service Available'
                    swiched={checked.serviceAvailable}
                    onPress={() => { setChecked({ ...checked, serviceAvailable: true }) }}
                />

                <RenderSwitch
                    title='New Tips Available'
                    swiched={checked.tipsAvailable}
                    onPress={() => { setChecked({ ...checked, tipsAvailable: true }) }}
                />
            </View>
        </Container>
    )
}

interface RenderSwitchProps {
    title?: string;
    swiched: boolean;
    onPress: () => void;
}

export const RenderSwitch = ({ title, swiched, onPress }: RenderSwitchProps) => {
    return (
        <SpaceBetweenRow style={Styles.marginTop}>
            {title && <MText style={styles.switchText}>{title}</MText>}
            <CustomSwitch swiched={swiched} onPress={onPress} />
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
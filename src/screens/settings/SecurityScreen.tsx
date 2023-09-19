import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Container, Row, SpaceBetweenRow } from '../../components/Wrapper'
import SettingsHeader from './container/SettingsHeader'
import MyCard from '../../components/Wrapper/MyCard'
import Svg from '../../assets/svg'
import MText from '../../components/Text'
import { Colors } from '../../styles'
import { RenderSwitch } from './NotificationsSettings'

export default function SecurityScreen({ navigation }: any) {
    const [checked, setChecked] = useState(false);

    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='Security' />

            <MyCard style={{ margin: 10, width: "92%", alignSelf: "center", paddingVertical: 20 }}>
                <SpaceBetweenRow onPress={() => { navigation?.navigate("ChangePasswordScreen") }}>
                    <MText style={styles.text1}>Change Password</MText>

                    <Svg.ArrowRightIcon />
                </SpaceBetweenRow>

                <RenderSwitch
                    title='Remember me'
                    swiched={checked}
                    onPress={() => { setChecked(true) }}
                />
            </MyCard>
        </Container>
    )
}

const styles = StyleSheet.create({
    text1: {
        color: "#000000",
    },
    text2: {
        marginLeft: 10,
        color: Colors.primary,
    }
})
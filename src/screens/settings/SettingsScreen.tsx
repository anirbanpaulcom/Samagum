import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import SettingsHeader from './container/SettingsHeader'
import { Container, Row, SpaceBetweenRow } from '../../components/Wrapper'
import MyCard from '../../components/Wrapper/MyCard'
import Svg from '../../assets/svg'
import MText from '../../components/Text'
import { Colors } from '../../styles'

export default function SettingsScreen({ navigation }: any) {
    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='Settings' />

            <MyCard style={{ margin: 10, width: "92%", alignSelf: "center" }}>
                <SpaceBetweenRow onPress={() => { navigation?.navigate("NotificationsSettings") }}>
                    <Row>
                        <View style={{ width: 30 }}>
                            <Svg.BellIcon />
                        </View>
                        <MText style={styles.text1}>Notifications</MText>
                    </Row>

                    <MText style={styles.text2}>ON</MText>
                </SpaceBetweenRow>

                <SpaceBetweenRow style={{ marginTop: 12 }} onPress={() => {
                    navigation?.navigate("LanguagesSettings")
                }}>
                    <Row>
                        <View style={{ width: 30 }}>
                            <Svg.TranslateIcon />
                        </View>
                        <MText style={styles.text1}>Language</MText>
                    </Row>

                    <MText style={styles.text2}>English</MText>
                </SpaceBetweenRow>
            </MyCard>

            <MyCard style={{ margin: 10, width: "92%", alignSelf: "center" }}>
                <SpaceBetweenRow onPress={() => { navigation?.navigate("SecurityScreen") }}>
                    <Row>
                        <View style={{ width: 30 }}>
                            <Svg.SecurityIcon />
                        </View>
                        <MText style={styles.text1}>Security</MText>
                    </Row>
                </SpaceBetweenRow>

                <SpaceBetweenRow style={{ marginTop: 12 }} onPress={() => {
                    navigation?.navigate("PrivacyPolicyScreen")
                }}>
                    <Row>
                        <View style={{ width: 30, paddingLeft: 4 }}>
                            <Svg.PasswordIcon />
                        </View>
                        <MText style={styles.text1}>Privacy policy</MText>
                    </Row>
                </SpaceBetweenRow>
            </MyCard>
        </Container>
    )
}

const styles = StyleSheet.create({
    text1: {
        marginLeft: 10,
        color: "#000000",
    },
    text2: {
        marginLeft: 10,
        color: Colors.primary,
    }
})
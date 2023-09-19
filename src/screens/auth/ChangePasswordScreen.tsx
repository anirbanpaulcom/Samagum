import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Container } from '../../components/Wrapper'
import SettingsHeader from '../settings/container/SettingsHeader'
import MText from '../../components/Text'
import { Colors } from '../../styles'
import { Button } from 'react-native-paper'
import ImageButton from '../../components/ImageButton'

export default function ChangePasswordScreen() {
    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <SettingsHeader title='' />

            <View style={{ paddingHorizontal: 20 }}>
                <MText style={styles.title}>Change Password</MText>
                <MText style={styles.subTitle}>
                    Your password must be at least six characters and should include a combination of numbers, letters and special characters (!$@%).
                </MText>

                <ChangePasswordInput
                    placeholder='Current password (Updated 12-06-23)'
                    onChange={() => { }}
                />

                <ChangePasswordInput
                    placeholder='New password'
                    onChange={() => { }}
                />

                <ChangePasswordInput
                    placeholder='Retype new password'
                    onChange={() => { }}
                />

                <View style={{ alignItems: "flex-start" }}>
                    <Button labelStyle={styles.forgotPassword}>
                        Forgotten your password?
                    </Button>
                </View>

            </View>
            <ImageButton
                title="CHANGE PASSWORD"
                style={{ marginTop: "20%" }}
            />
        </Container>
    )
}

interface EditProfileInputProps {
    onChange: ((text: string) => void) | undefined;
    placeholder: string;
}

function ChangePasswordInput({ onChange, placeholder }: EditProfileInputProps) {
    return (
        <View style={{ marginTop: 6 }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.gray6}
                style={styles.inputStyle}
                onChangeText={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "#000000",
        marginTop: 10,
    },
    subTitle: {
        fontSize: 15,
        color: "#000000",
        lineHeight: 25,
        marginTop: 10,
    },
    inputStyle: {
        width: "100%",
        height: 52,
        borderWidth: 1,
        borderColor: "#E4DFDF",
        borderRadius: 14,
        alignSelf: "center",
        paddingHorizontal: 16,
        marginTop: 10,
        fontSize: 12,
        fontWeight: "400",
        color: "#3C3E56",
        backgroundColor: "#FFF",
    },
    forgotPassword: {
        color: "#5669FF",
        lineHeight: 23,
        marginLeft: 4
    }
})